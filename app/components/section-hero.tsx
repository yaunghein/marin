export default function SectionHero() {
  return (
    <div className="w-full h-dvh grid place-items-center pt-32">
      <div className="relative">
        <div className="absolute -top-14 left-1/2 -translate-x-1/2 text-[6.25rem] font-didone tracking-[-0.375rem] leading-none">
          Hi. I’m
        </div>
        <h1 className="text-[15rem] font-didone tracking-[-0.9rem] leading-[1.05]">
          Marin Okada
        </h1>
        <div className="absolute bottom-2 left-4 text-2xl tracking-[-0.06rem] leading-none">
          はじめまして
        </div>
        <div className="absolute bottom-2 -right-4 text-2xl tracking-[-0.06rem] leading-none">
          岡田真凜です。
        </div>

        <div className="absolute -top-56 -right-32 max-w-58">
          <div className="text-7xl tracking-[-0.27rem] leading-none font-didone">
            Brand Designer
          </div>
          <div className="mt-2 text-2xl tracking-[-0.06rem] leading-none">
            ブランドデザイナー
          </div>
        </div>
      </div>
    </div>
  )
}
