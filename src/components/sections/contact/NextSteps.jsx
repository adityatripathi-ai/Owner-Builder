
import { motion } from "framer-motion";

import featureIcon1 from "../../../assets/icons/Vector-23.png";
import featureIcon2 from "../../../assets/icons/Vector-30.png";
import featureIcon3 from "../../../assets/icons/Vector-26.png";

import { TiltCard } from "../../common/Animations";

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

const NextSteps = () => {
  return (
    <section className="bg-[#f4f2ed] text-[#1d2056]">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-12 py-14 md:py-20">

        {/* SECTION HEADING */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[10px] sm:text-[14px] font-semibold uppercase tracking-[1.5px] text-[#1d2056]/60 mb-3">
              A clear next step
            </p>

            <h2 className="font-serif text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] font-normal leading-[1.15] tracking-[-1px]">
              Start with the right conversation.
            </h2>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            <p className="max-w-xl text-[12px] sm:text-[15px] leading-[1.7] text-[#1d2056]/70">
              Your inquiry helps frame a practical discussion about your project and
              the platform.
            </p>
          </motion.div>

        </div>

        {/* FEATURE CARDS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {steps.map((step, i) => (
            <TiltCard
              key={step.title}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
                hover: { y: -5 },
              }}
              transition={{ duration: 0.6 }}
              whileHover="hover"
              className="bg-white border border-[#1d2056]/10 rounded-md p-5 md:p-6 transition-shadow duration-300 hover:shadow-md"
            >
              {/* ICON AND NUMBER */}
              <div className="flex items-start justify-between mb-3">
                <motion.img
                  src={step.icon}
                  alt={`${step.title} icon`}
                  className="w-4 h-4 object-contain"
                  style={{ transformPerspective: 400 }}
                  variants={{
                    hover: {
                      rotateY: 360,
                      scale: 1.15,
                      transition: {
                        duration: 0.7,
                        ease: "easeInOut",
                      },
                    },
                  }}
                />

                <span className="text-[10px] sm:text-[13px] leading-[1.6] text-[#1d2056]/45">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* TITLE */}
              <h3 className="mt-6 text-[13px] sm:text-[16px] font-semibold leading-[1.3] mb-2">
                {step.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="max-w-[260px] text-[11px] sm:text-[14px] leading-[1.7] text-[#1d2056]/65">
                {step.text}
              </p>
            </TiltCard>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default NextSteps;
