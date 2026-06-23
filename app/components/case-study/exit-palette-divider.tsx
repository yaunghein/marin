export default function ExitPaletteDivider() {
  return (
    <div className="mb-10">
      <p className="text-center text-[2rem] font-medium leading-7 tracking-[-0.04rem]">
        Inspired by the warmth of a traditional Japanese café where everyone
        feels welcome.
      </p>
      <div className="relative mt-6 h-13.25 w-full">
        <div className="absolute top-1/2 right-0 left-0 h-px -translate-y-1/2 bg-foreground" />
        <div className="absolute top-0 left-0 h-full w-px bg-foreground" />
        <div className="absolute top-0 right-0 h-full w-px bg-foreground" />
      </div>
    </div>
  )
}
