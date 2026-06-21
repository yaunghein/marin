'use client'

import {
  getScrollClipFillProgress,
  type LeafAnimationTiming,
  useScrollContainerProgress,
} from '@/app/hooks/use-scroll-container-progress'
import { useId } from 'react'

type ScrollRevealClipFillProps = LeafAnimationTiming & {
  viewBox: string
  clipCx: number
  clipCy: number
  clipRadius: number
  pathD: string
  fill?: string
  stroke?: string
  strokeWidth?: number
  className?: string
}

export default function ScrollRevealClipFill({
  animationStart = 0,
  animationEnd = 1,
  fillDuration = 0.18,
  viewBox,
  clipCx,
  clipCy,
  clipRadius,
  pathD,
  fill = 'currentColor',
  stroke,
  strokeWidth,
  className,
}: ScrollRevealClipFillProps) {
  const progress = useScrollContainerProgress()
  const fillProgress = getScrollClipFillProgress(progress, {
    animationStart,
    animationEnd,
    fillDuration,
  })
  const clipPathId = useId().replace(/:/g, '')

  return (
    <svg
      width="100%"
      height="100%"
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <clipPath id={clipPathId}>
          <circle cx={clipCx} cy={clipCy} r={clipRadius * fillProgress} />
        </clipPath>
      </defs>
      <path
        d={pathD}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        clipPath={`url(#${clipPathId})`}
      />
    </svg>
  )
}
