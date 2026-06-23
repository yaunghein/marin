import Image from 'next/image'

const asset = (name: string) => `/images/projects/exit/${name}`

const rows = [
  {
    layout: 'grid-cols-2',
    images: [
      { src: 'physical-mockup-1.png', alt: 'EXIT business cards and lanyard mockup', aspect: 'aspect-720/718' },
      { src: 'physical-mockup-2.png', alt: 'EXIT notebook and brochure mockup', aspect: 'aspect-720/719' },
    ],
  },
  {
    layout: 'grid-cols-1',
    images: [
      { src: 'physical-mockup-3.png', alt: 'EXIT roll-up banner and flag mockups', aspect: 'aspect-1438/638' },
    ],
  },
  {
    layout: 'grid-cols-1',
    images: [
      { src: 'physical-mockup-4.png', alt: 'EXIT ticket and poster mockups', aspect: 'aspect-1440/642' },
    ],
  },
  {
    layout: 'grid-cols-2',
    images: [
      { src: 'physical-mockup-5.png', alt: 'EXIT door hanger mockups', aspect: 'aspect-722/663' },
      { src: 'physical-mockup-6.png', alt: 'EXIT door hanger and collateral mockups', aspect: 'aspect-720/663' },
    ],
  },
  {
    layout: 'grid-cols-2',
    images: [
      { src: 'physical-mockup-7.png', alt: 'EXIT horizontal banner mockup', aspect: 'aspect-720/477' },
      { src: 'physical-mockup-8.png', alt: 'EXIT subway mural mockup', aspect: 'aspect-720/477' },
    ],
  },
  {
    layout: 'grid-cols-1',
    images: [
      { src: 'physical-mockup-9.png', alt: 'EXIT poster and environmental mockups', aspect: 'aspect-1440/596' },
    ],
  },
] as const

export default function ExitPhysicalMockups() {
  return (
    <div className="-mx-16 space-y-0">
      {rows.map((row) => (
        <div key={row.images[0].src} className={`grid ${row.layout}`}>
          {row.images.map((image) => (
            <div
              key={image.src}
              className={`relative w-full overflow-hidden ${image.aspect}`}
            >
              <Image
                src={asset(image.src)}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
