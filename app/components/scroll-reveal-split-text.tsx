'use client'

import { observeInview } from '@/app/lib/shared-inview'
import { subscribeScrollProgress } from '@/app/hooks/use-scroll-container-progress'
import { CSSProperties, ReactNode, useEffect, useRef } from 'react'

export type SplitTextElement =
  | 'div'
  | 'span'
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'

export type SplitUnit = 'char' | 'word' | 'line'

const SPLIT_STRING_ATTR: Record<SplitUnit, string> = {
  char: 'word|char',
  word: 'word',
  line: 'line|word|char',
}

type ScrollRevealSplitTextProps = {
  as?: SplitTextElement
  /** Which unit drives the reveal stagger: character, word, or line. Default "char". */
  splitUnit?: SplitUnit
  /** Scroll progress (0–1) on `#scroll-container`. Used when revealMode is "scroll". */
  revealAt?: number
  /** "scroll" uses page progress. "inview" reveals when the element enters the viewport. */
  revealMode?: 'scroll' | 'inview'
  /** Intersection ratio (0–1) required before inview reveal. Default 0.15. */
  inviewThreshold?: number
  /** Speed multiplier. 2 = twice as fast. Default 1. */
  speed?: number
  /** Transition duration in seconds. Overrides speed when set. */
  duration?: number
  /** Stagger step between units in seconds. Overrides speed when set. */
  stagger?: number
  className?: string
  children: ReactNode
}

export default function ScrollRevealSplitText({
  as: Tag = 'div',
  splitUnit = 'char',
  revealAt = 0.12,
  revealMode = 'scroll',
  inviewThreshold = 0.15,
  speed = 1,
  duration,
  stagger,
  className,
  children,
}: ScrollRevealSplitTextProps) {
  const elementRef = useRef<HTMLElement | null>(null)
  const resolvedDuration = duration ?? 0.9 / speed
  const resolvedStagger = stagger ?? 0.3 / speed

  useEffect(() => {
    const element = elementRef.current
    if (!element) {
      return
    }

    let isVisible = false
    let isSplit = element.classList.contains('-splitted')

    const applyReveal = () => {
      element.classList.toggle('is-scroll-revealed', isSplit && isVisible)
    }

    const triggerRevealAfterSplit = () => {
      element.classList.remove('is-scroll-revealed')
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          applyReveal()
        })
      })
    }

    const splitObserver = new MutationObserver(() => {
      if (!element.classList.contains('-splitted') || isSplit) {
        return
      }

      isSplit = true
      triggerRevealAfterSplit()
    })

    splitObserver.observe(element, {
      attributes: true,
      attributeFilter: ['class'],
    })

    const setVisible = (visible: boolean) => {
      const wasVisible = isVisible
      isVisible = visible

      if (!isSplit) {
        return
      }

      if (visible && !wasVisible) {
        triggerRevealAfterSplit()
        return
      }

      applyReveal()
    }

    if (revealMode === 'scroll') {
      const unsubscribe = subscribeScrollProgress((progress) => {
        setVisible(progress >= revealAt)
      })

      return () => {
        unsubscribe()
        splitObserver.disconnect()
      }
    }

    const unobserve = observeInview(element, setVisible, inviewThreshold)

    return () => {
      unobserve()
      splitObserver.disconnect()
    }
  }, [revealAt, revealMode, inviewThreshold])

  return (
    <Tag
      ref={(node) => {
        elementRef.current = node
      }}
      className={className}
      data-string="split"
      data-string-split={SPLIT_STRING_ATTR[splitUnit]}
      data-split-unit={splitUnit}
      style={
        {
          '--string-split-duration': `${resolvedDuration}s`,
          '--string-split-stagger': `${resolvedStagger}s`,
        } as CSSProperties
      }
    >
      {children}
    </Tag>
  )
}
