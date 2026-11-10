
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ResourcesHero = () => {
  return (
    <section className="w-full bg-[#F5F4F0] px-5 sm:px-8 lg:px-10">

      <div className="max-w-[1200px] mx-auto py-10 sm:py-14 lg:py-16">

        <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_320px] gap-7 md:gap-10 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#7771D5] text-[9px] sm:text-[10px] uppercase tracking-[2px] mb-3">
              Resources
            </p>

            <h1 className="font-serif text-[#20244F] text-[34px] sm:text-[42px] lg:text-[48px] leading-[1.05] tracking-tight">
              Build your knowledge.
              <br />
              Then your home.
            </h1>

            <p className="text-[#777777] text-[10px] sm:text-xs leading-6 mt-4 max-w-[580px]">
              Explore useful insights, practical guidance and trusted
              resources to help you make informed decisions throughout
              your building journey.
            </p>
          </motion.div>

          {/* RIGHT INFORMATION CARD */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white border border-[#EAE8E2] p-5 sm:p-6"
          >
            <p className="text-[#20244F] text-[9px] font-semibold uppercase tracking-[1px]">
              A little guidance
            </p>

            <h2 className="font-serif text-[#20244F] text-sm sm:text-base mt-3 leading-snug">
              Start with the right information.
            </h2>

            <p className="text-[#777777] text-[10px] sm:text-[11px] leading-5 mt-2">
              Understand your options, explore helpful resources
              and take your next step with confidence.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-[#20244F] text-[10px] font-semibold mt-3 hover:text-[#7771D5] transition-colors"
            >
              Explore resources
              <span>↗</span>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ResourcesHero;
