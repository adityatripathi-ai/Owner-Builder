import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutCTASection = () => {
  return (
    <section className="w-full bg-[#20244F] text-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 py-10 sm:py-12 md:py-14">

        <div className="grid grid-cols-1 md:grid-cols-[1fr_180px] items-center gap-8 md:gap-12">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#A9A5F5] text-[10px] sm:text-[14px] font-semibold uppercase tracking-[1.5px] mb-3">
              Start with a conversation
            </p>

            <h2 className="font-['Georgia',serif] text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] font-normal leading-[1.15] text-white max-w-[650px]">
              Let’s bring more clarity to your building journey.
            </h2>

            <p className="text-white/80 text-[12px] sm:text-[15px] leading-[1.7] mt-4 max-w-[650px]">
              Tell us where you are in your building journey. Let’s explore how Owner Builder can help you organize what comes next.
            </p>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-auto md:min-w-[190px]"
          >
            {/* BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-4"
            >
              <Link
                to="/contact"
                className="
               inline-flex items-center gap-2
  bg-white text-[#20244F]
  text-[11px] sm:text-[13px] font-medium
  px-3 py-2
  rounded-sm
  hover:bg-[#A9A5F5]
  transition-colors duration-300
                "
              >
                Discuss your project
                <span>↗</span>
              </Link>
            </motion.div>

            {/* BUTTON DESCRIPTION */}
            <p className="mt-4 max-w-[220px] text-[10px] sm:text-[12px] text-white/70 leading-[1.6]">
             A practical next step. No pressure
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutCTASection;