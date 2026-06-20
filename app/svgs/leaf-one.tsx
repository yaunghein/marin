'use client'

import {
  getLeafAnimationProgress,
  type LeafAnimationTiming,
  useScrollContainerProgress,
} from '@/app/hooks/use-scroll-container-progress'

export default function LeafOne({
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
      width="100%"
      height="100%"
      viewBox="0 0 452 510"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="leaf-one-fill-reveal">
          <circle cx="326" cy="17" r={150 * fillProgress} />
        </clipPath>
      </defs>
      <path
        d="M326.752 16.8115C327.213 15.8732 353.506 7.49847 362.805 4.45884C372.104 1.4192 394.859 2.15338 412.536 16.2454C423.748 25.1834 447.564 52.6797 448.364 53.1999C449.165 53.7201 430.952 59.5979 421.378 64.4744C400.899 74.9048 378.334 76.0193 363.29 62.5635C354.996 55.1448 342.814 24.2866 338.874 21.5366C334.935 18.7866 326.29 17.7498 326.752 16.8115Z"
        fill="#647C4C"
        clipPath="url(#leaf-one-fill-reveal)"
      />
      <path
        d="M3.0225 509.902C3.02069 385.168 -1.66843 322.572 139.164 266.168C279.996 209.764 222.617 14.2093 344.164 15.1681"
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
        d="M326.752 16.8115C327.213 15.8732 353.506 7.49847 362.805 4.45884C372.104 1.4192 394.859 2.15338 412.536 16.2454C423.748 25.1834 447.564 52.6797 448.364 53.1999C449.165 53.7201 430.952 59.5979 421.378 64.4744C400.899 74.9048 378.334 76.0193 363.29 62.5635C354.996 55.1448 342.814 24.2866 338.874 21.5366C334.935 18.7866 326.29 17.7498 326.752 16.8115Z"
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
