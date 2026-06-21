import ScrollRevealSplitText from '@/app/components/scroll-reveal-split-text'

type SectionHeroProps = {
  /** Scroll progress (0–1) on `#scroll-container` before role text appears */
  brandDesignerRevealAt?: number
}

export default function SectionHero({
  brandDesignerRevealAt = 0.12,
}: SectionHeroProps) {
  return (
    <div className="w-full h-dvh grid place-items-center">
      <div className="relative">
        <div className="absolute -top-14 left-1/2 -translate-x-1/2 text-[6.25rem] font-didone tracking-[-0.375rem] leading-none">
          Hi. I’m
        </div>
        <h1 className="text-[15rem] font-didone tracking-[-0.9rem] leading-[1.05]">
          Marin Okada
        </h1>
        <div className="absolute bottom-2 left-4 text-2xl tracking-[-0.06rem] leading-none">
          はじめまして
        </div>
        <div className="absolute bottom-2 -right-4 text-2xl tracking-[-0.06rem] leading-none">
          岡田真凜です。
        </div>

        <div className="absolute -top-64 -right-32 max-w-58">
          <ScrollRevealSplitText
            revealAt={brandDesignerRevealAt}
            className="text-7xl tracking-[-0.27rem] leading-none font-didone"
          >
            Brand Designer
          </ScrollRevealSplitText>
          <ScrollRevealSplitText
            revealAt={brandDesignerRevealAt}
            className="mt-3 text-2xl tracking-[-0.06rem] leading-none"
          >
            ブランドデザイナー
          </ScrollRevealSplitText>
        </div>
      </div>
    </div>
  )
}
