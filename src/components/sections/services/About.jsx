
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 py-12 md:py-16 lg:py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 items-start">

          {/* LEFT HEADING */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#1D1F6B] text-[10px] sm:text-[11px] font-semibold uppercase tracking-[1.5px] mb-4">
              Your project. Your team in your pocket
            </p>

            <h2 className="font-['Georgia',serif] text-[#20244F] text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] leading-[1.15] tracking-[-1px] font-normal max-w-[470px]">
              Support for the process. Not a substitute for expertise.
            </h2>
          </motion.div>

          {/* RIGHT DESCRIPTION */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-[520px]"
          >
            <p className="text-[#6F6F7E] text-[12px] sm:text-[13px] leading-[1.7]">
              Owner Builder helps organize information. Your architect,
              builder, trades and other appointed professionals remain
              essential to the work and decisions on your project.
            </p>

            <p className="mt-5 text-[#8A8A98] text-[11px] sm:text-[12px] leading-[1.7]">
              Confirm local requirements, contracts, costs and technical
              decisions with the appropriate professionals. Tools support good
              coordination; they don’t guarantee a cost or construction
              outcome.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;
