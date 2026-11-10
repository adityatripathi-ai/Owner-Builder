
import { motion } from "framer-motion";

const platformFeatures = [
  {
    number: "01",
    title: "Visible costs",
    description:
      "Review estimates and project costs rather than relying on guesses.",
  },
  {
    number: "02",
    title: "Clear responsibilities",
    description:
      "Find task ownership and know who is responsible for each step.",
  },
  {
    number: "03",
    title: "Documented decisions",
    description:
      "Build a useful record of decisions, agreements and progress.",
  },
];

const PlatformSection = () => {
  return (
    <section className="w-full bg-[#20244F] text-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 py-12 sm:py-14 md:py-16">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#A9A5F5] text-[9px] sm:text-[10px] uppercase tracking-[1.5px] mb-3">
            Confidence through clarity
          </p>

          <h2 className="font-serif text-[27px] sm:text-[32px] md:text-[38px] leading-[1.1] max-w-[600px]">
            A platform, not a promise of
            <br className="hidden sm:block" /> shortcuts.
          </h2>

          <p className="text-white/65 text-[11px] sm:text-[12px] leading-[1.8] mt-4 max-w-[570px]">
            Good decisions need good information. Owner Builder supports an
            organized process while you stay in control of your project and
            your professional team.
          </p>
        </motion.div>

        {/* Feature Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 mt-8 sm:mt-10 border-t border-white/20">
          {platformFeatures.map((feature, index) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`py-5 sm:py-6 sm:pr-6 ${
                index !== 0 ? "sm:pl-6" : ""
              } ${
                index !== 2 ? "border-b sm:border-b-0 sm:border-r border-white/20" : ""
              }`}
            >
              <span className="text-[#A9A5F5] text-[9px]">
                {feature.number}
              </span>

              <h3 className="font-serif text-[16px] sm:text-[17px] mt-3 mb-2">
                {feature.title}
              </h3>

              <p className="text-white/60 text-[10px] sm:text-[11px] leading-[1.7] max-w-[280px]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PlatformSection;
