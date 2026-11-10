import { motion } from "framer-motion";
import aboutImage from "../../../assets/images/Architectural-photography-1.png";

const points = [
  {
    title: "Clarity over clutter",
    description:
      "Useful structure, understandable categories and a clear place for the information that matters.",
  },
  {
    title: "Preparation over guesswork",
    description:
      "A practical way to gather details before decisions become urgent.",
  },
  {
    title: "Continuity from start to finish",
    description:
      "Project information that stays connected through planning, construction and the final walkthrough.",
  },
];

const OwnerSection = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* LEFT IMAGE */}
          <motion.figure
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            <img
              src={aboutImage}
              alt="Timber frame of a house under construction"
              className="w-full aspect-[5/4] object-cover rounded-[14px]"
            />
            <figcaption className="mt-2 text-[10px] sm:text-[11px] text-[#777777]">
              Conceptual construction imagery
            </figcaption>
          </motion.figure>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-[#1D1F6B] font-semibold">
              Our approach
            </p>

            <h2 className="mt-4 font-serif text-[#20244F] text-[30px] sm:text-[36px] lg:text-[44px] leading-[1.12] tracking-[-0.01em] max-w-[460px]">
              Keep the owner at the center.
            </h2>

            {/* POINTS */}
            <div className="mt-7 space-y-6">
              {points.map((point) => (
                <div key={point.title}>
                  <h3 className="text-[15px] sm:text-base text-[#20244F] font-medium">
                    {point.title}
                  </h3>

                  <p className="mt-1.5 max-w-[460px] text-[12px] sm:text-[13px] leading-[1.7] text-[#777777]">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default OwnerSection;