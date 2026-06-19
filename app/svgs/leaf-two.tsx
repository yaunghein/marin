'use client'

import {
  getLeafAnimationProgress,
  type LeafAnimationTiming,
  useScrollContainerProgress,
} from '@/app/hooks/use-scroll-container-progress'

export default function LeafTwo({
  animationStart = 0,
  animationEnd = 1,
  fillDuration = 0.18,
}: LeafAnimationTiming) {
  const progress = useScrollContainerProgress()
  const { stemProgress, leafProgress, fillProgress, stemOpacity, leafOpacity } =
    getLeafAnimationProgress(progress, {
      animationStart,
      animationEnd,
      fillDuration,
    })

  return (
    <svg
      width="492"
      height="1210"
      viewBox="0 0 492 1210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="leaf-two-fill-reveal">
          <circle cx="130" cy="57" r={150 * fillProgress} />
        </clipPath>
      </defs>
      <path
        d="M130.281 57.0871C123.46 58.9652 106.59 68.4296 96.8287 72.059C87.0678 75.6883 62.7596 75.7475 43.172 61.1974C30.7484 51.9688 3.91737 23.1791 3.03621 22.6475C2.15504 22.116 17.5153 12.7044 31.9391 8.56778C45.0712 4.80165 64.6119 -1.91902 93.4487 8.78181C98.5584 10.6779 108.683 13.6938 119.703 37.1359C130.724 60.578 137.103 55.209 130.281 57.0871Z"
        fill="#647C4C"
        clipPath="url(#leaf-two-fill-reveal)"
      />
      <path
        d="M442.594 1208.96C487.526 865.123 205.414 885.939 433.101 579.697C660.789 273.455 116.895 49.7437 116.895 49.7437"
        stroke="#647C4C"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset={1 - stemProgress}
        opacity={stemOpacity}
      />
      <path
        d="M130.281 57.0871C123.46 58.9652 106.59 68.4296 96.8287 72.059C87.0678 75.6883 62.7596 75.7475 43.172 61.1974C30.7484 51.9688 3.91737 23.1791 3.03621 22.6475C2.15504 22.116 17.5153 12.7044 31.9391 8.56778C45.0712 4.80165 64.6119 -1.91902 93.4487 8.78181C98.5584 10.6779 108.683 13.6938 119.703 37.1359C130.724 60.578 137.103 55.209 130.281 57.0871Z"
        stroke="#647C4C"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset={1 - leafProgress}
        opacity={leafOpacity}
      />
    </svg>
  )
}
