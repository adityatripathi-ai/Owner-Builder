import { motion } from "framer-motion";

import aboutImage from "../../../assets/images/herobg.png";

const briefQuestions = [
  {
    number: "01",
    title: "What are you building?",
    description:
      "Record your site, intended spaces and the scope you want people to price.",
  },
  {
    number: "02",
    title: "What matters most?",
    description:
      "Separate essential needs from preferences that can evolve with the budget.",
  },
  {
    number: "03",
    title: "What needs confirming?",
    description:
      "List open questions for your designer, builder and local authorities.",
  },
];

const FeaturedSection = () => {
  return (
    <section className="w-full bg-[#1D1F6B] px-5 sm:px-8 lg:px-10 py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

        {/* LEFT: IMAGE WITH FIELD NOTE */}
        <motion.figure
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-full aspect-[5/4] overflow-hidden rounded-[10px]"
        >
          <img
            src={aboutImage}
            alt="Rolled blueprints and plans on a wooden desk"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <figcaption className="absolute inset-x-4 bottom-4 sm:inset-x-5 sm:bottom-5 rounded-md bg-[#F8F6F1]/95 px-4 py-3 sm:px-5 sm:py-4">
            <p className="text-[#1D1F6B] text-[8px] sm:text-[9px] font-semibold uppercase tracking-[0.1em]">
              The owner’s field notes
            </p>
            <p className="mt-1.5 font-serif text-[#20244F] text-[18px] sm:text-[22px] leading-tight">
              Preparation is part of the build.
            </p>
          </figcaption>
        </motion.figure>

        {/* RIGHT: CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="text-white/70 text-[8px] sm:text-[9px] uppercase tracking-[0.12em] mb-4">
            Featured / Planning / Editorial preview
          </p>

          <h2 className="font-serif text-white text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.12] tracking-[-0.01em] font-normal max-w-[520px]">
            Before the first estimate,
            <br className="hidden sm:block" /> get clear on the brief.
          </h2>

          <p className="mt-4 text-white/80 text-[12px] sm:text-[13px] leading-[1.7] max-w-[500px]">
            A useful project brief helps you describe the same scope to
            everyone you speak with. Begin with three simple questions:
          </p>

          <ol className="mt-6 space-y-5">
            {briefQuestions.map((item) => (
              <li key={item.number} className="grid grid-cols-[32px_1fr] items-start">
                <span className="pt-1 text-white/50 text-[9px] sm:text-[10px]">
                  {item.number}
                </span>

                <div>
                  <h3 className="text-white text-[14px] sm:text-[15px] font-medium">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-white/65 text-[11px] sm:text-[12px] leading-[1.6] max-w-[460px]">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedSection;