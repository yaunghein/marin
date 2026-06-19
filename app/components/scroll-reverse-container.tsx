'use client'

import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'

function clampProgress(value: number) {
  return Math.min(Math.max(value, 0), 1)
}

function getScrollProgress(container: HTMLElement) {
  const rect = container.getBoundingClientRect()
  const scrollableDistance = container.offsetHeight - window.innerHeight

  if (scrollableDistance <= 0) {
    return 1
  }

  return clampProgress(-rect.top / scrollableDistance)
}

type ScrollReverseContainerProps = {
  children: ReactNode
  finishOffset?: number
}

export default function ScrollReverseContainer({
  children,
  finishOffset = 0,
}: ScrollReverseContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<number | null>(null)
  const [translateY, setTranslateY] = useState(0)

  useEffect(() => {
    const scrollContainer = document.getElementById('scroll-container')
    const reverseContainer = containerRef.current

    if (!scrollContainer || !reverseContainer) {
      return
    }

    const updatePosition = () => {
      frameRef.current = null

      const progress = getScrollProgress(scrollContainer)
      const adjustedProgress = clampProgress(
        progress / Math.max(1 - finishOffset, 0.001),
      )
      const reverseDistance = reverseContainer.offsetHeight - window.innerHeight

      setTranslateY(Math.max(reverseDistance, 0) * adjustedProgress)
    }

    const requestUpdate = () => {
      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(updatePosition)
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
  }, [finishOffset])

  const style = {
    '--scroll-reverse-y': `${translateY}px`,
    transform: 'translate3d(0, var(--scroll-reverse-y), 0)',
  } satisfies CSSProperties & {
    '--scroll-reverse-y': string
  }

  return (
    <div
      ref={containerRef}
      id="scroll-reverse-container"
      className="fixed bottom-0 left-0 right-0 h-[300dvh]"
      style={style}
    >
      {children}
    </div>
  )
}
