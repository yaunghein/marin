'use client'

import {
  getLeafAnimationProgress,
  type LeafAnimationTiming,
  useScrollContainerProgress,
} from '@/app/hooks/use-scroll-container-progress'

export default function LeafThree({
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
  const stemClipHeight = 2159 * stemProgress

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1569 2159"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="leaf-three-stem-clip">
          <rect
            x="0"
            y={2159 - stemClipHeight}
            width="1569"
            height={stemClipHeight}
          />
        </clipPath>
        <clipPath id="leaf-three-fill-reveal">
          <circle cx="681" cy="89" r={155 * fillProgress} />
        </clipPath>
      </defs>
      <path
        d="M681.126 89.3468C674.13 90.4023 656.256 97.7982 646.134 100.244C636.011 102.689 611.868 99.8641 594.145 83.0927C582.904 72.4553 559.678 40.6855 558.866 40.0532C558.054 39.4208 574.423 31.8981 589.235 29.5021C602.722 27.3207 622.922 22.9659 650.285 37.0126C655.134 39.5016 664.829 43.6973 672.99 68.2815C681.152 92.8656 688.122 88.2912 681.126 89.3468Z"
        fill="#647C4C"
        clipPath="url(#leaf-three-fill-reveal)"
      />
      <path
        d="M890.991 2157.99L895.739 2158.77C906.898 2009.86 898.575 1901.8 880.401 1818.65C862.212 1735.42 834.209 1677.4 806.34 1628.6C778.321 1579.53 751.216 1540.93 733.612 1495.01C716.197 1449.59 708.236 1397.13 719.647 1321.47L714.946 1320.28L710.244 1319.09C698.575 1396.45 706.644 1450.97 724.865 1498.5C742.898 1545.53 771.035 1585.85 798.362 1633.7C825.839 1681.82 853.284 1738.7 871.143 1820.42C889.017 1902.2 897.341 2009.11 886.243 2157.21L890.991 2157.99ZM714.946 1320.28L719.647 1321.47C731.098 1245.54 763.503 1151.98 798.703 1048.33C833.82 944.929 871.592 831.824 893.296 717.547C915 603.271 920.731 487.375 891.437 378.419C862.095 269.285 797.741 167.595 680.123 81.7141L677.675 86.0035L675.227 90.293C790.954 174.793 853.701 274.32 882.312 380.736C910.971 487.33 905.507 601.318 883.962 714.756C862.417 828.193 824.887 940.634 789.745 1044.11C754.686 1147.34 721.873 1241.98 710.244 1319.09L714.946 1320.28Z"
        fill="#647C4C"
        clipPath="url(#leaf-three-stem-clip)"
        opacity={stemOpacity}
      />
      <path
        d="M681.126 89.3468C674.13 90.4023 656.256 97.7982 646.134 100.244C636.011 102.689 611.868 99.8641 594.145 83.0927C582.904 72.4553 559.678 40.6855 558.866 40.0532C558.054 39.4208 574.423 31.8981 589.235 29.5021C602.722 27.3207 622.922 22.9659 650.285 37.0126C655.134 39.5016 664.829 43.6973 672.99 68.2815C681.152 92.8656 688.122 88.2912 681.126 89.3468Z"
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
