'use client'

import { observeInview } from '@/app/lib/shared-inview'
import { useEffect, useRef } from 'react'

function easeInOutCubic(value: number) {
  return value < 0.5
    ? 4 * value * value * value
    : 1 - Math.pow(-2 * value + 2, 3) / 2
}

/** Run a one-shot eased 0→1 progress animation when the element enters the viewport. */
export function useInviewProgressEffect(
  callback: (progress: number) => void,
  {
    duration = 2400,
    threshold = 0.25,
  }: { duration?: number; threshold?: number } = {},
) {
  const callbackRef = useRef(callback)
  callbackRef.current = callback

  useEffect(() => {
    const element = document.getElementById('case-study-footer')
    if (!element) {
      return
    }

    let rafId = 0
    let hasAnimated = false

    const unobserve = observeInview(
      element,
      (visible) => {
        if (!visible || hasAnimated) {
          return
        }

        hasAnimated = true
        const start = performance.now()

        const tick = (now: number) => {
          const linearProgress = Math.min((now - start) / duration, 1)
          callbackRef.current(easeInOutCubic(linearProgress))

          if (linearProgress < 1) {
            rafId = requestAnimationFrame(tick)
          }
        }

        rafId = requestAnimationFrame(tick)
      },
      threshold,
    )

    return () => {
      cancelAnimationFrame(rafId)
      unobserve()
    }
  }, [duration, threshold])
}
