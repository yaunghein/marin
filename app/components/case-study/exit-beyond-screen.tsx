import Image from 'next/image'

const asset = (name: string) => `/images/project-detail/${name}`

/** Figma full-bleed split: 611px + 829px = 1440px */
const rows = [
  {
    left: 'beyond-screen-1.webp',
    leftAspect: 'aspect-[611/719]',
    right: 'beyond-screen-2.webp',
    rightAspect: 'aspect-[829/719]',
  },
  {
    left: 'beyond-screen-3.webp',
    leftAspect: 'aspect-[611/636]',
    right: 'beyond-screen-4.webp',
    rightAspect: 'aspect-[829/636]',
  },
  {
    left: 'beyond-screen-5.webp',
    leftAspect: 'aspect-[611/663]',
    right: 'beyond-screen-6.webp',
    rightAspect: 'aspect-[829/663]',
  },
  {
    left: 'beyond-screen-7.webp',
    leftAspect: 'aspect-[611/642]',
    right: 'beyond-screen-8.webp',
    rightAspect: 'aspect-[829/642]',
  },
  {
    left: 'beyond-screen-9.webp',
    leftAspect: 'aspect-[611/598]',
    right: 'beyond-screen-10.webp',
    rightAspect: 'aspect-[829/598]',
  },
  {
    left: 'beyond-screen-11.webp',
    leftAspect: 'aspect-[611/477]',
    right: 'beyond-screen-12.webp',
    rightAspect: 'aspect-[829/477]',
  },
] as const

export default function ExitBeyondScreen() {
  return (
    <div className="-mx-16">
      {rows.map((row) => (
        <div key={row.left} className="grid grid-cols-[611fr_829fr]">
          <div className={`relative w-full overflow-hidden ${row.leftAspect}`}>
            <Image
              src={asset(row.left)}
              alt=""
              fill
              className="object-cover"
              sizes="42vw"
            />
          </div>
          <div className={`relative w-full overflow-hidden ${row.rightAspect}`}>
            <Image
              src={asset(row.right)}
              alt=""
              fill
              className="object-cover"
              sizes="58vw"
            />
          </div>
        </div>
      ))}
    </div>
  )
}
