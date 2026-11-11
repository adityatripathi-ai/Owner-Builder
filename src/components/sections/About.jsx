import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import featureIcon1 from "../../assets/icons/Vector-1.png";
import featureIcon2 from "../../assets/icons/Vector-2.png";
import featureIcon3 from "../../assets/icons/Vector-3.png";

const features = [
  {
    number: "01",
    icon: featureIcon1,
    title: "See the bigger picture",
    description:
      "Bring project details and supporting information together instead of searching across scattered notes.",
  },
  {
    number: "02",
    icon: featureIcon2,
    title: "Understand your costs",
    description:
      "Organize bids, track actual costs and review variances as your project takes shape.",
  },
  {
    number: "03",
    icon: featureIcon3,
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

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#7771D5] text-[10px] sm:text-[11px] font-semibold uppercase tracking-[1.5px] mb-3">Meet Owner Builder</p>

            <h2 className="font-['Georgia',serif] text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] font-normal leading-[1.15] text-[#303030] max-w-[430px]">
              One place for the many parts of building.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            <p className="text-[#666666] text-[12px] sm:text-[13px] leading-[1.7]">
              A house is built through thousands of connected decisions.
              Owner Builder is a construction and real-estate project
              platform that gives those decisions a home — from the first
              estimate to the final punch list.
            </p>

            <Link
              to="/about"
              className="text-[11px] sm:text-[12px] font-medium inline-flex items-center gap-2 text-[#20244F] mt-4 hover:text-[#7771D5] transition-colors"
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
            visible: { transition: { staggerChildren: 0.15 } },
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
              className="bg-white border border-gray-100 rounded-md p-4 sm:p-4 md:p-5 min-h-[125px] transition-shadow duration-300 hover:shadow-md"
            >
              <div className="mb-3">
                <img
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  className="w-5 h-5 object-contain"
                />
              </div>

              <h3 className="text-[#20244F] text-[13px] sm:text-[14px] font-semibold leading-snug mb-2">{feature.title}</h3>

              <p className="text-[#666666] text-[11px] sm:text-[12px] leading-[1.6]">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default About;