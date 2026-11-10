
import { motion } from "framer-motion";
import { Link } from "react-router-dom";



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

      
      </div>
    </section>
  );
};

export default About;
