
import { motion } from "framer-motion";
import { TiltCard } from "../../common/Animations";

import featureIcon1 from "../../../assets/icons/Vector-4.png";
import featureIcon2 from "../../../assets/icons/Vector-32.png";
import featureIcon3 from "../../../assets/icons/Vector-33.png";
import featureIcon4 from "../../../assets/icons/Vector-31.png";

const processSteps = [
  {
    icon: featureIcon1,
    stage: "BEFORE CONSTRUCTION",
    title: "Prepare the project",
    description:
      "Collect project details, organize estimates and create a place for early documents and selections.",
  },
  {
    icon: featureIcon2,
    stage: "DURING CONSTRUCTION",
    title: "Coordinate the details",
    description:
      "Follow the action schedule, keep trade contacts handy, review costs and record progress.",
  },
  {
    icon: featureIcon3,
    stage: "TOWARD COMPLETION",
    title: "Close the loop",
    description:
      "Review punch items, follow up on unfinished work and preserve the project's pictures and documents.",
  },
  {
    icon: featureIcon4,
    stage: "BUILDER ASSISTANT",
    title: "Need Help Building?",
    description:
      "Ask The Builder Right in your pocket. Get quick answers, helpful guidance, and updates throughout your build.",
  },
];

const ServicesProcessSection = () => {
  return (
    <section className="w-full bg-[#1D1F6B] px-5 sm:px-8 lg:px-10 py-14 sm:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8 sm:mb-10"
        >
          <p className="text-white/70 text-[12px] sm:text-[15px] font-semibold uppercase tracking-[1.5px] mb-4">
            Put it into practice
          </p>

          <h2 className="font-serif text-white text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.12] tracking-[-0.01em] font-normal">
            A simpler way to move through the build.
          </h2>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
        >
          {processSteps.map((step) => (
            <TiltCard
              key={step.title}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
                hover: { y: -5 },
              }}
              transition={{ duration: 0.6 }}
              whileHover="hover"
              className="bg-white rounded-md p-5 sm:p-6 h-full transition-shadow duration-300 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <motion.div
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
                >
                  <img
                    src={step.icon}
                    alt=""
                    className="h-5 w-5 object-contain"
                  />
                </motion.div>

                <span className="text-[#9A9AAE] text-[10px] sm:text-[11px] font-semibold uppercase tracking-[1.5px] text-right">
                  {step.stage}
                </span>
              </div>

              <h3 className="mt-6 text-[#20244F] text-[13px] sm:text-[16px] font-semibold leading-[1.3]">
                {step.title}
              </h3>

              <p className="mt-2 text-[#777777] text-[11px] sm:text-[14px] leading-[1.7]">
                {step.description}
              </p>
            </TiltCard>
          ))}
        </motion.ul>

      </div>
    </section>
  );
};

export default ServicesProcessSection;
