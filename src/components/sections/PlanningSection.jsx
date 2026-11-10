
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Set your foundation",
    description:
      "Define your project goals, initial estimates and timelines before the real work begins.",
  },
  {
    number: "02",
    title: "Connect the details",
    description:
      "Organize your schedules, estimates, project documents and team coordination in one place.",
  },
  {
    number: "03",
    title: "Keep the build in view",
    description:
      "Review updates, capture work and document the progress as your project moves forward.",
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
            A clear path forward
          </p>

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
                <span className="text-[#7771D5] text-[17px]">
                  {index === 0 ? "⌂" : index === 1 ? "✧" : "▤"}
                </span>

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
