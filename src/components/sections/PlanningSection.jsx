import { motion } from "framer-motion";

import featureIcon1 from "../../assets/icons/Vector-7.png";
import featureIcon2 from "../../assets/icons/Vector-8.png";
import featureIcon3 from "../../assets/icons/Vector-9.png";

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
    number: "03/FOLLOW THOUGHT",
    icon: featureIcon3,
    title: "Keep the build in view",
    description:
      "Review costs, update tasks and document the final items that need attention.",
  },
];

const PlanningSection = () => {
  return (
    <section className="w-full bg-[#20244F]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 py-12 sm:py-14 md:py-16">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[9px] sm:text-[10px] uppercase tracking-[1.5px] text-[#A9A5F5] font-semibold mb-3">
A practical rhythm          </p>

          <h2 className="font-serif text-white text-[26px] sm:text-[32px] md:text-[38px] leading-tight max-w-[600px]">
            From a plan to a place to call home.
          </h2>
        </motion.div>

        {/* Steps Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-7 sm:mt-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-[4px] p-5 sm:p-6 min-h-[125px] flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-center justify-between mb-5">
                <img
                  src={step.icon}
                  alt={`${step.title} icon`}
                  className="w-5 h-5 object-contain"
                />

                <span className="text-[#A6A3B9] text-[9px] tracking-wider">
                  {step.number}
                </span>
              </div>

              <div>
                <h3 className="text-[#20244F] text-[13px] sm:text-[14px] font-medium mb-2">
                  {step.title}
                </h3>

                <p className="text-[#777777] text-[10px] sm:text-[11px] leading-[1.6]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PlanningSection;
