'use client'

import { subscribeScrollProgress } from '@/app/hooks/use-scroll-container-progress'
import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'

function clampProgress(value: number) {
  return Math.min(Math.max(value, 0), 1)
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
  const [translateY, setTranslateY] = useState(0)

  useEffect(() => {
    const reverseContainer = containerRef.current
    if (!reverseContainer) {
      return
    }

    const updatePosition = (progress: number) => {
      const adjustedProgress = clampProgress(
        progress / Math.max(1 - finishOffset, 0.001),
      )
      const reverseDistance = reverseContainer.offsetHeight - window.innerHeight

      setTranslateY(Math.max(reverseDistance, 0) * adjustedProgress)
    }

    return subscribeScrollProgress(updatePosition)
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
      className="fixed bottom-0 left-0 right-0 h-[300dvh] will-change-transform"
      style={style}
    >
      {children}
    </div>
  )
}
