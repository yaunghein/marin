import Ground from '@/app/svgs/ground'
import LeafZero from '@/app/svgs/leaf.zero'
import LeafOne from '@/app/svgs/leaf-one'
import LeafTwo from '@/app/svgs/leaf-two'
import LeafThree from '@/app/svgs/leaf-three'
import LeafFour from './svgs/leaf-four'
import ScrollReverseContainer from '@/app/components/scroll-reverse-container'
import SectionHero from '@/app/components/section-hero'
import SectionProjects from '@/app/components/section-projects'
import SectionContact from '@/app/components/section-contact'

export default function Home() {
  return (
    <div id="scroll-container" className="relative h-[600dvh]">
      <ScrollReverseContainer finishOffset={0.25}>
        <div
          id="leaf-container"
          className="relative top-0 left-0 right-0 w-full h-[300dvh]"
        >
          <SectionContact />
          <SectionProjects />
          <SectionHero />

          <div className="pointer-events-none absolute left-1/2 translate-x-[-92%] bottom-12 w-40 aspect-[1/1.08]">
            <LeafZero />
          </div>
          <div
            id="leaf-one"
            className="absolute left-1/2 translate-x-[-10%] bottom-12 h-[50vh] aspect-[1.128/1]"
          >
            <LeafOne animationEnd={0.12} />
          </div>
          <div
            id="leaf-two"
            className="pointer-events-none absolute left-1/2 translate-x-[-90.5%] bottom-12 h-[140vh] aspect-[1/2.46]"
          >
            <LeafTwo animationEnd={0.4} />
          </div>
          <div
            id="leaf-three"
            className="pointer-events-none absolute left-1/2 translate-x-[-57%] bottom-12 h-[235vh] aspect-[1/1.376]"
          >
            <LeafThree animationEnd={0.9} />
          </div>
          <div
            id="leaf-four"
            className="pointer-events-none absolute left-1/2 translate-x-[-33%] bottom-10 h-[265vh] aspect-[1/2.64]"
          >
            <LeafFour animationEnd={1} />
          </div>
          <div
            id="ground"
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-10 w-16.5 aspect-[1.74/1]"
          >
            <Ground />
          </div>
        </div>
      </ScrollReverseContainer>
    </div>
  )
}
