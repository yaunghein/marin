'use client'

import { useEffect, useRef, useState } from 'react'

function clampProgress(value: number) {
  return Math.min(Math.max(value, 0), 1)
}

function easeOutCubic(value: number) {
  return 1 - Math.pow(1 - value, 3)
}

function getScrollProgress(container: HTMLElement) {
  const rect = container.getBoundingClientRect()
  const scrollableDistance = container.offsetHeight - window.innerHeight

  if (scrollableDistance <= 0) {
    return 1
  }

  return clampProgress(-rect.top / scrollableDistance)
}

export function useScrollContainerProgress() {
  const [progress, setProgress] = useState(0)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    const container = document.getElementById('scroll-container')

    if (!container) {
      return
    }

    const updateProgress = () => {
      frameRef.current = null
      setProgress(getScrollProgress(container))
    }

    const requestUpdate = () => {
      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(updateProgress)
      }
    }

    requestUpdate()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  return progress
}

export type LeafAnimationTiming = {
  animationStart?: number
  animationEnd?: number
  fillDuration?: number
}

export function getLeafAnimationProgress(
  progress: number,
  {
    animationStart = 0,
    animationEnd = 1,
    fillDuration = 0.18,
  }: LeafAnimationTiming = {},
) {
  const animationRange = Math.max(animationEnd - animationStart, 0.001)
  const localProgress = clampProgress(
    (progress - animationStart) / animationRange,
  )
  const fillStart = clampProgress(1 - fillDuration)
  const stemDuration = fillStart * 0.78
  const leafDuration = Math.max(fillStart - stemDuration, 0.001)
  const stemProgress = clampProgress(localProgress / stemDuration)
  const leafProgress = clampProgress(
    (localProgress - stemDuration) / leafDuration,
  )
  const fillProgress = easeOutCubic(
    clampProgress((localProgress - fillStart) / Math.max(fillDuration, 0.001)),
  )

  return {
    stemProgress,
    leafProgress,
    fillProgress,
    stemOpacity: stemProgress > 0.01 ? 1 : 0,
    leafOpacity: leafProgress > 0.01 ? 1 : 0,
  }
}
