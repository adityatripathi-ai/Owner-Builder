
import { motion } from "framer-motion";

import featureIcon1 from "../../assets/icons/Vector-7.png";
import featureIcon2 from "../../assets/icons/Vector-8.png";
import featureIcon3 from "../../assets/icons/Vector-9.png";
import { SplitText, FloatingOrbs, TiltCard } from "../common/Animations";

const steps = [
  {
    number: "01/PREPARE",
    icon: featureIcon1,
    title: "Set your foundation",
    description:
      "Gather project details, initial estimates and the documents that define your build.",
  },
  {
    number: "02/COORDINATE",
    icon: featureIcon2,
    title: "Connect the details",
    description:
      "Organize your trades, selections and schedule around the work ahead.",
  },
  {
    number: "03/FOLLOW THROUGH",
    icon: featureIcon3,
    title: "Keep the build in view",
    description:
      "Review costs, update tasks and document the final items that need attention.",
  },
];

const PlanningSection = () => {
  return (
    <section className="relative w-full bg-[#20244F] overflow-hidden">
      <FloatingOrbs />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 py-12 sm:py-14 md:py-16">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#A9A5F5] text-[10px] sm:text-[14px] font-semibold uppercase tracking-[1.5px] mb-3">
            A practical rhythm
          </p>

          <h2 className="font-['Georgia',serif] text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] font-normal leading-[1.15] text-white max-w-[600px]">
            <SplitText text="From a plan to a place to call home." />
          </h2>
        </motion.div>

        {/* STEP CARDS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-7 sm:mt-8"
        >
          {steps.map((step) => (
            <TiltCard
              key={step.number}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
                hover: { y: -5 },
              }}
              transition={{ duration: 0.6 }}
              whileHover="hover"
              className="bg-white rounded-[4px] p-5 sm:p-6 min-h-[125px] flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-5">

                {/* ICON ANIMATION */}
                <motion.img
                  src={step.icon}
                  alt={`${step.title} icon`}
                  className="w-5 h-5 object-contain"
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

                <span className="text-[#94929d] text-[12px] tracking-wider">
                  {step.number}
                </span>
              </div>

              <div>
                <h3 className="text-[#20244F] text-[13px] sm:text-[15px] font-semibold leading-snug mb-2">
                  {step.title}
                </h3>

                <p className="text-[#666666] text-[11px] sm:text-[14px] leading-[1.6]">
                  {step.description}
                </p>
              </div>
            </TiltCard>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default PlanningSection;
