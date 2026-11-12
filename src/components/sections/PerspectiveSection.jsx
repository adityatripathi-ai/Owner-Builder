import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import phone4 from "../../assets/images/phone-3.png";
import warmBg from "../../assets/images/Warm-architectural-setting.png";

const points = [
  "Bring daily tasks into focus",
  "Keep project records organized",
  "Review the details before the next conversation",
];

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0 text-[#20244F]" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

const PerspectiveSection = () => {
  return (
    <section className="w-full bg-[#F4F2ED] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 py-12 sm:py-16 md:py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10 lg:gap-16">

          {/* LEFT SIDE - IMAGE CARD WITH PHONE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-md bg-[#E9E6DF] pr-3 md:pr-4"
          >
            <div className="relative aspect-[15/16] w-full overflow-hidden rounded-md">
              <img src={warmBg} alt="" className="absolute inset-0 h-full w-full object-cover" />

              <img
                src={phone4}
                alt="Mobile app showing a to-do list and calendar"
                className="absolute left-1/2 top-1/2 z-10 h-[84%] w-auto max-w-none -translate-x-1/2 -translate-y-1/2 object-contain"
              />
            </div>
          </motion.div>

          {/* RIGHT SIDE - CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-[480px]"
          >
            <p className="text-[#7771D5] text-[10px] sm:text-[14px] font-semibold uppercase tracking-[1.5px] mb-3">At the desk. On the site.</p>

            <h2 className="font-['Georgia',serif] text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] font-normal leading-[1.15] text-[#20244F]">
              Keep the next step close
              <br className="hidden lg:block" /> at hand.
            </h2>

            <p className="text-[#666666] text-[12px] sm:text-[15px] leading-[1.7] mt-5">
              Building doesn’t happen in one place. Keep your to-do list,
              project information and important records within reach when it’s
              time to make a decision.
            </p>

            <ul className="mt-5 flex flex-col gap-2.5">
              {points.map((point) => (
                <li key={point} className="text-[#666666] text-[11px] sm:text-[15px] leading-[1.6] flex items-center gap-2.5">
                  <CheckIcon />
                  {point}
                </li>
              ))}
            </ul>

            <Link
              to="/services"
              className="text-[11px] sm:text-[14px] font-medium inline-flex items-center gap-3 mt-7 rounded-[3px] border border-[#DDDAD1] bg-white px-4 py-2.5 text-[#20244F] transition-colors duration-300 hover:border-[#20244F]"
            >
              Explore project tools
              <ArrowIcon />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PerspectiveSection;