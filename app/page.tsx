import Ground from '@/app/svgs/ground'
import LeafZero from '@/app/svgs/leaf.zero'
import LeafOne from '@/app/svgs/leaf-one'
import LeafTwo from '@/app/svgs/leaf-two'
import LeafThree from '@/app/svgs/leaf-three'
import LeafFour from './svgs/leaf-four'
import ScrollReverseContainer from './components/scroll-reverse-container'

export default function Home() {
  return (
    <div id="scroll-container" className="relative h-[600dvh]">
      <ScrollReverseContainer finishOffset={0.25}>
        <div
          id="leaf-container"
          className="relative top-0 left-0 right-0 w-full h-[300dvh]"
        >
          <div className="w-full h-dvh bg-indigo-500/10 grid place-items-center">
            <div className="text-4xl font-bold uppercase">About & Contact</div>
          </div>
          <div className="w-full h-dvh bg-indigo-500/20 grid place-items-center">
            <div className="text-4xl font-bold uppercase">Projects</div>
          </div>
          <div className="w-full h-dvh bg-indigo-500/30 grid place-items-center">
            <div className="text-4xl font-bold uppercase">Hero</div>
          </div>
          <div
            id="ground"
            className="absolute left-1/2 -translate-x-1/2 bottom-10"
          >
            <Ground />
          </div>
          <div className="absolute left-1/2 translate-x-[-92%] bottom-12">
            <LeafZero />
          </div>
          <div id="leaf-one" className="absolute left-1/2 bottom-12">
            <LeafOne animationEnd={0.12} />
          </div>
          <div
            id="leaf-two"
            className="absolute left-1/2 translate-x-[-90.5%] bottom-12"
          >
            <LeafTwo animationEnd={0.4} />
          </div>
          <div
            id="leaf-three"
            className="absolute left-1/2 translate-x-[-57%] bottom-12"
          >
            <LeafThree animationEnd={0.9} />
          </div>
          <div
            id="leaf-four"
            className="absolute left-1/2 translate-x-[-33%] bottom-10"
          >
            <LeafFour animationEnd={1} />
          </div>
        </div>
      </ScrollReverseContainer>
    </div>
  )
}
