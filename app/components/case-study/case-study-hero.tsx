import Image from 'next/image'

const metaItems = [
  { label: 'Role', value: 'Brand Strategy, Visual Identity' },
  { label: 'Timeline', value: '6 weeks' },
] as const

export default function CaseStudyHero() {
  return (
    <section
      id="case-study-hero"
      className="bg-foreground text-background"
    >
      <div className="mx-auto max-w-360 px-16 pb-16 pt-[12.4375rem]">
        <h1 className="max-w-[84rem] font-didone text-[7.5rem] leading-none tracking-[-0.3rem]">
          Destigmatising resignation, one fresh start at a time.
        </h1>

        <div className="relative mt-18 aspect-2620/913 w-full">
          <Image
            src="/images/project-detail/hero-image.webp"
            alt="EXIT — letterforms filled with lifestyle photography"
            fill
            className="object-contain object-left"
            sizes="(max-width: 1440px) 100vw, 1312px"
            priority
          />
        </div>

        <div className="mt-18 grid grid-cols-[53.75rem_1fr] items-start gap-x-31">
          <p className="text-2xl font-medium leading-8 tracking-[-0.03rem]">
            As Japan&apos;s pioneering first resignation agency, EXIT acts as an
            intermediary for individuals facing difficulties quitting their jobs
            by managing all communications and contacting the employer on their
            behalf to ensure a smooth departure.
          </p>

          <dl className="space-y-3">
            {metaItems.map((item) => (
              <div key={item.label} className="grid">
                <dt className="text-xs leading-3.75 tracking-[0.015rem] text-[#d5a03b]">
                  {item.label}
                </dt>
                <dd className="text-2xl font-medium leading-8 tracking-[-0.03rem]">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
