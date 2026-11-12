
import { motion } from "framer-motion";

const StorySection = () => {
  return (
    <section className="w-full bg-[#F8F7F3] px-5 sm:px-6 lg:px-10 py-12 sm:py-14 md:py-16">
      <div className="max-w-[1200px] mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-16">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#7771D5] text-[10px] sm:text-[11px] font-semibold uppercase tracking-[1.5px] mb-3">
              Why Owner Builder
            </p>

            <h2 className="font-['Georgia',serif] text-[#303030] text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] leading-[1.15] font-normal max-w-[430px]">
              Built around the work
              <br />
              behind the walls.
            </h2>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            <p className="text-[#666666] text-[11px] sm:text-[12px] leading-[1.7]">
              Building a home involves more than a set of plans. It means comparing estimates, coordinating people, tracking decisions and keeping information available when it matters.
            </p>

            <p className="text-[#666666] text-[11px] sm:text-[12px] leading-[1.7] mt-4">
              Owner Builder brings these practical needs into a project-centered platform. Its focus is the day-to-day organization of residential building—from early preparation and trade coordination through records and completion.
            </p>

            <p className="text-[#666666] text-[11px] sm:text-[12px] leading-[1.7] mt-4">
              The platform supports your process. It does not replace the qualified professionals, local approvals or careful judgment your project requires.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default StorySection;
