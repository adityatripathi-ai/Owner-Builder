
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import heroImage from "../../../assets/images/Architectural-plan-setting-2.png";
import phoneImage from "../../../assets/images/Unchanged-application-screen.png";

const ServicesHero = () => {
  return (
    <section className="w-full bg-[#F4F2ED]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 pt-5 pb-12 sm:pb-16 lg:pb-20">

        {/* BREADCRUMB */}
        <nav
          aria-label="Breadcrumb"
          className="text-[10px] sm:text-[13px] font-semibold uppercase tracking-[1.5px] text-[#20244F]/70"
        >
          <Link to="/" className="hover:underline">Home</Link>
          <span className="mx-1.5" aria-hidden="true">/</span>
          <span aria-current="page">Services &amp; Offerings</span>
        </nav>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="
              font-['Georgia',serif]
              text-[#292929]
              text-[32px]
              min-[380px]:text-[36px]
              sm:text-[38px]
              md:text-[44px]
              lg:text-[48px]
              leading-[1.05]
              tracking-[-1px]
              font-normal
              max-w-[520px]
            ">
              Builder Owner software connects you to every stage and decision of your home
            </h1>

            <p className="text-[#777777] text-[12px] sm:text-[15px] leading-[1.7] mt-6 max-w-[500px]">
              Simplify the way you coordinate your build. Owner Builder brings
              project information, costs, people and paperwork into a connected
              set of practical tools.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-[#20244F] text-white text-[11px] sm:text-[12px] font-medium px-5 py-3 mt-6 rounded-[3px] hover:bg-[#7771D5] transition-colors duration-300"
            >
              Find your starting point
              <span aria-hidden="true">↗</span>
            </Link>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative w-full aspect-[15/14] overflow-hidden rounded-[10px]"
          >
            <img
              src={heroImage}
              alt="Building plans and workspace"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* PHONE IMAGE */}
            <img
              src={phoneImage}
              alt="Owner Builder mobile app showing projects"
              className="absolute left-1/2 top-1/2 h-[90%] w-auto max-w-none -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-2xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
