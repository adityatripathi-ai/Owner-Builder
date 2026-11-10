
import featureIcon1 from "../../../assets/icons/Vector-23.png";
import featureIcon2 from "../../../assets/icons/Vector-30.png";
import featureIcon3 from "../../../assets/icons/Vector-26.png";

const steps = [
  {
    icon: featureIcon1,
    title: "Share the context",
    text: "Let us know your project stage and the information you want to explore.",
  },
  {
    icon: featureIcon2,
    title: "Explore the fit",
    text: "Discuss the capabilities relevant to your needs and the questions you have.",
  },
  {
    icon: featureIcon3,
    title: "Clarify the next step",
    text: "Identify a useful starting point for a more focused building process.",
  },
];

export default function NextSteps() {
  return (
    <section className="bg-[#f4f2ed] text-[#1d2056]">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-12 py-14 md:py-20">

        {/* SECTION HEADING */}
        <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#1d2056]/60">
          A clear next step
        </p>

        <h2 className="mt-3 font-serif text-[30px] leading-tight sm:text-[34px] md:text-[40px]">
          Start with the right conversation.
        </h2>

        <p className="mt-3 max-w-xl text-[12px] sm:text-[13px] leading-relaxed text-[#1d2056]/70">
          Your inquiry helps frame a practical discussion about your project and
          the platform.
        </p>

        {/* FEATURE CARDS */}
        <ol className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="
                rounded-md
                border border-[#1d2056]/10
                bg-white
                p-5 md:p-6
                hover:border-[#A9A5F5]
                transition-colors duration-300
              "
            >
              {/* ICON AND NUMBER */}
              <div className="flex items-start justify-between">
                <img
                  src={step.icon}
                  alt={`${step.title} icon`}
                  className="w-4 h-4 object-contain"
                />

                <span className="text-[10px] text-[#1d2056]/45">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* TITLE */}
              <h3 className="mt-6 text-[14px] font-semibold">
                {step.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-1.5 max-w-[260px] text-[11px] sm:text-[12px] leading-relaxed text-[#1d2056]/65">
                {step.text}
              </p>
            </li>
          ))}
        </ol>

      </div>
    </section>
  );
}
