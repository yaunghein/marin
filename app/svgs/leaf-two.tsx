'use client'

import {
  getLeafAnimationProgress,
  type LeafAnimationTiming,
} from '@/app/hooks/use-scroll-container-progress'
import { useScrollProgressEffect } from '@/app/hooks/use-scroll-progress-effect'
import { useRef } from 'react'

export default function LeafTwo({
  animationStart = 0,
  animationEnd = 1,
  fillDuration = 0.18,
}: LeafAnimationTiming) {
  const fillCircleRef = useRef<SVGCircleElement>(null)
  const stemRef = useRef<SVGPathElement>(null)
  const leafRef = useRef<SVGPathElement>(null)

  useScrollProgressEffect(
    (progress) => {
      const { stemProgress, leafProgress, fillProgress, stemOpacity, leafOpacity } =
        getLeafAnimationProgress(progress, {
          animationStart,
          animationEnd,
          fillDuration,
        })

      fillCircleRef.current?.setAttribute('r', String(150 * fillProgress))

      if (stemRef.current) {
        stemRef.current.style.strokeDashoffset = String(1 - stemProgress)
        stemRef.current.style.opacity = String(stemOpacity)
      }

      if (leafRef.current) {
        leafRef.current.style.strokeDashoffset = String(1 - leafProgress)
        leafRef.current.style.opacity = String(leafOpacity)
      }
    },
    [animationStart, animationEnd, fillDuration],
  )

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 492 1210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="leaf-two-fill-reveal">
          <circle ref={fillCircleRef} cx="130" cy="57" r="0" />
        </clipPath>
      </defs>
      <path
        d="M130.281 57.0871C123.46 58.9652 106.59 68.4296 96.8287 72.059C87.0678 75.6883 62.7596 75.7475 43.172 61.1974C30.7484 51.9688 3.91737 23.1791 3.03621 22.6475C2.15504 22.116 17.5153 12.7044 31.9391 8.56778C45.0712 4.80165 64.6119 -1.91902 93.4487 8.78181C98.5584 10.6779 108.683 13.6938 119.703 37.1359C130.724 60.578 137.103 55.209 130.281 57.0871Z"
        fill="#647C4C"
        clipPath="url(#leaf-two-fill-reveal)"
      />
      <path
        ref={stemRef}
        d="M442.594 1208.96C487.526 865.123 205.414 885.939 433.101 579.697C660.789 273.455 116.895 49.7437 116.895 49.7437"
        stroke="#647C4C"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="1"
        opacity="0"
      />
      <path
        ref={leafRef}
        d="M130.281 57.0871C123.46 58.9652 106.59 68.4296 96.8287 72.059C87.0678 75.6883 62.7596 75.7475 43.172 61.1974C30.7484 51.9688 3.91737 23.1791 3.03621 22.6475C2.15504 22.116 17.5153 12.7044 31.9391 8.56778C45.0712 4.80165 64.6119 -1.91902 93.4487 8.78181C98.5584 10.6779 108.683 13.6938 119.703 37.1359C130.724 60.578 137.103 55.209 130.281 57.0871Z"
        stroke="#647C4C"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="1"
        opacity="0"
      />
    </svg>
  )
}
