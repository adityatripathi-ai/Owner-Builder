import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import heroImage from "../../assets/images/herobg.png";

const Hero = () => {
  return (
    <section className="w-full bg-[#F8F7F3] px-3 sm:px-4 lg:px-6 pt-3 pb-3">
      <div className="max-w-[1400px] mx-auto">

        {/* HERO BANNER */}
        <div className="relative w-full h-[430px] sm:h-[440px] md:h-[500px] lg:h-[560px] overflow-hidden rounded-md">
          <motion.img
            src={heroImage}
            alt="Modern architectural house"
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/10" />

          {/* CONTENT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute z-10 left-3 right-3 sm:left-7 sm:right-auto lg:left-[4%] top-1/2 -translate-y-1/2 w-auto sm:w-[55%] md:w-[48%] lg:w-[43%] max-w-[520px] bg-[#F8F7F3]/95 rounded-md px-5 py-6 sm:px-7 sm:py-8 md:px-9 md:py-9 lg:px-10 lg:py-10"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-[#7771D5] text-[10px] sm:text-[11px] font-semibold uppercase tracking-[1.5px] mb-3"
            >
              The Owner's Advantage
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="font-['Georgia',serif] text-[#303030] text-[32px] min-[380px]:text-[36px] sm:text-[38px] md:text-[44px] lg:text-[48px] leading-[1.05] font-normal tracking-[-1px]"
            >
              Build your
              <br />
              home. Keep
              <br />
              your vision.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-[#666666] text-[12px] sm:text-[13px] leading-[1.7] mt-3 sm:mt-4 max-w-[340px]"
            >
              Bring your plans, people and decisions together. Owner
              Builder helps you coordinate the details, so you can move
              through your build with clarity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-4 sm:mt-5"
            >
              <Link
                to="/contact"
                className="text-[11px] sm:text-[12px] font-medium inline-flex items-center gap-2 bg-[#20244F] text-white px-4 py-2.5 rounded-sm hover:bg-[#7771D5] transition-colors duration-300"
              >
                Discuss your project
                <span>↗</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* BOTTOM WHITE STRIP */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="absolute bottom-3 sm:bottom-5 left-3 right-3 sm:left-6 sm:right-6 min-h-[30px] bg-white/90 rounded-full origin-left flex items-center px-3 py-2"
          >
            <span className="text-[#555555] text-[10px] sm:text-[11px] leading-tight">
              A little more planning for a confident build
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;