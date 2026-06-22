import ScrollReverseContainer from '@/app/components/scroll-reverse-container'
import HomeLeaves from '@/app/components/home-leaves'
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
          <SectionHero brandDesignerRevealAt={0.01} />

          <HomeLeaves />
        </div>
      </ScrollReverseContainer>
    </div>
  )
}
