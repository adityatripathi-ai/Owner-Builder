const tags = ["Platform Questions", "Project organization", "Getting started"];

export default function Hero() {
  return (
    <section className="bg-[#f4f2ed] text-[#1d2056]">
      <div className="mx-auto max-w-[1280px] px-6 pb-14 pt-6 md:px-12 md:pb-20 md:pt-7">
        <nav
          aria-label="Breadcrumb"
          className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#1d2056]/70 md:text-[10px]"
        >
          <a href="/" className="hover:underline">Home</a>
          <span className="mx-1" aria-hidden="true">/</span>
          <span aria-current="page">Contact us</span>
        </nav>

        <div className="mt-5 grid gap-6 md:mt-6 md:grid-cols-[1fr_340px] md:gap-10 lg:grid-cols-[1fr_380px]">
          <h1 className="font-serif text-[34px] font-normal leading-[1.08] tracking-[-0.01em] md:text-[50px]">
            Every build starts with
            <br className="hidden md:block" /> a conversation.
          </h1>

          <div className="md:pt-3">
            <p className="max-w-[330px] text-[13px] leading-[1.6] text-[#1d2056]/75">
              Planning your home, comparing options or already on site? Tell us
              what you’re working on and where you’d like more clarity.
            </p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-sm border border-[#1d2056]/25 bg-white px-2 py-[3px] text-[9px] text-[#1d2056]"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}