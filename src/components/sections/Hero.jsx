import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import heroImage from "../../assets/images/herobg.png";

const Hero = () => {
  return (
    <section className="w-full bg-[#F8F7F3] p-5  sm:px-4 lg:px-6 pb-3">
      <div className="max-w-[1400px] mx-auto">

        {/* HERO BANNER */}
        <div className="
          relative w-full
          h-[360px]
          sm:h-[440px]
          md:h-[500px]
          lg:h-[560px]
          overflow-hidden
        ">

          {/* BACKGROUND IMAGE */}
          <motion.img
            src={heroImage}
            alt="Modern architectural house"
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute rounded-md inset-0 w-full h-full object-cover object-center"
          />

          {/* IMAGE OVERLAY */}
          <div className="absolute inset-0 bg-black/5" />

          {/* CONTENT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="
              absolute z-10
              left-4 sm:left-7 lg:left-[4%]
              top-1/2 -translate-y-1/2
              w-[82%] sm:w-[55%] md:w-[48%] lg:w-[43%]
              max-w-[520px]
              bg-[#F8F7F3]/95
              rounded-md
              px-5 py-6
              sm:px-7 sm:py-8
              md:px-9 md:py-9
              lg:px-10 lg:py-10
            "
          >

            {/* LABEL */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="
                text-[#7771D5]
                text-[8px] sm:text-[9px]
                font-semibold uppercase
                tracking-wide mb-3
              "
            >
              The Owner's Advantage
            </motion.p>

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="
                text-[#303030]
                text-[30px]
                sm:text-[38px]
                md:text-[44px]
                lg:text-[48px]
                leading-[1.03]
                font-normal
                tracking-[-1px]
              "
              style={{ fontFamily: "Georgia, serif" }}
            >
              Build your
              <br />
              home. Keep
              <br />
              your vision.
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="
                text-gray-500
                text-[9px] sm:text-[10px]
                leading-[1.6]
                mt-3 sm:mt-4
                max-w-[340px]
              "
            >
              Bring your plans, people and decisions together. Owner
              Builder helps you coordinate the details, so you can move
              through your build with clarity.
            </motion.p>

            {/* BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-4"
            >
              <Link
                to="/contact"
                className="
                  inline-flex items-center gap-2
                  bg-[#20244F] text-white
                  text-[8px] sm:text-[9px]
                  px-3 py-2
                  rounded-sm
                  hover:bg-[#7771D5]
                  transition-colors duration-300
                "
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
  className="
    absolute bottom-15
    left-4 right-4
    sm:left-6 sm:right-6
    h-[16px]
    bg-white/90
    rounded-full
    origin-left
    flex items-center
    p-2
  "
>
  <span className="text-[10px] text-[#555555] leading-none">
    A little more planning for a confident build
  </span>
</motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
