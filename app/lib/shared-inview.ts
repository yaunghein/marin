type InviewCallback = (visible: boolean) => void

const observedElements = new Map<Element, InviewCallback>()
let observer: IntersectionObserver | null = null

function getSharedInviewObserver(threshold: number) {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          observedElements.get(entry.target)?.(entry.isIntersecting)
        }
      },
      { threshold },
    )
  }

  return observer
}

export function observeInview(
  element: Element,
  callback: InviewCallback,
  threshold = 0.15,
): () => void {
  observedElements.set(element, callback)
  getSharedInviewObserver(threshold).observe(element)

  return () => {
    observedElements.delete(element)
    observer?.unobserve(element)
  }
}
