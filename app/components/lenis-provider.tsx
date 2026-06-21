'use client'

import Lenis from 'lenis'
import { usePathname } from 'next/navigation'
import { ReactNode, useEffect, useRef } from 'react'

type LenisProviderProps = {
  children: ReactNode
}

export default function LenisProvider({ children }: LenisProviderProps) {
  const lenisRef = useRef<Lenis | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    })

    lenisRef.current = lenis
    let frameId = 0

    const raf = (time: number) => {
      lenis.raf(time)
      frameId = window.requestAnimationFrame(raf)
    }

    frameId = window.requestAnimationFrame(raf)

    return () => {
      window.cancelAnimationFrame(frameId)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  useEffect(() => {
    const lenis = lenisRef.current

    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    }

    window.scrollTo(0, 0)
  }, [pathname])

  return children
}
