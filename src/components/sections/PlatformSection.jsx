import { motion } from "framer-motion";

import { SplitText, FloatingOrbs } from "../common/Animations";

const platformFeatures = [
  {
    title: "Visible costs",
    description: "Review estimates and actual costs, rather than relying on memory.",
  },
  {
    title: "Clear responsibilities",
    description: "Keep trade contacts and scheduled work easy to reference.",
  },
  {
    title: "Documented decisions",
    description: "Build a useful record of selections, agreements and progress.",
  },
];

const PlatformSection = () => {
  return (
    <section className="relative w-full bg-[#1D1F6B] text-white overflow-hidden">
      <FloatingOrbs />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 py-12 sm:py-14 md:py-16">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#A9A5F5] text-[10px] sm:text-[14px] font-semibold uppercase tracking-[1.5px] mb-3">Confidence through clarity</p>

          <h2 className="font-['Georgia',serif] text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] font-normal leading-[1.15] text-white max-w-[640px]">
            <SplitText text="A platform, not a promise of" />{" "}
            <br className="hidden sm:block" />
            <SplitText text="shortcuts." delay={0.45} />
          </h2>

          <p className="text-white/80 text-[12px] sm:text-[15px] leading-[1.7] mt-5 max-w-[660px]">
            Good decisions need good information. Owner Builder supports an
            organized process while you stay in control of your project and
            your professional team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-8 mt-10 md:mt-12">
          {platformFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative border-t border-white/20 pt-5 ${index === 0 ? "sm:-translate-y-2.5" : ""}`}
            >
              {/* animated line that draws over the border */}
              <motion.span
                aria-hidden="true"
                className="absolute -top-px left-0 h-px w-full origin-left bg-[#A9A5F5]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 + index * 0.2, ease: "easeOut" }}
              />

              <h3 className="text-white text-[13px] sm:text-[16px] font-semibold leading-snug">
                {feature.title}
              </h3>

              <p className="text-white/75 text-[11px] sm:text-[14px] leading-[1.6] mt-2 max-w-[340px]">{feature.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PlatformSection;