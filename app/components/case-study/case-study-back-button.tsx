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
import { useEffect, useState } from 'react'

const heroColors = {
  fill: '#fff8e8',
  stroke: '#fff8e8',
  labelClassName:
    'text-foreground transition-colors duration-[450ms] ease-out group-hover:text-background',
} as const

const contentColors = {
  fill: caseStudyBlobColors.fill,
  stroke: caseStudyBlobColors.stroke,
  labelClassName: 'text-background',
} as const

export default function CaseStudyBackButton() {
  const fillProgress = useScrollDirectionClipProgress()
  const [heroInView, setHeroInView] = useState(true)

  useEffect(() => {
    const hero = document.getElementById('case-study-hero')
    if (!hero) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroInView(entry.isIntersecting)
      },
      { threshold: 0, rootMargin: '-48px 0px 0px 0px' },
    )

    observer.observe(hero)

    return () => {
      observer.disconnect()
    }
  }, [])

  const colors = heroInView ? heroColors : contentColors

  return (
    <Link
      href="/"
      aria-label="Go back Home"
      className={`group fixed left-16 z-50 flex aspect-[1.872/1] w-36 origin-top-left items-center justify-center transition-all duration-450 ease-out ${
        heroInView ? 'top-12 scale-100' : 'top-11 scale-[0.65]'
      }`}
      style={{
        pointerEvents: fillProgress > 0.01 ? 'auto' : 'none',
      }}
    >
      <div className="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2">
        <BlobMorphFill
          fillProgress={fillProgress}
          label="Go Back Home"
          labelClassName={colors.labelClassName}
          viewBox={caseStudyBlobViewBox}
          clipCx={caseStudyBlobClip.cx}
          clipCy={caseStudyBlobClip.cy}
          clipRadius={caseStudyBlobClip.radius}
          pathD={caseStudyButtonPath}
          hoverPathD={caseStudyButtonHoverPath}
          fill={colors.fill}
          stroke={colors.stroke}
          hoverFill={caseStudyBlobColors.hoverFill}
          hoverStroke={caseStudyBlobColors.hoverStroke}
          strokeWidth={12}
        />
      </div>
    </Link>
  )
}
