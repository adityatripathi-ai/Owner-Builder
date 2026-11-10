
import { motion } from "framer-motion";

const processSteps = [
  {
    number: "01",
    title: "Bring everything together",
    description:
      "Keep your plans, project information and important documents organised in one place.",
  },
  {
    number: "02",
    title: "Stay on top of the details",
    description:
      "Follow tasks, budgets and decisions with a clearer view of what's happening.",
  },
  {
    number: "03",
    title: "Move forward with confidence",
    description:
      "Stay connected with your project and make informed decisions at every stage.",
  },
];

const ServicesProcessSection = () => {
  return (
    <section className="w-full bg-[#20244F] px-5 sm:px-8 lg:px-10 py-14 sm:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-[600px] mb-9 sm:mb-12"
        >
          <p className="text-[#A9A5F5] text-[8px] sm:text-[9px] uppercase tracking-[1.5px] font-semibold mb-3">
            A Better Building Experience
          </p>

          <h2
            className="text-white text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.12] font-normal"
            style={{ fontFamily: "Georgia, serif" }}
          >
            A simpler way to move through the build.
          </h2>

          <p className="mt-3 text-white/65 text-[10px] sm:text-[11px] leading-[1.8] max-w-[480px]">
            A more organised approach helps you understand what's
            happening, stay involved and make decisions with clarity.
          </p>
        </motion.div>

        {/* PROCESS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="
                bg-white
                min-h-[170px]
                sm:min-h-[190px]
                p-5 sm:p-6
                rounded-[2px]
                flex flex-col
                justify-between
              "
            >
              <div className="flex items-center justify-between">
                <span className="text-[#7771D5] text-[9px] font-semibold">
                  {step.number}
                </span>

                <span className="text-[#7771D5] text-sm">↗</span>
              </div>

              <div className="mt-8">
                <h3
                  className="text-[#20244F] text-[16px] sm:text-[18px] leading-[1.3]"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {step.title}
                </h3>

                <p className="mt-2 text-[#777777] text-[10px] sm:text-[11px] leading-[1.8]">
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

export default ServicesProcessSection;
