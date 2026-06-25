'use client'

import { CSSProperties, RefObject, useId } from 'react'

type BlobMorphFillProps = {
  fillProgress: number
  viewBox: string
  clipCx: number
  clipCy: number
  clipRadius: number
  pathD: string
  fill?: string
  stroke?: string
  strokeWidth?: number
  hoverPathD?: string
  hoverFill?: string
  hoverStroke?: string
  className?: string
  clipTransition?: boolean
  clipCircleRef?: RefObject<SVGCircleElement | null>
  /** Rendered inside the same clip path as the blob shape. */
  label?: string
  labelClassName?: string
}

export default function BlobMorphFill({
  fillProgress,
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
  clipTransition = false,
  clipCircleRef,
  label,
  labelClassName = 'text-background',
}: BlobMorphFillProps) {
  const clipPathId = useId().replace(/:/g, '')
  const morphPathId = useId().replace(/:/g, '')
  const [viewMinX, viewMinY, viewWidth, viewHeight] = viewBox
    .split(/\s+/)
    .map(Number)
  const clipGroupProps = { clipPath: `url(#${clipPathId})` }
  const clipCircleClass = clipTransition ? 'blob-clip-circle' : undefined

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
          <circle
            ref={clipCircleRef}
            cx={clipCx}
            cy={clipCy}
            r={clipCircleRef ? 0 : clipRadius * fillProgress}
            className={clipCircleClass}
          />
        </clipPath>
      </defs>
      <g {...clipGroupProps}>
        <path
          d={pathD}
          fill="var(--blob-fill)"
          stroke="var(--blob-stroke)"
          strokeWidth={strokeWidth}
          className={
            hoverPathD
              ? `blob-morph-path blob-morph-path-${morphPathId}`
              : undefined
          }
        />
        {label ? (
          <foreignObject
            x={viewMinX}
            y={viewMinY}
            width={viewWidth}
            height={viewHeight}
          >
            <div
              className={`flex h-full w-full items-center justify-center text-base font-medium leading-[1.23] ${labelClassName}`}
            >
              {label}
            </div>
          </foreignObject>
        ) : null}
      </g>
    </svg>
  )
}
