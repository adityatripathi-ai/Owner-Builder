import { motion } from "framer-motion";

import playstore from "../../assets/images/playstore.png";
import appstore from "../../assets/images/appstore.png";

const CTASection = () => {
  return (
    <section className="w-full bg-[#1D1F6B] text-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 py-10 sm:py-12 md:py-14">

        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] items-center gap-7 sm:gap-8 md:gap-12">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            <p className="text-[#A9A5F5] text-[10px] sm:text-[14px] font-semibold uppercase tracking-[1.5px] mb-3">Start with a conversation</p>

            <h2 className="font-['Georgia',serif] text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] font-normal leading-[1.15] text-white max-w-[650px]">
              Your home. Your vision. A clearer way forward.
            </h2>

            <p className="text-white/80 text-[12px] sm:text-[15px] leading-[1.7] mt-4 max-w-[650px]">
              Tell us where you are in your building journey.
              Let's explore how Owner Builder can help you organize
              what comes next.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-center gap-2 w-full"
          >
            <div className="flex flex-row items-center justify-center gap-2 sm:gap-3 w-full">

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get it on Google Play"
                className="block w-[125px] sm:w-[145px] hover:scale-105 transition-transform duration-300"
              >
                <img src={playstore} alt="Get it on Google Play" className="w-full h-auto object-contain" />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on the App Store"
                className="block w-[125px] sm:w-[145px] hover:scale-105 transition-transform duration-300"
              >
                <img src={appstore} alt="Download on the App Store" className="w-full h-auto object-contain" />
              </a>

            </div>

            <p className="text-white/70 text-[10px] sm:text-[13px] leading-[1.6] mt-1 text-center">
              A practical next step. No pressure.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;