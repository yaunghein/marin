'use client'

import BlobMorphFill from '@/app/components/blob-morph-fill'
import {
  caseStudyBlobClip,
  caseStudyBlobColors,
  caseStudyBlobViewBox,
  caseStudyButtonHoverPath,
  caseStudyButtonPath,
} from '@/app/components/case-study/case-study-blob-paths'
import { useScrollDirectionClipProgress } from '@/app/hooks/use-scroll-direction-clip-progress'
import Link from 'next/link'

export default function CaseStudyBackButton() {
  const fillProgress = useScrollDirectionClipProgress()

  return (
    <Link
      href="/"
      aria-label="Go back Home"
      className="group fixed top-12 left-[5.2rem] z-50 flex w-36 aspect-[1.872/1] items-center justify-center"
      style={{
        pointerEvents: fillProgress > 0.01 ? 'auto' : 'none',
      }}
    >
      <div className="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2">
        <BlobMorphFill
          fillProgress={fillProgress}
          label="Go Back Home"
          viewBox={caseStudyBlobViewBox}
          clipCx={caseStudyBlobClip.cx}
          clipCy={caseStudyBlobClip.cy}
          clipRadius={caseStudyBlobClip.radius}
          pathD={caseStudyButtonPath}
          hoverPathD={caseStudyButtonHoverPath}
          fill={caseStudyBlobColors.fill}
          stroke={caseStudyBlobColors.stroke}
          hoverFill={caseStudyBlobColors.hoverFill}
          hoverStroke={caseStudyBlobColors.hoverStroke}
          strokeWidth={12}
        />
      </div>
    </Link>
  )
}
