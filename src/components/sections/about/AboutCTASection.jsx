
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutCTASection = () => {
  return (
    <section className="w-full bg-[#20244F] py-14 sm:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">

        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-12">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-[650px]"
          >
            <h2 className="font-serif text-white text-[30px] sm:text-[38px] lg:text-[46px] leading-[1.15]">
              Let's bring more clarity to your building journey.
            </h2>

            {/* HEADING DESCRIPTION */}
            <p className="mt-4 max-w-[550px] text-[11px] sm:text-[13px] text-white/70 leading-6">
              Every building journey comes with important decisions.
              We help bring the information, people and processes together
              so you can move forward with greater clarity and confidence.
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

export default AboutCTASection;
