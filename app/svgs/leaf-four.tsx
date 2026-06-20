'use client'

import {
  getLeafAnimationProgress,
  type LeafAnimationTiming,
  useScrollContainerProgress,
} from '@/app/hooks/use-scroll-container-progress'

export default function LeafFour({
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
  const stemClipHeight = 2481 * stemProgress

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 941 2481"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="leaf-four-stem-clip">
          <rect
            x="0"
            y={2481 - stemClipHeight}
            width="941"
            height={stemClipHeight}
          />
        </clipPath>
        <clipPath id="leaf-four-fill-reveal">
          <circle cx="607" cy="61" r={155 * fillProgress} />
        </clipPath>
      </defs>
      <path
        d="M607.079 61.4052C607.286 60.3801 630.57 45.5725 638.786 40.2601C647.001 34.9478 669.189 29.8504 689.878 38.9641C703 44.7446 733.044 65.2522 733.951 65.5508C734.858 65.8494 718.749 76.1808 710.736 83.3393C693.597 98.6509 672.064 105.487 654.084 96.3168C644.171 91.2606 624.517 64.5334 620.006 62.8799C615.495 61.2264 606.872 62.4303 607.079 61.4052Z"
        fill="#647C4C"
        clipPath="url(#leaf-four-fill-reveal)"
      />
      <path
        d="M553.648 1167.27L557.619 1164.76L553.648 1167.27ZM498.63 1820.36L502.525 1823.82V1823.82L498.63 1820.36ZM315.431 2444.61L320.271 2445.13C320.576 2196.13 388.302 1975.88 502.525 1823.82L498.63 1820.36L494.735 1816.91C379.115 1970.82 310.899 2193.23 310.591 2444.09L315.431 2444.61ZM498.63 1820.36L502.525 1823.82C580.818 1719.6 628.444 1609.92 639.539 1498.65C650.644 1387.27 625.113 1274.61 557.619 1164.76L553.648 1167.27L549.677 1169.78C615.873 1277.52 640.77 1387.66 629.913 1496.56C619.045 1605.55 572.317 1713.63 494.735 1816.91L498.63 1820.36ZM553.648 1167.27L557.619 1164.76C408.807 922.543 412.129 749.273 413.992 650.3L409.154 649.684L404.315 649.068C402.434 748.973 399.172 924.809 549.677 1169.78L553.648 1167.27ZM409.154 649.684L413.992 650.3C414.923 600.908 424.514 477.845 454.989 354.87C470.223 293.393 490.639 232.096 517.71 180.083C544.799 128.034 578.388 85.5992 619.81 61.3977L617.169 56.819L614.527 52.2403C571.198 77.5557 536.644 121.558 509.132 174.419C481.602 227.315 460.959 289.4 445.612 351.33C414.923 475.168 405.258 599.022 404.315 649.068L409.154 649.684Z"
        fill="#647C4C"
        clipPath="url(#leaf-four-stem-clip)"
        opacity={stemOpacity}
      />
      <path
        d="M607.079 61.4052C607.286 60.3801 630.57 45.5725 638.786 40.2601C647.001 34.9478 669.189 29.8504 689.878 38.9641C703 44.7446 733.044 65.2522 733.951 65.5508C734.858 65.8494 718.749 76.1808 710.736 83.3393C693.597 98.6509 672.064 105.487 654.084 96.3168C644.171 91.2606 624.517 64.5334 620.006 62.8799C615.495 61.2264 606.872 62.4303 607.079 61.4052Z"
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
