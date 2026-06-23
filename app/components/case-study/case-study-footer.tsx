// import Image from 'next/image'
import NextLink from 'next/link'
import FooterLeaf from '@/app/svgs/footer-leaf'

// const asset = (name: string) => `/images/projects/exit/${name}`

const footerLinks = [
  { label: 'CV', href: '#', underline: false },
  { label: 'GMAIL', href: 'mailto:', underline: false },
  { label: 'LINKEDIN', href: '#', underline: true },
  { label: 'INSTAGRAM', href: '#', underline: false },
] as const

export default function CaseStudyFooter() {
  return (
    <footer id="case-study-footer" className="bg-background">
      {/* <div className="relative aspect-930/664 w-full overflow-hidden">
        <Image
          src={asset('footer-mural.png')}
          alt="Subway station mural featuring the EXIT logo, jumping figure, phone number, and QR code"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div> */}

      <div className="relative mx-auto max-w-360 px-16 pt-6">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center">
          <p className="text-[2rem] font-medium leading-7 tracking-[-0.04rem]">
            © 2026 Marin Okada
          </p>

          <div className="pointer-events-none w-19.25 aspect-77/84">
            <FooterLeaf />
          </div>

          <nav className="flex items-center justify-end gap-4 text-[1.3125rem] font-medium leading-6 tracking-[0.013rem]">
            {footerLinks.map(({ label, href, underline }) => (
              <NextLink
                key={label}
                href={href}
                target="_blank"
                className={
                  underline
                    ? 'underline decoration-from-font underline-offset-2'
                    : undefined
                }
              >
                {label}
              </NextLink>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
