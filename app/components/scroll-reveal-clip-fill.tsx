'use client'

import {
  getScrollClipFillProgress,
  type LeafAnimationTiming,
  useScrollContainerProgress,
} from '@/app/hooks/use-scroll-container-progress'
import { CSSProperties, useId } from 'react'

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
  const progress = useScrollContainerProgress()
  const fillProgress = getScrollClipFillProgress(progress, {
    animationStart,
    animationEnd,
    fillDuration,
  })
  const clipPathId = useId().replace(/:/g, '')
  const morphPathId = useId().replace(/:/g, '')

  return (
    <svg
      width="100%"
      height="100%"
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      style={
        {
          '--blob-fill': fill,
          '--blob-stroke': stroke ?? fill,
          '--blob-fill-hover': hoverFill ?? fill,
          '--blob-stroke-hover': hoverStroke ?? hoverFill ?? stroke ?? fill,
        } as CSSProperties
      }
    >
      {hoverPathD ? (
        <style
          dangerouslySetInnerHTML={{
            __html: `.group:hover .blob-morph-path-${morphPathId}{d:path('${hoverPathD}')}`,
          }}
        />
      ) : null}
      <defs>
        <clipPath id={clipPathId}>
          <circle cx={clipCx} cy={clipCy} r={clipRadius * fillProgress} />
        </clipPath>
      </defs>
      <path
        d={pathD}
        fill="var(--blob-fill)"
        stroke="var(--blob-stroke)"
        strokeWidth={strokeWidth}
        clipPath={`url(#${clipPathId})`}
        className={hoverPathD ? `blob-morph-path blob-morph-path-${morphPathId}` : undefined}
      />
    </svg>
  )
}
