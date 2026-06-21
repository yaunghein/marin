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
}

export default function CaseStudyImageGrid({
  images,
  columns = 2,
}: CaseStudyImageGridProps) {
  return (
    <div
      className={
        columns === 4
          ? 'grid grid-cols-4 mx-[-5.2rem]'
          : 'grid grid-cols-2 mx-[-5.2rem]'
      }
    >
      {images.map((image) => (
        <div
          key={image.src}
          className={`relative w-full overflow-hidden ${image.aspect ?? 'aspect-755/425'}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className={`object-cover ${image.objectPosition ?? ''}`}
            sizes={
              columns === 4
                ? '(max-width: 1024px) 50vw, 25vw'
                : '(max-width: 1024px) 100vw, 50vw'
            }
          />
        </div>
      ))}
    </div>
  )
}
