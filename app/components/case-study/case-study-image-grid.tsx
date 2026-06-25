import Image from 'next/image'

type GridImage = {
  src: string
  alt: string
  aspect?: string
  objectPosition?: string
}

type CaseStudyImageGridProps = {
  images: GridImage[]
  columns?: 2 | 4
  asymmetric?: boolean
  bleed?: boolean
}

/** Figma content width split: 547px + 765px = 1312px */
const ASYMMETRIC_COLS = 'grid-cols-[547fr_765fr]'

function GridCell({
  image,
  sizes,
}: {
  image: GridImage
  sizes: string
}) {
  return (
    <div
      className={`relative w-full overflow-hidden ${image.aspect ?? 'aspect-[1/0.562]'}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className={`object-cover ${image.objectPosition ?? ''}`}
        sizes={sizes}
      />
    </div>
  )
}

export default function CaseStudyImageGrid({
  images,
  columns = 2,
  asymmetric = false,
  bleed = true,
}: CaseStudyImageGridProps) {
  const sizes =
    columns === 4
      ? '(max-width: 1024px) 50vw, 25vw'
      : asymmetric
        ? '(max-width: 1024px) 100vw, 42vw'
        : '(max-width: 1024px) 100vw, 50vw'

  const gridClass =
    columns === 4
      ? 'grid grid-cols-4'
      : asymmetric
        ? `grid ${ASYMMETRIC_COLS}`
        : 'grid grid-cols-2'

  return (
    <div className={`${gridClass}${bleed ? '' : ''}`}>
      {images.map((image) => (
        <GridCell key={image.src} image={image} sizes={sizes} />
      ))}
    </div>
  )
}
