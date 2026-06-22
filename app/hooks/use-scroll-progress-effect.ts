'use client'

import { useEffect } from 'react'
import { subscribeScrollProgress } from '@/app/hooks/use-scroll-container-progress'

/** Run a callback on scroll progress changes without triggering React re-renders. */
export function useScrollProgressEffect(
  callback: (progress: number) => void,
  deps: readonly unknown[],
) {
  useEffect(() => {
    return subscribeScrollProgress(callback)
    // eslint-disable-next-line react-hooks/exhaustive-deps -- mirror useEffect(deps)
  }, deps)
}
