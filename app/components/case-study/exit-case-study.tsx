import Image from 'next/image'
import CaseStudyBackButton from '@/app/components/case-study/case-study-back-button'
import CaseStudyFooter from '@/app/components/case-study/case-study-footer'
import CaseStudyHero from '@/app/components/case-study/case-study-hero'
import CaseStudyImageGrid from '@/app/components/case-study/case-study-image-grid'
import CaseStudySection from '@/app/components/case-study/case-study-section'
import ExitBeyondScreen from '@/app/components/case-study/exit-beyond-screen'
import ExitColorPalette from '@/app/components/case-study/exit-color-palette'
import ExitPaletteDivider from '@/app/components/case-study/exit-palette-divider'

const asset = (name: string) => `/images/project-detail/${name}`

const guiltCards = [
  {
    title: 'Bench',
    body: 'You do not have to face everything alone. When you feel overwhelmed, there is a place to rely on without judgment. We listen until you can decide for yourself again.',
    src: 'removing-guilt-1.webp',
    alt: 'Two people walking past a convenience store on a city sidewalk',
  },
  {
    title: 'Diamond',
    body: 'Your value does not change, no matter what you are going through. You deserve respect and your dignity always matters.',
    src: 'removing-guilt-2.webp',
    alt: 'Person standing in a busy city intersection',
  },
  {
    title: 'Shield',
    body: 'Sometimes you cannot face the situation anymore. We handle difficult conversations so you have space to breathe and recover.',
    src: 'removing-guilt-3.webp',
    alt: 'Couple sitting on a bench by the waterfront at sunset',
  },
  {
    title: 'Compass',
    body: 'When the future feels unclear, EXIT helps you see your options. We explain what comes next honestly. This helps you move forward calmly and choose your life again.',
    src: 'removing-guilt-4.webp',
    alt: 'Person walking through a tunnel of orange torii gates',
  },
] as const

const keyLearnings = [
  {
    title: 'Brands are built through research and strategy.',
    body: 'By analyzing the company, competitors, and market, I was able to identify challenges and opportunities that were not obvious at first. Research also helped define the brand\u2019s position and target audience.',
  },
  {
    title: 'MVV provides direction for every decision.',
    body: 'Defining the Mission, Vision, and Values clarified the brand\u2019s purpose and future direction. It became a foundation for making consistent decisions throughout the project.',
  },
  {
    title: 'Great concepts balance familiarity and innovation.',
    body: 'A strong concept builds on existing brand strengths while introducing something new. This balance helps keep the brand recognizable while creating a fresh experience.',
  },
  {
    title: 'Design is a way to communicate strategy.',
    body: 'Design is more than aesthetics. Every visual element from the logo and colors to photography should have a clear reason behind it. Together, these elements create a consistent brand story.',
  },
] as const

export default function ExitCaseStudy() {
  return (
    <>
      <main className="bg-background">
        <CaseStudyBackButton />
        <CaseStudyHero />

        <div className="mx-auto max-w-360 px-16 pb-32 pt-24">
          <CaseStudySection
            title="Helping people quit"
            japanese="人々の退職を支援する"
            body="By analyzing EXIT's current situation, as well as its competitors and market insights, we were able to identify potential underlying issues."
            bullets={[
              'Trust Issues: Users are skeptical of the legitimacy and reliability of "resignation agency" services.',
              'Low Brand Recall: EXIT fails to be the "go-to" solution when users decide to quit.',
              'No Post-Resignation Support: The service ends at quitting, ignoring the user\u2019s next career steps.',
              'Lack of Emotional Support: The experience is cold and transactional, ignoring the emotional stress of leaving.',
            ]}
            afterBody={
              <>
                <p>
                  EXIT operated purely as a functional emergency exit because
                  its platform focused heavily on price, logic, and efficiency
                  rather than emotional support, leaving users with a cold,
                  impersonal experience that lacked a visible brand story and
                  purpose.
                </p>
                <div className="mt-16">
                  <CaseStudyImageGrid
                    bleed={false}
                    images={[
                      {
                        src: asset('help-people-quit-1.webp'),
                        alt: 'EXIT legacy website homepage',
                        aspect: 'aspect-766/431',
                      },
                      {
                        src: asset('help-people-quit-2.webp'),
                        alt: 'EXIT legacy campaign materials',
                        aspect: 'aspect-766/431',
                      },
                    ]}
                  />
                </div>
              </>
            }
          />

          <CaseStudySection
            title="Removing guilt"
            japanese="罪悪感から解放する"
            afterBody={
              <>
                <div className="space-y-6">
                  <p>
                    Our vision is to turn resignation into a normal personal
                    choice, where people aren&apos;t held back by guilt or
                    expectations, but are empowered to take control of their
                    careers and see leaving a job as a respected, stress-free
                    step forward.
                  </p>
                  <p>
                    Our mission is to be a constant, supportive companion
                    throughout your career journey. We see career transition not
                    as a single moment but as a continuous process of growth.
                    Staying by your side and moving at your pace, we help you
                    regain confidence and thrive as your authentic self.
                  </p>
                </div>

                <div className="mt-10 space-y-5">
                  {guiltCards.map((card) => (
                    <div
                      key={card.title}
                      className="grid grid-cols-[20.5rem_1fr] items-start gap-x-10"
                    >
                      <div className="relative aspect-328/217 w-full overflow-hidden">
                        <Image
                          src={asset(card.src)}
                          alt={card.alt}
                          fill
                          className="object-cover"
                          sizes="328px"
                        />
                      </div>
                      <div>
                        <h3 className="text-[2rem] font-medium leading-7 tracking-[-0.04rem]">
                          {card.title}
                        </h3>
                        <p className="mt-2 text-2xl font-medium leading-8 tracking-[-0.03rem]">
                          {card.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            }
          />

          <CaseStudySection
            title="Real human perspective"
            japanese="リアルな人間視点"
            body="People are shown in natural, unposed moments walking in the city or waiting at a station to keep the focus on real-life storytelling rather than staged visuals. Faces are often hidden, allowing viewers to see themselves in the story."
          >
            <CaseStudyImageGrid
              asymmetric
              images={[
                {
                  src: asset('real-human-perspective-1.webp'),
                  alt: 'Person walking up wooden stairs in blue pants',
                  aspect: 'aspect-[547/460]',
                },
                {
                  src: asset('real-human-perspective-2.webp'),
                  alt: 'Person at a vending machine',
                  aspect: 'aspect-[765/460]',
                },
                {
                  src: asset('real-human-perspective-3.webp'),
                  alt: 'Person sitting at a cafe with coffee',
                  aspect: 'aspect-[547/506]',
                },
                {
                  src: asset('real-human-perspective-4.webp'),
                  alt: 'Person riding a bicycle along the waterfront',
                  aspect: 'aspect-[765/507]',
                },
              ]}
            />
          </CaseStudySection>

          <CaseStudySection
            title="A more certain future"
            japanese="安心できる未来"
            body='When people think about leaving a job, they often face an uncertain future. By asking, "What would you do next?", this campaign shifts the focus from fear to possibility and positions EXIT as the first brand people think of when deciding to quit and start a new chapter.'
          >
            <CaseStudyImageGrid
              asymmetric
              images={[
                {
                  src: asset('certain-future-1.webp'),
                  alt: 'EXIT logo painted on a public square',
                  aspect: 'aspect-[547/396]',
                },
                {
                  src: asset('certain-future-2.webp'),
                  alt: 'EXIT sign inside a subway train',
                  aspect: 'aspect-[765/396]',
                },
                {
                  src: asset('certain-future-3.webp'),
                  alt: 'Colorful stairs with campaign messaging',
                  aspect: 'aspect-[547/394]',
                },
                {
                  src: asset('certain-future-4.webp'),
                  alt: 'Blue lockers with EXIT branding',
                  aspect: 'aspect-[765/394]',
                },
              ]}
            />
          </CaseStudySection>

          <CaseStudySection
            title="TeamLab Collaboration"
            japanese="チームラボと共創する"
            body="Created in collaboration with TeamLab, this immersive experience redefines resignation as a positive step toward a new beginning through reflection, art, and future vision."
            bullets={[
              'Write your emotions: Write worries, struggles, or things they want to let go of on colorful balls at the first room.',
              'Look back on your path: Enter an immersive space where colorful light patterns bloom beneath their feet with every step.',
              'Break Out Moment: Throw colorful balls onto an infinite canvas. As they hit, the negative words you wrote shatter and transform into vibrant paint.',
              'Draw Future Canvas: Write your dreams and future goals on a large canvas. Then walk toward the final door, where the message "WHAT\'S NEXT?" awaits.',
            ]}
          >
            <CaseStudyImageGrid
              asymmetric
              images={[
                {
                  src: asset('team-lab-1.webp'),
                  alt: 'Colorful bouncy balls at TeamLab',
                  aspect: 'aspect-[547/284]',
                },
                {
                  src: asset('team-lab-2.webp'),
                  alt: 'Dark room with glowing orbs',
                  aspect: 'aspect-[765/284]',
                },
                {
                  src: asset('team-lab-3.webp'),
                  alt: 'Kaleidoscopic abstract light pattern',
                  aspect: 'aspect-[547/284]',
                },
                {
                  src: asset('team-lab-4.webp'),
                  alt: 'Gallery space with projected light art',
                  aspect: 'aspect-[765/284]',
                },
              ]}
            />
          </CaseStudySection>

          <CaseStudySection
            title="Redefining escape"
            japanese="「逃げる」を再定義する"
            body='The core idea of the brand identity is to redefine what "EXIT" means. Instead of seeing it as a way to escape, we reimagined it as an entrance to a new future—a gateway to the next chapter of your life.'
          >
            <div>
              <ExitPaletteDivider />
              <ExitColorPalette />
              <div className="relative aspect-2622/1112 w-full overflow-hidden">
                <Image
                  src={asset('redefining-escape-1.webp')}
                  alt="Modern cafe interior with large windows overlooking greenery"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1440px) 100vw, 1312px"
                />
              </div>
            </div>
          </CaseStudySection>

          <CaseStudySection
            title="An optimistic future"
            japanese="希望に満ちた未来"
            body='The logo functions as a bridge and also EXIT itself becomes a gate to a new world, visually splitting to represent the transition from "Ex" (the past company) to "It" (the path). Through iconography like pinwheels and fans, the visual language evokes a sense of "feeling the wind" a gentle push toward growth and new beginnings.'
            afterBody={
              <div className="relative mt-8 aspect-1536/1868 w-full overflow-hidden">
                <Image
                  src={asset('optimistic-future.webp')}
                  alt="EXIT logo system — icons and wordmark variations"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 47.8125rem"
                />
              </div>
            }
          />

          <CaseStudySection
            title="Digital Communication"
            japanese="デジタルにおける接点"
            body="Use natural, candid photos and custom graphics to create a friendly and soft visual style. This approach makes the brand feel approachable and personal, aiming to provide a warm experience that supports users as they move toward their next chapter."
          >
            <div className="grid grid-cols-[298fr_340fr_339fr_339fr]">
              {[
                {
                  src: 'digital-communication-1.webp',
                  alt: 'Instagram post mockup',
                  aspect: 'aspect-[298/597]',
                },
                {
                  src: 'digital-communication-2.webp',
                  alt: 'Instagram story mockup — blue',
                  aspect: 'aspect-[340/597]',
                },
                {
                  src: 'digital-communication-3.webp',
                  alt: 'Instagram story mockup — yellow',
                  aspect: 'aspect-[339/597]',
                },
                {
                  src: 'digital-communication-4.webp',
                  alt: 'Instagram Reels mockup',
                  aspect: 'aspect-[339/597]',
                },
              ].map((item) => (
                <div
                  key={item.src}
                  className={`relative w-full overflow-hidden ${item.aspect}`}
                >
                  <Image
                    src={asset(item.src)}
                    alt={item.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 25vw, 328px"
                  />
                </div>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection
            title="Beyond the Screen"
            japanese="画面を超えた体験"
            body="Imagined where our users go and what they use in their everyday lives, aiming to make the brand a natural part of their world. By creating tangible items they can wear and interact with, we offer a warm experience that goes beyond a service."
          >
            <ExitBeyondScreen />
          </CaseStudySection>

          <section>
            <div className="grid grid-cols-1 items-start gap-x-14 gap-y-6 lg:grid-cols-[30.6875rem_1fr]">
              <div className="lg:sticky lg:top-32 lg:self-start">
                <h2 className="text-[3rem] font-medium leading-11.5 tracking-[-0.06rem]">
                  Key learnings
                </h2>
                <p className="mt-2.5 text-2xl font-normal leading-8 tracking-[-0.06rem]">
                  学んだこと
                </p>
              </div>

              <div>
                <p className="text-2xl font-medium leading-8 tracking-[-0.03rem]">
                  The most important lesson I learned from this project is that
                  successful branding requires alignment between research,
                  strategy, and design. Clear direction guides decisions, and
                  design brings that strategy to life.
                </p>

                <div className="mt-10 space-y-10">
                  {keyLearnings.map((item) => (
                    <div key={item.title}>
                      <h3 className="text-[2rem] font-medium leading-7 tracking-[-0.04rem]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-2xl font-medium leading-8 tracking-[-0.03rem]">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <CaseStudyFooter />
    </>
  )
}
