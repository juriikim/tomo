export default function Loading() {
  return (
    <div className="w-screentext-2xl relative h-screen">
      <p className="absolute left-1/2 top-1/3 h-fit w-fit text-2xl duration-1000">
        <span className="animate-loading inline-block">t</span>
        <span className="animate-loading inline-block delay-100">o</span>
        <span className="animate-loading inline-block delay-200">m</span>
        <span className="animate-loading inline-block delay-300">o</span>
        <span className="animate-loading delay-400 inline-block">.</span>
        <span className="animate-loading inline-block delay-500">.</span>
        <span className="animate-loading delay-600 inline-block">.</span>
      </p>
    </div>
  )
}
