
import { motion } from "framer-motion";

const AdviceSection = () => {
  return (
    <section className="w-full bg-[#F5F4F0] px-5 sm:px-8 lg:px-10 py-12 sm:py-14 lg:py-16">

      <div className="max-w-[1200px] mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[650px]"
        >

          {/* LABEL */}
          <p className="text-[#7771D5] text-[9px] sm:text-[10px] font-semibold uppercase tracking-[1.5px] mb-3">
            Important information
          </p>

          {/* HEADING */}
          <h2 className="font-serif text-[#20244F] text-[27px] sm:text-[34px] lg:text-[38px] leading-[1.1]">
            A starting point, not professional advice.
          </h2>

          {/* DESCRIPTION */}
          <p className="text-[#777777] text-[10px] sm:text-xs leading-6 mt-4 max-w-[600px]">
            The information and resources provided here are intended
            to help you understand your home building journey.
            Every project is different, so always seek advice from
            qualified professionals before making important
            decisions about your property or construction.
          </p>

          <p className="text-[#777777] text-[10px] sm:text-xs leading-6 mt-2 max-w-[600px]">
            Regulations, requirements and circumstances may vary
            depending on your location and individual project.
          </p>

        </motion.div>

      </div>
    </section>
  );
};

export default AdviceSection;
