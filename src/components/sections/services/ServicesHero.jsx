
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../../../assets/images/herobg.png";

const ServicesHero = () => {
  return (
    <section className="w-full bg-[#F8F7F3]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 py-12 sm:py-16 lg:py-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[9px] sm:text-[10px] tracking-[2px] text-[#20244F] uppercase mb-5">
              Your Building Journey Starts Here
            </p>

            <h1 className="font-serif text-[#292929] text-[38px] sm:text-5xl lg:text-[52px] leading-[1.02] max-w-[500px]">
              Builder Owner software connects you to every stage and decision of your home
            </h1>

            <p className="text-[#777777] text-[11px] sm:text-xs leading-6 mt-6 max-w-[440px]">
              Simplify the way you coordinate your build. Owner Builder brings
              project information, costs, people and paperwork into a connected
              set of practical tools.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-[#20244F] text-white text-[9px] px-4 py-3 mt-5 rounded-sm hover:bg-[#7771D5] transition-colors duration-300"
            >
              Find your building path
              <span>↗</span>
            </Link>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative w-full"
          >
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[440px]">
              <img
                src={heroImage}
                alt="Building plans and workspace"
                className="w-full h-full object-cover rounded-sm"
              />

              {/* Temporary phone mockup */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                w-[135px] sm:w-[170px] h-[245px] sm:h-[315px]
                bg-[#171717] rounded-[22px] border-[5px] border-[#171717]
                shadow-xl overflow-hidden"
              >
                <div className="bg-white w-full h-full rounded-[16px] overflow-hidden">
                  <div className="bg-[#20244F] text-white p-3 text-[9px]">
                    OWNER BUILDER
                  </div>
                  <div className="p-3">
                    <div className="h-16 bg-[#E9E8F2] rounded mb-3" />
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-12 bg-[#F0EFF8] rounded" />
                      <div className="h-12 bg-[#F0EFF8] rounded" />
                      <div className="h-12 bg-[#F0EFF8] rounded" />
                      <div className="h-12 bg-[#F0EFF8] rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
