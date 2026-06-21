'use client'

import { useEffect, useRef, useState } from 'react'

const TOP_THRESHOLD = 48
const CLIP_DURATION_MS = 1150

function easeOutCubic(value: number) {
  return 1 - (1 - value) ** 3
}

export function useScrollDirectionClipProgress() {
  const [fillProgress, setFillProgress] = useState(1)
  const fillProgressRef = useRef(1)
  const targetRef = useRef(1)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)
  const animationFrameRef = useRef<number | null>(null)
  const animationStartRef = useRef<number | null>(null)
  const animationFromRef = useRef(1)

  useEffect(() => {
    lastScrollY.current = window.scrollY

    const animateTo = (target: number) => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current)
      }

      animationFromRef.current = fillProgressRef.current
      animationStartRef.current = null

      const step = (timestamp: number) => {
        if (animationStartRef.current === null) {
          animationStartRef.current = timestamp
        }

        const elapsed = timestamp - animationStartRef.current
        const linearProgress = Math.min(elapsed / CLIP_DURATION_MS, 1)
        const easedProgress = easeOutCubic(linearProgress)
        const next =
          animationFromRef.current +
          (target - animationFromRef.current) * easedProgress

        fillProgressRef.current = next
        setFillProgress(next)

        if (linearProgress < 1) {
          animationFrameRef.current = requestAnimationFrame(step)
          return
        }

        fillProgressRef.current = target
        setFillProgress(target)
        animationFrameRef.current = null
        animationStartRef.current = null
      }

      animationFrameRef.current = requestAnimationFrame(step)
    }

    const setTarget = (target: number) => {
      if (targetRef.current === target) {
        return
      }

      targetRef.current = target
      animateTo(target)
    }

    const update = () => {
      const currentScrollY = window.scrollY
      const delta = currentScrollY - lastScrollY.current

      if (currentScrollY <= TOP_THRESHOLD) {
        setTarget(1)
      } else if (delta > 0) {
        setTarget(0)
      } else if (delta < 0) {
        setTarget(1)
      }

      lastScrollY.current = currentScrollY
      ticking.current = false
    }

    const onScroll = () => {
      if (ticking.current) {
        return
      }

      ticking.current = true
      requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)

      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return fillProgress
}
