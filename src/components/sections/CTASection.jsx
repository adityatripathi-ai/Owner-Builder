
import { motion } from "framer-motion";

import playstore from "../../assets/images/playstore.png";
import appstore from "../../assets/images/appstore.png";
import { SplitText } from "../common/Animations";
import { redirectToAppStore } from "../../services/appService";

const CTASection = () => {
  return (
    <section className="relative w-full bg-[#1D205F] text-white overflow-hidden">

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 py-10 sm:py-12 md:py-14">

        <div className="grid grid-cols-1 md:grid-cols-[1fr_180px] items-center gap-7 sm:gap-8 md:gap-12">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >

            <p className="text-[#A9A5F5] text-[10px] sm:text-[14px] font-semibold uppercase tracking-[1.5px] mb-3">
              BUILT ON REAL-WORLD EXPERIENCE
            </p>

            <h2 className="font-['Georgia',serif] text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] font-normal leading-[1.15] text-white max-w-[650px]">
              <SplitText text="Your home. Your vision. Backed by decades of building expertise." />
            </h2>

            <p className="text-white/80 text-[12px] sm:text-[15px] leading-[1.7] mt-4 max-w-[650px]">
              Make smarter home-building decisions with insights shaped by
              over 40 years of professional building experience and knowledge
              gained from more than 1,600 homes.
            </p>

          </motion.div>

          {/* RIGHT STORE BUTTONS */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-center md:items-end justify-center gap-2 w-full"
          >

            {/* STORE BUTTONS */}
            <div className="flex flex-row md:flex-col items-center justify-center md:justify-center gap-2 sm:gap-3 w-full">

              {/* GOOGLE PLAY */}
              <motion.button
                type="button"
                onClick={redirectToAppStore}
                aria-label="Get it on Google Play"
                whileHover={{ scale: 1.05 }}
                className="block w-[125px] sm:w-[145px] cursor-pointer"
              >
                <img
                  src={playstore}
                  alt="Get it on Google Play"
                  className="w-full h-auto object-contain"
                />
              </motion.button>

              {/* APP STORE */}
              <motion.button
                type="button"
                onClick={redirectToAppStore}
                aria-label="Download on the App Store"
                whileHover={{ scale: 1.05 }}
                className="block w-[125px] sm:w-[145px] cursor-pointer"
              >
                <img
                  src={appstore}
                  alt="Download on the App Store"
                  className="w-full h-auto object-contain"
                />
              </motion.button>

            </div>

            {/* DESCRIPTION */}
            <p className="text-white/70 text-[10px] sm:text-[13px] leading-[1.5] mt-1 text-center md:text-left w-[145px] sm:w-[165px]">
              <span className="block whitespace-nowrap">
                Practical building knowledge,
              </span>
              <span className="block whitespace-nowrap">
                Right at your fingertips.
              </span>
            </p>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default CTASection;
