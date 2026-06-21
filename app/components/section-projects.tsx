import Image from 'next/image'
import NextLink from 'next/link'
import ScrollRevealClipFill from '@/app/components/scroll-reveal-clip-fill'
import ScrollRevealSplitText from '@/app/components/scroll-reveal-split-text'
import type { LeafAnimationTiming } from '@/app/hooks/use-scroll-container-progress'

const caseStudyButtonPath =
  'M177.157 72.1603C176.578 73.4834 153.395 90.3747 123.885 86.3817C94.3751 82.3888 71.3754 104.382 43.2691 92.2455C22.1962 83.1458 0.292478 66.1255 7.36119 45.3207C14.4299 24.5159 39.0249 15.3258 46.7165 12.4728C54.408 9.61971 99.1423 -0.331414 123.885 12.1074C137.375 18.8888 131.875 23.3887 165.849 30.6351C199.824 37.8815 177.735 70.8372 177.157 72.1603Z'

const caseStudyButtonHoverPath =
  'M173 68C168 82 142 88 115 85C88 82 65 96 40 86C18 77 3 58 9 40C15 22 36 11 48 9C60 7 98 4 126 13C140 19 136 27 160 33C184 39 178 66 173 68Z'

type SectionProjectsProps = {
  textRevealAt?: number
  buttonBlobAnimation?: LeafAnimationTiming
  buttonBlobFill?: string
  buttonBlobStroke?: string
  buttonBlobHoverFill?: string
  buttonBlobHoverStroke?: string
}

export default function SectionProjects({
  textRevealAt = 0.2,
  buttonBlobAnimation = {
    animationStart: 0.2,
    animationEnd: 0.35,
    fillDuration: 0.3,
  },
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
            src="/images/project-placeholder.png"
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
          <NextLink
            href="#"
            className="group relative mt-6 w-36 aspect-[1.872/1] flex items-center justify-center"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <ScrollRevealClipFill
                {...buttonBlobAnimation}
                viewBox="0 0 191 102"
                clipCx={100}
                clipCy={52}
                clipRadius={120}
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
          </NextLink>
        </div>
      </div>
    </div>
  )
}
