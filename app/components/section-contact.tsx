import NextLink from 'next/link'
import ScrollRevealSplitText from '@/app/components/scroll-reveal-split-text'

const contactLinks = [
  { label: 'CV', href: '#' },
  { label: 'GMAIL', href: 'mailto:' },
  { label: 'LINKEDIN', href: '#' },
  { label: 'INSTAGRAM', href: '#' },
] as const

type SectionContactProps = {
  /** Scroll progress threshold when revealMode is "scroll". Contact sits at the end of the reverse scroll. */
  revealAt?: number
  revealMode?: 'scroll' | 'inview'
  inviewThreshold?: number
}

export default function SectionContact({
  revealAt = 0.52,
  revealMode = 'inview',
  inviewThreshold = 0.15,
}: SectionContactProps) {
  const revealProps = { revealAt, revealMode, inviewThreshold }

  return (
    <div className="w-full h-dvh grid place-items-center px-[5.2rem]">
      <div className="grid w-full max-w-378 grid-cols-2">
        <div className="max-w-140 -mt-20">
          <ScrollRevealSplitText
            as="h2"
            {...revealProps}
            className="text-[4.5rem] font-didone tracking-[-0.27rem] leading-none"
          >
            About Me
          </ScrollRevealSplitText>
          <ScrollRevealSplitText
            as="p"
            {...revealProps}
            className="text-2xl tracking-[-0.06rem] leading-8"
          >
            プロフィール
          </ScrollRevealSplitText>
          <ScrollRevealSplitText
            as="p"
            {...revealProps}
            splitUnit="line"
            revealAt={0.3}
            duration={2}
            stagger={0.5}
            className="mt-4 text-[1.3125rem] font-medium leading-[1.23] text-foreground"
          >
            I am a creative strategist and designer with a deep passion for
            visual storytelling. I approach brand building the way a director
            approaches a film focusing on narrative, tone, and the emotional
            journey of the audience.
          </ScrollRevealSplitText>
        </div>

        <div className="max-w-96 translate-x-[75%] translate-y-20">
          <ScrollRevealSplitText
            as="h2"
            {...revealProps}
            className="text-[4.5rem] font-didone tracking-[-0.27rem] leading-none"
          >
            Contacts
          </ScrollRevealSplitText>
          <ScrollRevealSplitText
            as="p"
            {...revealProps}
            className="text-2xl tracking-[-0.06rem] leading-8"
          >
            お問い合わせ
          </ScrollRevealSplitText>
          <nav className="mt-6 flex flex-wrap items-center gap-4 text-[1.3125rem] font-medium leading-6 tracking-[0.013rem]">
            {contactLinks.map(({ label, href }) => (
              <NextLink
                key={label}
                href={href}
                target="_blank"
                className="relative group"
              >
                <ScrollRevealSplitText
                  as="span"
                  {...revealProps}
                  className="text-[1.3125rem] font-medium leading-[1.23] text-foreground "
                >
                  {label}
                </ScrollRevealSplitText>
                <div className="absolute bottom-0 left-0 w-full scale-x-0 h-[2px] bg-foreground group-hover:scale-x-100 transition-all duration-500"></div>
              </NextLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
