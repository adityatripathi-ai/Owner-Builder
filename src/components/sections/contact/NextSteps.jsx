const svgProps = {
  viewBox: "0 0 24 24",
  className: "h-4 w-4",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const ChatIcon = () => (
  <svg {...svgProps}>
    <path d="M4 5h16v11H9l-5 4V5Z" />
  </svg>
);

const FitIcon = () => (
  <svg {...svgProps}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
  </svg>
);

const ArrowIcon = () => (
  <svg {...svgProps}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

const steps = [
  {
    icon: <ChatIcon />,
    title: "Share the context",
    text: "Let us know your project stage and the information you want to explore.",
  },
  {
    icon: <FitIcon />,
    title: "Explore the fit",
    text: "Discuss the capabilities relevant to your needs and the questions you have.",
  },
  {
    icon: <ArrowIcon />,
    title: "Clarify the next step",
    text: "Identify a useful starting point for a more focused building process.",
  },
];

export default function NextSteps() {
  return (
    <section className="bg-[#f4f2ed] text-[#1d2056]">
      <div className="mx-auto max-w-[1280px] px-6 py-14 md:px-12 md:py-20">
        <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#1d2056]/60">
          A good next step
        </p>
        <h2 className="mt-3 font-serif text-[30px] leading-tight md:text-[40px]">
          Start with the right conversation.
        </h2>
        <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-[#1d2056]/70">
          Your inquiry helps frame a practical discussion about your project and
          the platform.
        </p>

        <ol className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="rounded-md border border-[#1d2056]/10 bg-white p-5 md:p-6"
            >
              <div className="flex items-start justify-between">
                <span className="text-[#1d2056]">{step.icon}</span>
                <span className="text-[10px] text-[#1d2056]/45">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 text-[14px] font-semibold">{step.title}</h3>
              <p className="mt-1.5 max-w-[260px] text-[12px] leading-relaxed text-[#1d2056]/65">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}