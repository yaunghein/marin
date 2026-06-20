import Ground from '@/app/svgs/ground'
import LeafZero from '@/app/svgs/leaf.zero'
import LeafOne from '@/app/svgs/leaf-one'
import LeafTwo from '@/app/svgs/leaf-two'
import LeafThree from '@/app/svgs/leaf-three'
import LeafFour from './svgs/leaf-four'
import ScrollReverseContainer from '@/app/components/scroll-reverse-container'
import SectionHero from '@/app/components/section-hero'

export default function Home() {
  return (
    <div id="scroll-container" className="relative h-[600dvh]">
      <ScrollReverseContainer finishOffset={0.25}>
        <div
          id="leaf-container"
          className="relative top-0 left-0 right-0 w-full h-[300dvh]"
        >
          <div className="w-full h-dvh grid place-items-center">
            <div className="text-4xl font-bold uppercase">About & Contact</div>
          </div>
          <div className="w-full h-dvh border-y-2 border-black grid place-items-center">
            <div className="text-4xl font-bold uppercase">Projects</div>
          </div>
          <SectionHero />
          <div
            id="ground"
            className="absolute left-1/2 -translate-x-1/2 bottom-10 w-16.5 aspect-[1.74/1]"
          >
            <Ground />
          </div>
          <div className="absolute left-1/2 translate-x-[-92%] bottom-12 w-40 aspect-[1/1.08]">
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
            className="absolute left-1/2 translate-x-[-90.5%] bottom-12 h-[150vh] aspect-[1/2.46]"
          >
            <LeafTwo animationEnd={0.4} />
          </div>
          <div
            id="leaf-three"
            className="absolute left-1/2 translate-x-[-57%] bottom-12 h-[235vh] aspect-[1/1.376]"
          >
            <LeafThree animationEnd={0.9} />
          </div>
          <div
            id="leaf-four"
            className="absolute left-1/2 translate-x-[-33%] bottom-10 h-[265vh] aspect-[1/2.64]"
          >
            <LeafFour animationEnd={1} />
          </div>
        </div>
      </ScrollReverseContainer>
    </div>
  )
}
