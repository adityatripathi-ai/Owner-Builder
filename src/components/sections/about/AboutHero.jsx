
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import aboutImage from "../../../assets/images/herobg.png";

const AboutHero = () => {
  return (
    <section className="w-full bg-[#F5F3EF] px-5 sm:px-7 lg:px-10 pt-8 sm:pt-10 pb-10 sm:pb-14">
      <div className="max-w-[1200px] mx-auto">

        {/* BREADCRUMB */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[#20244F] text-[6px] sm:text-[8px] uppercase tracking-[0.3px] mb-8 sm:mb-10 lg:mb-12"
        >
          HOME / ABOUT OWNER BUILDER
        </motion.p>

        {/* HERO CONTENT */}
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-8 min-[480px]:gap-5 lg:gap-14 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[480px]"
          >
            {/* HEADING */}
            <h1
              className="
                text-[#303438]
                text-[34px]
                min-[480px]:text-[27px]
                sm:text-[34px]
                lg:text-[49px]
                leading-[1.05]
                tracking-[-0.7px]
                font-normal
              "
              style={{ fontFamily: "Georgia, serif" }}
            >
              Behind every
              <br />
              home, a better
              <br />
              way to build.
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-4 text-[#777777] text-[10px] min-[480px]:text-[7px] sm:text-[10px] lg:text-[12px] leading-[1.65] max-w-[390px]">
              Owner Builder exists to make the coordination of a
              house-building project easier to understand, easier
              to organize and easier to follow through.
            </p>

            {/* BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-4"
            >
              <Link
                to="/services"
                className="
                  inline-flex items-center gap-2
                  border border-[#DAD8D2]
                  text-[#20244F]
                  text-[7px] min-[480px]:text-[6px] sm:text-[9px]
                  px-3 py-2
                  rounded-[2px]
                  hover:bg-[#20244F]
                  hover:text-white
                  transition-all duration-300
                "
              >
                Explore our offerings
                <span>↗</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative w-full min-w-0 min-[480px]:max-w-[500px] min-[480px]:ml-auto"
          >
            <div className="relative w-full h-[260px] min-[480px]:h-[204px] sm:h-[280px] lg:h-[430px] overflow-visible">

              {/* IMAGE */}
              <img
                src={aboutImage}
                alt="Modern home interior"
                className="
                  w-full h-full
                  object-cover
                  object-center
                  rounded-[2px]
                "
              />

              {/* IMAGE OVERLAY CARD */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                className="
                  absolute
                  left-[4%]
                  right-[-2%]
                  bottom-[8px]
                  bg-white
                  px-3 py-3
                  sm:px-3 sm:py-2.5
                  rounded-[3px]
                  shadow-sm
                  z-10
                "
              >
                <p className="text-[#7771D5] text-[6px] sm:text-[7px] font-semibold uppercase tracking-[0.5px] mb-1">
                  A SIMPLE OUTLET
                </p>

                <p
                  className="text-[#303438] text-[12px] sm:text-[11px] lg:text-[17px] leading-[1.15]"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Your attention belongs on the home you're creating.
                </p>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;
