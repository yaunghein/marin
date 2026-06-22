'use client'

import Ground from '@/app/svgs/ground'
import LeafZero from '@/app/svgs/leaf.zero'
import LeafOne from '@/app/svgs/leaf-one'
import LeafTwo from '@/app/svgs/leaf-two'
import LeafThree from '@/app/svgs/leaf-three'
import LeafFour from '@/app/svgs/leaf-four'
import { useSyncExternalStore } from 'react'

function subscribeMobile(onStoreChange: () => void) {
  const media = window.matchMedia('(max-width: 768px)')
  media.addEventListener('change', onStoreChange)

  return () => {
    media.removeEventListener('change', onStoreChange)
  }
}

function getMobileSnapshot() {
  return window.matchMedia('(max-width: 768px)').matches
}

function useIsMobile() {
  return useSyncExternalStore(subscribeMobile, getMobileSnapshot, () => false)
}

export default function HomeLeaves() {
  const isMobile = useIsMobile()

  return (
    <>
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
        <LeafTwo animationEnd={isMobile ? 0.28 : 0.4} />
      </div>
      <div
        id="leaf-three"
        className="pointer-events-none absolute left-1/2 translate-x-[-57%] bottom-12 h-[140vh] aspect-[1/1.376] md:h-[235vh]"
      >
        <LeafThree animationEnd={isMobile ? 0.42 : 0.9} />
      </div>
      <div
        id="leaf-four"
        className="pointer-events-none absolute left-1/2 translate-x-[-33%] bottom-10 h-[155vh] aspect-[1/2.64] md:h-[265vh]"
      >
        <LeafFour animationEnd={isMobile ? 0.52 : 1} />
      </div>
      <div
        id="ground"
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-10 w-16.5 aspect-[1.74/1]"
      >
        <Ground />
      </div>
    </>
  )
}
