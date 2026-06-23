'use client'

import {
  getLeafAnimationProgress,
  type LeafAnimationTiming,
} from '@/app/hooks/use-scroll-container-progress'
import { useInviewProgressEffect } from '@/app/hooks/use-inview-progress-effect'
import { useRef } from 'react'

export default function FooterLeaf({
  fillDuration = 0.18,
}: Pick<LeafAnimationTiming, 'fillDuration'>) {
  const stemRef = useRef<SVGPathElement>(null)
  const leafRef = useRef<SVGPathElement>(null)
  const fillCircleRef = useRef<SVGCircleElement>(null)

  useInviewProgressEffect((progress) => {
    const { stemProgress, leafProgress, fillProgress, stemOpacity, leafOpacity } =
      getLeafAnimationProgress(progress, {
        animationStart: 0,
        animationEnd: 1,
        fillDuration,
      })

    fillCircleRef.current?.setAttribute('r', String(120 * fillProgress))

    if (stemRef.current) {
      stemRef.current.style.strokeDashoffset = String(1 - stemProgress)
      stemRef.current.style.opacity = String(stemOpacity)
    }

    if (leafRef.current) {
      leafRef.current.style.strokeDashoffset = String(1 - leafProgress)
      leafRef.current.style.opacity = String(leafOpacity)
    }
  })

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 203 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <clipPath id="footer-leaf-fill-reveal">
          <circle ref={fillCircleRef} cx="120" cy="45" r="0" />
        </clipPath>
      </defs>
      <path
        d="M124.966 89.6034C117.963 90.6136 100.041 97.8935 89.9032 100.273C79.765 102.653 55.6403 99.6715 38.0265 82.7856C26.8548 72.0755 3.83556 40.1558 3.02781 39.5182C2.22006 38.8806 18.6369 31.4642 33.4649 29.1643C46.9648 27.0703 67.1927 22.8466 94.4646 37.0704C99.297 39.5907 108.964 43.8493 116.966 68.4858C124.968 93.1223 131.969 88.5933 124.966 89.6034Z"
        fill="#647C4C"
        clipPath="url(#footer-leaf-fill-reveal)"
      />
      <path
        ref={stemRef}
        d="M183.137 217.995C183.137 217.995 190.77 195.177 177.927 146.677C165.084 98.1774 118.925 87.0003 118.925 87.0003"
        stroke="#647C4C"
        strokeWidth="10"
        strokeLinecap="round"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="1"
        opacity="0"
      />
      <path
        ref={leafRef}
        d="M124.966 89.6034C117.963 90.6136 100.041 97.8935 89.9032 100.273C79.765 102.653 55.6403 99.6715 38.0265 82.7856C26.8548 72.0755 3.83556 40.1558 3.02781 39.5182C2.22006 38.8806 18.6369 31.4642 33.4649 29.1643C46.9648 27.0703 67.1927 22.8466 94.4646 37.0704C99.297 39.5907 108.964 43.8493 116.966 68.4858C124.968 93.1223 131.969 88.5933 124.966 89.6034Z"
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
