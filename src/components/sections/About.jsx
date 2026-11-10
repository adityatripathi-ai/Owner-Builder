
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  {
    number: "01",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-5 h-5"
      >
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M22 12h-3M12 22v-3M2 12h3" />
      </svg>
    ),
    title: "See the bigger picture",
    description:
      "Bring project details and supporting information together instead of searching across scattered notes.",
  },
  {
    number: "02",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-5 h-5"
      >
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 7h6M9 11h6M9 15h3" />
      </svg>
    ),
    title: "Understand your costs",
    description:
      "Organize bids, track actual costs and review variances as your project takes shape.",
  },
  {
    number: "03",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-5 h-5"
      >
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M16 2v4M8 2v4M3 9h18M8 13h3M8 17h3" />
      </svg>
    ),
    title: "Know what comes next",
    description:
      "Keep schedules, daily tasks and the people doing the work in view.",
  },
];

const About = () => {
  return (
    <section className="w-full bg-[#F8F7F3]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 py-12 md:py-16 lg:py-20">

        {/* TOP CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 mb-8 md:mb-10">

          {/* LEFT HEADING */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#7771D5] text-[8px] sm:text-[9px] font-semibold uppercase tracking-[1.5px] mb-3">
              Meet Owner Builder
            </p>

            <h2
              className="text-[#303030] text-[28px] sm:text-[32px] md:text-[34px] lg:text-[38px] leading-[1.1] font-normal max-w-[430px]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              One place for the many parts of building.
            </h2>
          </motion.div>

          {/* RIGHT DESCRIPTION */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            <p className="text-gray-500 text-[10px] sm:text-[11px] leading-[1.8]">
              A house is built through thousands of connected decisions.
              Owner Builder is a construction and real-estate project
              platform that gives those decisions a home — from the first
              estimate to the final punch list.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-[#20244F] text-[9px] font-semibold mt-4 hover:text-[#7771D5] transition-colors"
            >
              The thinking behind Owner Builder
              <span>↗</span>
            </Link>
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
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.number}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="
                bg-white
                border border-gray-100
                rounded-md
                p-4 sm:p-4 md:p-5
                min-h-[125px]
                transition-shadow duration-300
                hover:shadow-md
              "
            >
              {/* ICON */}
              <div className="text-[#7771D5] mb-3">
                {feature.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-[#20244F] text-[10px] sm:text-[11px] font-semibold mb-2">
                {feature.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-500 text-[9px] leading-[1.7]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default About;
