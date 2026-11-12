import { motion } from "framer-motion";

const MissionSection = () => {
  return (
    <section className="w-full bg-[#20244F] px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-[850px]"
        >

          {/* LABEL */}
          <p className="text-[#A9A5F5] text-[10px] sm:text-[11px] font-semibold uppercase tracking-[1.5px] mb-5">
            Our Mission
          </p>

          {/* HEADING */}
          <h2
            className="
              font-['Georgia',serif]
              text-white
              text-[26px]
              sm:text-[30px]
              md:text-[34px]
              lg:text-[38px]
              leading-[1.15]
              font-normal
            "
          >
            Make the complex feel manageable—
            <br className="hidden md:block" />
            without losing sight of the details.
          </h2>

          {/* DESCRIPTION */}
          <p className="
            text-white/80
            text-[12px]
            sm:text-[13px]
            leading-[1.7]
            mt-5
            max-w-[750px]
          ">
           We believe an organized project gives owners a stronger foundation for conversations, decisions and the work ahead. Clarity should be part of the building process, not something you have to build yourself.
          </p>

        </motion.div>

      </div>
    </section>
  );
};

export default MissionSection;