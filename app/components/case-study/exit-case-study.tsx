import Image from 'next/image'
import CaseStudyBackButton from '@/app/components/case-study/case-study-back-button'
import CaseStudyImageGrid from '@/app/components/case-study/case-study-image-grid'
import CaseStudySection from '@/app/components/case-study/case-study-section'
import ExitColorPalette from '@/app/components/case-study/exit-color-palette'
import ScrollRevealSplitText from '../scroll-reveal-split-text'

const asset = (name: string) => `/images/projects/exit/${name}`

const metaItems = [
  { label: 'Role', value: 'Brand Strategy, Visual Identity' },
  { label: 'Timeline', value: '6 weeks' },
  { label: 'Team', value: 'Independent' },
] as const

export default function ExitCaseStudy() {
  return (
    <>
      <main className="bg-background">
        <CaseStudyBackButton />

        <div className="mx-auto max-w-360 px-[5.2rem] pt-42">
          <header>
            <h1 className="max-w-336 font-didone leading-none text-[7.5rem] tracking-[-0.3rem]">
              Destigmatising resignation, one fresh start at a time.
            </h1>

            <div className="grid items-start gap-x-27.25 gap-y-10 mt-12 grid-cols-[40.1875rem_1fr]">
              <p className="text-2xl font-medium leading-8 tracking-[-0.03rem]">
                As Japan&apos;s pioneering first resignation agency, EXIT acts
                as an intermediary for individuals facing difficulties quitting
                their jobs by managing all communications and contacting the
                employer on their behalf to ensure a smooth departure.
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

            <div className="relative mt-16 aspect-1312/463 w-full lg:mt-20">
              <Image
                src={asset('exit-letters-composite.png')}
                alt="EXIT — letterforms filled with lifestyle photography"
                fill
                className="object-contain object-left"
                sizes="(max-width: 1440px) 100vw, 1312px"
                priority
              />
            </div>
          </header>

          <div className="mt-24 lg:mt-32">
            <CaseStudySection
              title="It was emergency exit passed through in panic"
              japanese="パニック状態で、ただの『緊急脱出口』を駆け抜けるだけだった。"
              body="EXIT operated purely as a functional emergency exit because its platform focused heavily on price, logic, and efficiency rather than emotional support, leaving users with a cold, impersonal experience that lacked a visible brand story and purpose."
              bullets={[
                'Trust Issues: Users are skeptical of the legitimacy and reliability of "resignation agency" services.',
                'Low Brand Recall: EXIT fails to be the "go-to" solution when users decide to quit.',
                'No Post-Resignation Support: The service ends at quitting, ignoring the user\u2019s next career steps.',
                'Lack of Emotional Support: The experience is cold and transactional, ignoring the emotional stress of leaving.',
              ]}
            >
              <CaseStudyImageGrid
                images={[
                  {
                    src: '/images/project-placeholder-2.png',
                    alt: 'EXIT legacy website homepage',
                    aspect: 'aspect-[1.7/1]',
                  },
                  {
                    src: '/images/project-placeholder-3.png',
                    alt: 'EXIT legacy campaign materials',
                    aspect: 'aspect-[1.7/1]',
                  },
                ]}
              />
            </CaseStudySection>

            <CaseStudySection
              title="Become the door open in comfort and confidece."
              japanese="安心と自信を持って未来へ踏み出せる「新しい扉」へと生まれ変わった。"
              body="To build deep trust and empathy, the solution introduces a personalized premium plan and a data-driven career platform, establishes a safe and supportive environment backed by real insights, and shifts to user-centered storytelling and co-creation."
              bullets={[
                'Aims to provide personalized premium career support while leveraging real-world data on toxic workplaces to help users make better decisions and build insights for future business solutions.',
                'Focuses on establishing trust and credibility for a resignation service by fostering a safe, user-controlled environment and utilizing transparent, data-driven insights to eliminate common industry skepticism.',
                'Shifts focus from the founder to the user, prioritizing authentic storytelling and "co-creation" by using real client experiences to build deeper emotional connections and trust.',
              ]}
            />

            <CaseStudySection
              title="Art direction focus on real human perspective"
              japanese="人間らしいリアルな視点を大切にしたアートディレクション。"
              body="The art direction uses soft natural light, simple everyday clothing, and familiar Japanese streets. By hiding the faces, anyone can see themselves in the story and connect with the quiet courage of moving forward through a life-changing moment."
            >
              <CaseStudyImageGrid
                images={[
                  {
                    src: asset('art-direction-1.png'),
                    alt: 'Person walking up wooden stairs in blue pants',
                    aspect: 'aspect-[1.43/1]',
                  },
                  {
                    src: asset('art-direction-2.png'),
                    alt: 'Person at a vending machine',
                    aspect: 'aspect-[1.43/1]',
                    objectPosition: 'object-bottom',
                  },
                  {
                    src: asset('art-direction-3.png'),
                    alt: 'Person sitting at a cafe with coffee',
                    aspect: 'aspect-[1.43/1]',
                  },
                  {
                    src: asset('art-direction-4.png'),
                    alt: 'Person riding a bicycle along the waterfront',
                    aspect: 'aspect-[1.43/1]',
                  },
                ]}
              />
            </CaseStudySection>

            <CaseStudySection
              title="Make EXIT part of everyday life through a campaign."
              japanese="キャンペーンを通じて、EXITを人々の日常に浸透させる。"
              body='When people think about leaving a job, they often face an uncertain future. By asking, "What would you do next?", this campaign shifts the focus from fear to possibility and positions EXIT as the first brand people think of when deciding to quit and start a new chapter'
            >
              <CaseStudyImageGrid
                images={[
                  {
                    src: asset('campaign-1.png'),
                    alt: 'EXIT logo painted on a public square',
                    aspect: 'aspect-[732/433]',
                  },
                  {
                    src: asset('campaign-3.png'),
                    alt: 'EXIT sign inside a subway train',
                    aspect: 'aspect-[807/433]',
                  },
                  {
                    src: asset('campaign-2.png'),
                    alt: 'Colorful stairs with campaign messaging',
                    aspect: 'aspect-[807/433]',
                  },
                  {
                    src: asset('campaign-4.png'),
                    alt: 'Blue lockers with EXIT branding',
                    aspect: 'aspect-[807/432]',
                  },
                ]}
              />
            </CaseStudySection>

            <CaseStudySection
              title="Colaborate with Team Lab"
              japanese="チームラボと共創する"
              steps={[
                {
                  title: 'Step 1 - Write your emotions',
                  body: 'At first everyone need to write worries, struggles, or things they want to let go of on colorful balls at the first room.',
                },
                {
                  title: 'Step 2 - Look back your path',
                  body: 'After passing through EXIT, visitors leave a colorful trail of light with every step.',
                },
                {
                  title: 'Step 3 - Break out moment',
                  body: 'Throw colorful balls onto a giant canvas, where their negative words burst into vibrant paint.',
                },
                {
                  title: 'Step 4 - Draw your future canvas',
                  body: 'Write their future dreams on a large canvas before reaching the final door "WHAT\'S NEXT?"',
                },
              ]}
            >
              <CaseStudyImageGrid
                images={[
                  {
                    src: asset('teamlab-1.png'),
                    alt: 'Colorful bouncy balls at TeamLab',
                    aspect: 'aspect-[746/311]',
                  },
                  {
                    src: asset('teamlab-3.png'),
                    alt: 'Dark room with glowing orbs',
                    aspect: 'aspect-[746/311]',
                  },
                  {
                    src: asset('teamlab-2.png'),
                    alt: 'Kaleidoscopic abstract light pattern',
                    aspect: 'aspect-[746/311]',
                  },
                  {
                    src: asset('teamlab-4.png'),
                    alt: 'Gallery space with projected light art',
                    aspect: 'aspect-[746/311]',
                  },
                ]}
              />
            </CaseStudySection>

            <CaseStudySection
              title="Built the visual identity from the strategy."
              japanese="戦略をもとに、ブランドのビジュアルアイデンティティを構築した。"
              body='The core idea of the brand identity is to redefine what "EXIT" means. Instead of seeing it as a way to escape, we reimagined it as an entrance to a new future—a gateway to the next chapter of your life.'
            >
              <div className="">
                <div className="relative h-13.25 w-full">
                  <Image
                    src={asset('palette-divider.png')}
                    alt=""
                    fill
                    className="object-contain object-left"
                    sizes="1310px"
                  />
                </div>
                <p className="mb-10 text-[2rem] font-medium leading-7 tracking-[-0.04rem] text-center">
                  Inspired by the warmth of a traditional Japanese café where
                  everyone feels welcome.
                </p>
                <ExitColorPalette />
                <div className="relative aspect-1311/556 w-full overflow-hidden">
                  <Image
                    src={asset('cafe-interior.png')}
                    alt="Modern cafe interior with large windows overlooking greenery"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1440px) 100vw, 1311px"
                  />
                </div>
              </div>
            </CaseStudySection>

            <section className="-mt-20 lg:mb-24">
              <div className="grid grid-cols-4">
                {[
                  {
                    src: 'social-story-1.png',
                    alt: 'Instagram story mockup — blue',
                  },
                  {
                    src: 'social-story-2.png',
                    alt: 'Instagram story mockup — yellow',
                  },
                  { src: 'social-reels.png', alt: 'Instagram Reels mockup' },
                  { src: 'social-post.png', alt: 'Instagram post mockup' },
                ].map((item) => (
                  <div
                    key={item.src}
                    className="relative aspect-340/605 w-full overflow-hidden"
                  >
                    <Image
                      src={asset(item.src)}
                      alt={item.alt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                ))}
              </div>
            </section>

            <section className="">
              <CaseStudyImageGrid
                images={[
                  {
                    src: asset('brand-assets-1.png'),
                    alt: 'Green business cards and branded ID lanyard',
                    aspect: 'aspect-[1/1]',
                  },
                  {
                    src: asset('brand-assets-2.png'),
                    alt: 'Branded notebook and printed brochures',
                    aspect: 'aspect-[1/1]',
                  },
                ]}
              />
              <CaseStudyImageGrid
                images={[
                  {
                    src: asset('brand-assets-3.png'),
                    alt: 'Patterned notebook and brand collateral',
                    aspect: 'aspect-[1/1]',
                  },
                  {
                    src: asset('brand-assets-4.png'),
                    alt: 'Printed brochures and brand booklets',
                    aspect: 'aspect-[1/1]',
                  },
                ]}
              />
              <CaseStudyImageGrid
                images={[
                  {
                    src: asset('brand-assets-5.png'),
                    alt: 'Branded ticket voucher and door hangers',
                    aspect: 'aspect-[1/1]',
                  },
                  {
                    src: asset('brand-assets-6.png'),
                    alt: 'Colorful door hangers in green, blue, pink, and brown',
                    aspect: 'aspect-[1/1]',
                  },
                ]}
              />
            </section>
          </div>
        </div>
      </main>
      <div className="relative aspect-[1.4/1] w-full overflow-hidden flex">
        <Image
          src={asset('footer-mural.png')}
          alt="Subway station mural featuring the EXIT logo, jumping figure, phone number, and QR code"
          fill
          className="object-cover object-center w-full"
          sizes="100vw"
        />
      </div>
    </>
  )
}
