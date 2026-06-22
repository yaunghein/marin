'use client'

import BlobMorphFill from '@/app/components/blob-morph-fill'
import {
  getScrollClipFillProgress,
  type LeafAnimationTiming,
} from '@/app/hooks/use-scroll-container-progress'
import { useScrollProgressEffect } from '@/app/hooks/use-scroll-progress-effect'
import { useRef } from 'react'

type ScrollRevealClipFillProps = LeafAnimationTiming & {
  viewBox: string
  clipCx: number
  clipCy: number
  clipRadius: number
  pathD: string
  fill?: string
  stroke?: string
  strokeWidth?: number
  /** Organic blob shape on hover. Must share the same path structure as pathD. */
  hoverPathD?: string
  hoverFill?: string
  hoverStroke?: string
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
  hoverPathD,
  hoverFill,
  hoverStroke,
  className,
}: ScrollRevealClipFillProps) {
  const clipCircleRef = useRef<SVGCircleElement>(null)

  useScrollProgressEffect(
    (progress) => {
      const fillProgress = getScrollClipFillProgress(progress, {
        animationStart,
        animationEnd,
        fillDuration,
      })

      clipCircleRef.current?.setAttribute(
        'r',
        String(clipRadius * fillProgress),
      )
    },
    [animationStart, animationEnd, fillDuration, clipRadius],
  )

  return (
    <BlobMorphFill
      fillProgress={0}
      clipCircleRef={clipCircleRef}
      viewBox={viewBox}
      clipCx={clipCx}
      clipCy={clipCy}
      clipRadius={clipRadius}
      pathD={pathD}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      hoverPathD={hoverPathD}
      hoverFill={hoverFill}
      hoverStroke={hoverStroke}
      className={className}
    />
  )
}
