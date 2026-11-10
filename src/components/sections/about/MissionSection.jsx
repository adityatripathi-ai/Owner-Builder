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
          <p className="text-[#A9A5F5] text-[9px] font-semibold uppercase tracking-[1.5px] mb-5">
            Our Approach
          </p>

          {/* HEADING */}
          <h2
            className="
              text-white
              text-[30px]
              sm:text-[36px]
              md:text-[42px]
              lg:text-[48px]
              leading-[1.08]
              tracking-[-1px]
              font-normal
            "
            style={{ fontFamily: "Georgia, serif" }}
          >
            Make the complex feel manageable—
            <br className="hidden md:block" />
            without losing sight of the details.
          </h2>

          {/* DESCRIPTION */}
          <p className="
            text-white/70
            text-[10px]
            sm:text-[11px]
            leading-[1.9]
            mt-5
            max-w-[750px]
          ">
            Building a home involves more than making big decisions.
            It is the small details, conversations and everyday tasks
            that keep a project moving. Our approach brings these
            moving parts together, helping owners stay informed,
            organised and confident throughout their building journey.
          </p>

        </motion.div>

      </div>
    </section>
  );
};

export default MissionSection;
