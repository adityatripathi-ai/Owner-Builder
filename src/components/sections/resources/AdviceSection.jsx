
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
          <p className="text-[#7771D5] text-[10px] sm:text-[14px] font-semibold uppercase tracking-[1.5px] mb-3">
            Important information
          </p>

          {/* HEADING */}
          <h2 className="text-[#20244F] text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] leading-[1.15] tracking-[-1px] font-normal [font-family:Georgia,serif]">
            A starting point, not professional advice.
          </h2>

          {/* DESCRIPTION */}
          <p className="text-[#777777] text-[12px] sm:text-[15px] leading-[1.7] mt-4 max-w-[600px]">
            General resources can help organize your thinking. Always confirm technical, legal, financial and local building requirements with the appropriate qualified professionals.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default AdviceSection;
