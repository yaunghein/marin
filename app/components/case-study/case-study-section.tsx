import type { ReactNode } from 'react'

type CaseStudySectionProps = {
  title: string
  japanese?: string
  body?: string
  afterBody?: ReactNode
  bullets?: string[]
  steps?: { title: string; body: string }[]
  children?: ReactNode
  className?: string
  sticky?: boolean
}

export default function CaseStudySection({
  title,
  japanese,
  body,
  afterBody,
  bullets,
  steps,
  children,
  className = '',
  sticky = true,
}: CaseStudySectionProps) {
  return (
    <section className={`mb-30 last:mb-0 ${className}`}>
      <div className="grid grid-cols-1 items-start gap-x-14 gap-y-6 lg:grid-cols-[30.6875rem_1fr]">
        <div
          className={
            sticky ? 'lg:sticky lg:top-32 lg:self-start mb-14' : undefined
          }
        >
          <h2 className="text-[3rem] font-medium leading-11.5 tracking-[-0.06rem] whitespace-nowrap">
            {title}
          </h2>
          {japanese ? (
            <p className="mt-2.5 text-2xl font-normal leading-8 tracking-[-0.06rem]">
              {japanese}
            </p>
          ) : null}
        </div>

        <div>
          {body ? (
            <p className="text-2xl font-medium leading-8 tracking-[-0.03rem]">
              {body}
            </p>
          ) : null}

          {bullets ? (
            <ul className="mt-8 list-disc space-y-4 pl-9 text-2xl font-medium leading-8 tracking-[-0.03rem] marker:text-foreground">
              {bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}

          {afterBody ? (
            <div
              className={`text-2xl font-medium leading-8 tracking-[-0.03rem] ${body || bullets || steps ? 'mt-8' : ''}`}
            >
              {afterBody}
            </div>
          ) : null}

          {steps ? (
            <div className="space-y-10">
              {steps.map((step) => (
                <div key={step.title}>
                  <h3 className="text-[2rem] font-medium leading-7 tracking-[-0.04rem]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-2xl font-medium leading-8 tracking-[-0.03rem]">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      {children ? <div className="mt-16 lg:mt-20">{children}</div> : null}
    </section>
  )
}
