
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="w-full bg-[#20244F] px-5 sm:px-8 lg:px-10 py-10 sm:py-12">

      <div className="max-w-[1200px] mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-6"
        >

          {/* LEFT CONTENT */}
          <div>
            <p className="text-[#A6A4E9] text-[10px] sm:text-[11px] font-semibold uppercase tracking-[1.5px] mb-3">
              Start with a conversation
            </p>

            <h2 className="text-white text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] leading-[1.15] tracking-[-1px] font-normal [font-family:Georgia,serif]">
              Have a question about your next step?
            </h2>

            <p className="text-white/60 text-[12px] sm:text-[13px] mt-3 leading-[1.7] max-w-[700px]">
              Tell us where you are in your building journey. Let’s explore how Owner Builder can help you organize what comes next.
            </p>
          </div>

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
                  text-[11px] sm:text-[12px] font-medium
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
            <p className="mt-4 max-w-[220px] text-[10px] sm:text-[11px] text-white/60 leading-[1.6]">
              A practical next step. No Pressure.
            </p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default CTASection;
