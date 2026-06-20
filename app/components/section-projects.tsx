import Image from 'next/image'
import NextLink from 'next/link'

export default function SectionProjects() {
  return (
    <div className="w-full h-dvh grid place-items-center px-[5.2rem]">
      <div className="flex w-full max-w-378 items-center gap-x-6">
        <div className="-mt-28">
          <h2 className="max-w-[20.4rem] text-[4.5rem] font-didone tracking-[-0.27rem] leading-[0.89]">
            Latest Case Study: Exit
          </h2>
          <p className="mt-2 text-2xl tracking-[-0.06rem] leading-none">
            最新のプロジェクト
          </p>
        </div>

        <div className="relative w-[32.4rem] aspect-519/435 shrink-0">
          <Image
            src="/images/project-placeholder.png"
            alt="Exit case study — woman kneeling beside a vintage fan"
            fill
          />
        </div>

        <div className="">
          <h3 className="max-w-100 text-[4.5rem] font-didone tracking-[-0.27rem] leading-[0.89]">
            Helping people quit their job
          </h3>
          <p className="mt-5 ml-1.5 text-sm font-medium leading-[1.23]">
            BRAND&nbsp;&nbsp;|&nbsp;&nbsp;WEBSITE&nbsp;&nbsp;|&nbsp;&nbsp;CAMPAIGN
          </p>
          <NextLink
            href="#"
            className="relative mt-6 w-36 aspect-[1.872/1] flex items-center justify-center"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 191 102"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M177.157 72.1603C176.578 73.4834 153.395 90.3747 123.885 86.3817C94.3751 82.3888 71.3754 104.382 43.2691 92.2455C22.1962 83.1458 0.292478 66.1255 7.36119 45.3207C14.4299 24.5159 39.0249 15.3258 46.7165 12.4728C54.408 9.61971 99.1423 -0.331414 123.885 12.1074C137.375 18.8888 131.875 23.3887 165.849 30.6351C199.824 37.8815 177.735 70.8372 177.157 72.1603Z"
                  fill="#4A3A30"
                  stroke="#4A3A30"
                  strokeWidth="12"
                />
              </svg>
            </div>
            <span className="relative text-base font-medium leading-[1.23] text-background whitespace-nowrap">
              Read Case Study
            </span>
          </NextLink>
        </div>
      </div>
    </div>
  )
}
