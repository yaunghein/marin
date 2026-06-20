import NextLink from 'next/link'

const contactLinks = [
  { label: 'CV', href: '#' },
  { label: 'GMAIL', href: 'mailto:' },
  { label: 'LINKEDIN', href: '#' },
  { label: 'INSTAGRAM', href: '#' },
] as const

export default function SectionContact() {
  return (
    <div className="w-full h-dvh grid place-items-center px-[5.2rem]">
      <div className="grid w-full max-w-378 grid-cols-2">
        <div className="max-w-140 -mt-20">
          <h2 className="text-[4.5rem] font-didone tracking-[-0.27rem] leading-none">
            About Me
          </h2>
          <p className="text-2xl tracking-[-0.06rem] leading-8">プロフィール</p>
          <p className="mt-4 text-[1.3125rem] font-medium leading-[1.23] text-foreground">
            I am a creative strategist and designer with a deep passion for
            visual storytelling. I approach brand building the way a director
            approaches a film focusing on narrative, tone, and the emotional
            journey of the audience.
          </p>
        </div>

        <div className="max-w-96 translate-x-[75%] translate-y-20">
          <h2 className="text-[4.5rem] font-didone tracking-[-0.27rem] leading-none">
            Contacts
          </h2>
          <p className="text-2xl tracking-[-0.06rem] leading-8">お問い合わせ</p>
          <nav className="mt-6 flex flex-wrap items-center gap-4 text-[1.3125rem] font-medium leading-6 tracking-[0.013rem]">
            {contactLinks.map(({ label, href }) => (
              <NextLink
                key={label}
                href={href}
                target="_blank"
                className="transition-all hover:underline underline-offset-4"
              >
                {label}
              </NextLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
