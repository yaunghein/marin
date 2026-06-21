'use client'

import ScrollRevealSplitText from '@/app/components/scroll-reveal-split-text'
import { subscribeScrollProgress } from '@/app/hooks/use-scroll-container-progress'
import { useEffect, useRef } from 'react'

type SectionHeroProps = {
  /** Scroll progress (0–1) on `#scroll-container` before role text appears */
  brandDesignerRevealAt?: number
  /** How far hero content shifts down (in rem) at full parallax */
  contentParallaxOffset?: number
  /** Scroll progress (0–1) at which the full offset is reached */
  contentParallaxEnd?: number
}

function clampProgress(value: number) {
  return Math.min(Math.max(value, 0), 1)
}

export default function SectionHero({
  brandDesignerRevealAt = 0.12,
  contentParallaxOffset = 5,
  contentParallaxEnd = 0.15,
}: SectionHeroProps) {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const content = contentRef.current
    if (!content) {
      return
    }

    const end = Math.max(contentParallaxEnd, 0.001)

    return subscribeScrollProgress((progress) => {
      const amount = contentParallaxOffset * clampProgress(progress / end)
      content.style.transform = `translate3d(0, ${amount}rem, 0)`
    })
  }, [contentParallaxOffset, contentParallaxEnd])

  return (
    <div className="w-full h-dvh grid place-items-center">
      <div
        id="hero-content"
        ref={contentRef}
        className="relative will-change-transform"
      >
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
