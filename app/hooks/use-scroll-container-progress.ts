'use client'

import { useSyncExternalStore } from 'react'

function clampProgress(value: number) {
  return Math.min(Math.max(value, 0), 1)
}

function readProgress(container: HTMLElement) {
  const rect = container.getBoundingClientRect()
  const scrollableDistance = container.offsetHeight - window.innerHeight

  if (scrollableDistance <= 0) {
    return 1
  }

  return clampProgress(-rect.top / scrollableDistance)
}

let progress = 0
let rafId: number | null = null
let isListening = false
const listeners = new Set<() => void>()

function notify() {
  for (const listener of listeners) {
    listener()
  }
}

function updateProgress() {
  rafId = null

  const container = document.getElementById('scroll-container')
  if (!container) {
    return
  }

  const next = readProgress(container)
  if (next === progress) {
    return
  }

  progress = next
  notify()
}

function requestUpdate() {
  if (rafId === null) {
    rafId = window.requestAnimationFrame(updateProgress)
  }
}

function ensureListening() {
  if (isListening) {
    return
  }

  isListening = true
  requestUpdate()
  window.addEventListener('scroll', requestUpdate, { passive: true })
  window.addEventListener('resize', requestUpdate)
}

function subscribe(listener: () => void) {
  ensureListening()
  listeners.add(listener)

  return () => {
    listeners.delete(listener)
  }
}

function getSnapshot() {
  return progress
}

/** Subscribe to scroll progress without triggering React re-renders. */
export function subscribeScrollProgress(
  callback: (value: number) => void,
): () => void {
  callback(progress)

  return subscribe(() => {
    callback(progress)
  })
}

export function useScrollContainerProgress() {
  return useSyncExternalStore(subscribe, getSnapshot, () => 0)
}

function easeOutCubic(value: number) {
  return 1 - Math.pow(1 - value, 3)
}

export type LeafAnimationTiming = {
  animationStart?: number
  animationEnd?: number
  fillDuration?: number
}

export function getLeafAnimationProgress(
  progressValue: number,
  {
    animationStart = 0,
    animationEnd = 1,
    fillDuration = 0.18,
  }: LeafAnimationTiming = {},
) {
  const animationRange = Math.max(animationEnd - animationStart, 0.001)
  const localProgress = clampProgress(
    (progressValue - animationStart) / animationRange,
  )
  const fillStart = clampProgress(1 - fillDuration)
  const stemDuration = fillStart * 0.78
  const leafDuration = Math.max(fillStart - stemDuration, 0.001)
  const stemProgress = clampProgress(localProgress / stemDuration)
  const leafProgress = clampProgress(
    (localProgress - stemDuration) / leafDuration,
  )
  const fillProgress = getClipFillRevealProgress(localProgress, {
    fillDuration,
  })

  return {
    stemProgress,
    leafProgress,
    fillProgress,
    stemOpacity: stemProgress > 0.01 ? 1 : 0,
    leafOpacity: leafProgress > 0.01 ? 1 : 0,
  }
}

export function getClipFillRevealProgress(
  localProgress: number,
  { fillDuration = 1 }: Pick<LeafAnimationTiming, 'fillDuration'> = {},
) {
  const fillStart = clampProgress(1 - fillDuration)

  return easeOutCubic(
    clampProgress(
      (localProgress - fillStart) / Math.max(fillDuration, 0.001),
    ),
  )
}

export function getScrollClipFillProgress(
  progressValue: number,
  {
    animationStart = 0,
    animationEnd = 1,
    fillDuration = 1,
  }: LeafAnimationTiming = {},
) {
  const animationRange = Math.max(animationEnd - animationStart, 0.001)
  const localProgress = clampProgress(
    (progressValue - animationStart) / animationRange,
  )

  return getClipFillRevealProgress(localProgress, { fillDuration })
}
