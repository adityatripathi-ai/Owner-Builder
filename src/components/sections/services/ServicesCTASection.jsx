
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ServicesCTASection = () => {
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
            <p className="text-[#D0CDFB] text-[8px] sm:text-[9px] uppercase tracking-[1.5px] font-medium mb-3">
              Start with a conversation
            </p>

            <h2 className="font-serif text-[27px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[1.08] max-w-[650px]">
              Your home. Your vision. A clearer way
              forward.
            </h2>

            <p className="text-white/70 text-[10px] sm:text-[11px] leading-[1.7] mt-4 max-w-[650px]">
              Tell us where you are in your building journey.
              Let's explore how Owner Builder can help you organize
              what comes next.
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
  text-[8px] sm:text-[9px]
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
            <p className="mt-4 max-w-[220px] text-[10px] sm:text-[11px] text-white/60 leading-5">
              Have a project in mind? Get in touch and let's explore
              how we can help.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ServicesCTASection;
