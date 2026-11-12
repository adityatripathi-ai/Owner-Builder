import { motion } from "framer-motion";

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
    <section className="w-full bg-[#1D1F6B] text-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 py-12 sm:py-14 md:py-16">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#A9A5F5] text-[10px] sm:text-[14px] font-semibold uppercase tracking-[1.5px] mb-3">Confidence through clarity</p>

          <h2 className="font-['Georgia',serif] text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] font-normal leading-[1.15] text-white max-w-[640px]">
            A platform, not a promise of
            <br className="hidden sm:block" /> shortcuts.
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
              className={`border-t border-white/20 pt-5 ${index === 0 ? "sm:-translate-y-2.5" : ""}`}
            >
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