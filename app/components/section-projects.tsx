import Image from 'next/image'
import Link from 'next/link'
import {
  caseStudyBlobClip,
  caseStudyButtonHoverPath,
  caseStudyButtonPath,
  caseStudyBlobViewBox,
} from '@/app/components/case-study/case-study-blob-paths'
import BlobMorphFill from '@/app/components/blob-morph-fill'
import ScrollRevealSplitText from '@/app/components/scroll-reveal-split-text'

type SectionProjectsProps = {
  textRevealAt?: number
  buttonBlobFill?: string
  buttonBlobStroke?: string
  buttonBlobHoverFill?: string
  buttonBlobHoverStroke?: string
}

export default function SectionProjects({
  textRevealAt = 0.52,
  buttonBlobFill = '#4A3A30',
  buttonBlobStroke = '#4A3A30',
  buttonBlobHoverFill = '#647C4C',
  buttonBlobHoverStroke = '#647C4C',
}: SectionProjectsProps) {
  return (
    <div className="w-full h-dvh grid place-items-center px-[5.2rem]">
      <div className="flex w-full max-w-378 items-center gap-x-6">
        <div className="-mt-28">
          <ScrollRevealSplitText
            as="h2"
            revealAt={textRevealAt}
            className="max-w-[20.4rem] text-[4.5rem] font-didone tracking-[-0.27rem] leading-none"
          >
            Latest Case Study: Exit
          </ScrollRevealSplitText>
          <ScrollRevealSplitText
            revealAt={textRevealAt}
            as="p"
            className="mt-3 text-2xl tracking-[-0.06rem] leading-none"
          >
            最新のプロジェクト
          </ScrollRevealSplitText>
        </div>

        <div className="relative w-[32.4rem] aspect-519/435 shrink-0">
          <Image
            src="/images/project-placeholder-5.png"
            alt="Exit case study — woman kneeling beside a vintage fan"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="">
          <ScrollRevealSplitText
            as="h3"
            revealAt={textRevealAt}
            className="max-w-100 text-[4.5rem] font-didone tracking-[-0.27rem] leading-none"
          >
            Helping people quit their job
          </ScrollRevealSplitText>
          <ScrollRevealSplitText
            revealAt={textRevealAt}
            as="p"
            className="mt-5 ml-1.5 text-sm font-medium leading-[1.23]"
          >
            BRAND&nbsp;&nbsp;|&nbsp;&nbsp;WEBSITE&nbsp;&nbsp;|&nbsp;&nbsp;CAMPAIGN
          </ScrollRevealSplitText>
          <Link
            href="/projects/exit"
            className="group relative mt-6 w-36 aspect-[1.872/1] flex items-center justify-center"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
              {/* TODO: restore ScrollRevealClipFill when scroll animation is ready */}
              <BlobMorphFill
                fillProgress={1}
                viewBox={caseStudyBlobViewBox}
                clipCx={caseStudyBlobClip.cx}
                clipCy={caseStudyBlobClip.cy}
                clipRadius={caseStudyBlobClip.radius}
                pathD={caseStudyButtonPath}
                hoverPathD={caseStudyButtonHoverPath}
                fill={buttonBlobFill}
                stroke={buttonBlobStroke}
                hoverFill={buttonBlobHoverFill}
                hoverStroke={buttonBlobHoverStroke}
                strokeWidth={12}
              />
            </div>
            <ScrollRevealSplitText
              revealAt={textRevealAt}
              as="span"
              className="relative text-base font-medium leading-[1.23] text-background whitespace-nowrap"
            >
              Read Case Study
            </ScrollRevealSplitText>
          </Link>
        </div>
      </div>
    </div>
  )
}
