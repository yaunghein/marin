import NextLink from 'next/link'
import FooterLeaf from '@/app/svgs/footer-leaf'

const footerLinks = [
  { label: 'CV', href: '#' },
  { label: 'GMAIL', href: 'mailto:' },
  { label: 'LINKEDIN', href: '#' },
  { label: 'INSTAGRAM', href: '#' },
] as const

export default function CaseStudyFooter() {
  return (
    <footer id="case-study-footer" className="bg-background">
      <div className="relative mx-auto max-w-360 px-16 pt-6">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center">
          <p className="text-[1.75rem] font-medium leading-7 tracking-[-0.04rem]">
            © 2026 Marin Okada
          </p>

          <div className="pointer-events-none w-19.25 aspect-77/84">
            <FooterLeaf />
          </div>

          <nav className="flex items-center justify-end gap-4 text-[1.25rem] font-medium leading-6 tracking-[0.013rem]">
            {footerLinks.map(({ label, href }) => (
              <NextLink
                key={label}
                href={href}
                target="_blank"
                className="group relative"
              >
                {label}
                <div className="absolute bottom-0 left-0 h-[2px] w-full scale-x-0 bg-foreground transition-all duration-500 group-hover:scale-x-100" />
              </NextLink>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
