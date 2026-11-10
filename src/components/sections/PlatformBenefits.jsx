
import { motion } from "framer-motion";

import featureIcon1 from "../../assets/icons/Vector-4.png";
import featureIcon2 from "../../assets/icons/Vector-5.png";
import featureIcon3 from "../../assets/icons/Vector-6.png";

const benefits = [
  {
    icon: featureIcon1,
    title: "Plan with context",
    description:
      "Project organization, bid estimates, and timelines all work together to keep your project decisions in one flow.",
  },
  {
    icon: featureIcon2,
    title: "Coordinate the work",
    description:
      "Schedules, task lists, team coordination, and updates stay in one place as your project progresses.",
  },
  {
    icon: featureIcon3,
    title: "Keep a clear record",
    description:
      "Plans, contracts, decisions, documents and project records stay organized throughout the project.",
  },
];

const PlatformBenefits = () => {
  return (
    <section className="w-full bg-[#F8F7F3]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 py-12 sm:py-14 md:py-16">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[9px] sm:text-[10px] uppercase tracking-[1.5px] text-[#7771D5] font-semibold mb-3">
            Built around your project
          </p>

          <h2 className="font-serif text-[#20244F] text-[27px] sm:text-[32px] md:text-[38px] leading-tight">
            Less scattered. More connected.
          </h2>

          <p className="text-[#777777] text-[11px] sm:text-[12px] mt-3 max-w-[550px] leading-relaxed">
            Practical tools for the responsibilities that come with building
            your own home.
          </p>
        </motion.div>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-7 sm:mt-8">
          {benefits.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-[4px] border border-[#EAE8E2] p-5 sm:p-6 min-h-[125px] hover:shadow-md transition-shadow duration-300"
            >
              {/* ICON */}
              <div className="mb-3">
                <img
                  src={item.icon}
                  alt={`${item.title} icon`}
                  className="w-5 h-5 object-contain"
                />
              </div>

              <h3 className="text-[#20244F] text-[13px] sm:text-[14px] font-medium mb-2">
                {item.title}
              </h3>

              <p className="text-[#777777] text-[10px] sm:text-[11px] leading-[1.6]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6"
        >
          <button className="inline-flex items-center gap-3 border border-[#DAD8D2] px-4 py-2 text-[10px] text-[#20244F] hover:bg-[#20244F] hover:text-white transition-colors duration-300">
            See all offerings
            <span>→</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default PlatformBenefits;
