
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqItems = [
  {
    question: "Is Owner Builder a construction company?",
    answer:
      "Owner Builder is a project coordination platform. It was designed and built by a professional builder with over 40 years of experience, 1,600+ homes built and a home building coach, with first-time owner builders in mind as his students.",
  },
  {
    question: "What can I manage in one project?",
    answer:
      "And if you get stuck or have questions, go to the “Ask the builder” feature on your phone. It’s like having the builder as close as your pocket.",
  },
  {
    question: "Where should I begin?",
    answer:
      "Start with your project details and goals. Create a plan, organize important documents and use the platform to keep track of your next steps.",
  },
];

const ToggleIcon = ({ open }) => (
  <svg
    viewBox="0 0 24 24"
    className="h-3.5 w-3.5 shrink-0 text-[#20244F]/60"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    {!open && <path d="M12 5v14" />}
  </svg>
);

const ServicesFAQSection = () => {
  const [openItems, setOpenItems] = useState([0, 1, 2]);

  const toggleFAQ = (index) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#1D1F6B] text-[10px] sm:text-[14px] uppercase tracking-[1.5px] font-semibold mb-3">
            A little more clarity
          </p>

          <h2 className="font-['Georgia',serif] text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] font-normal leading-[1.15] text-[#20244F]">
            Before you begin.
          </h2>
        </motion.div>

        {/* FAQ LIST */}
        <div className="mt-8 sm:mt-10 divide-y divide-[#E6E4DE]">
          {faqItems.map((item, index) => {
            const isOpen = openItems.includes(index);
            const panelId = `faq-panel-${index}`;

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border-b border-[#E6E4DE]"
              >
                <motion.button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  whileHover="hover"
                  className="w-full flex items-center justify-between gap-4 pt-5 pb-2 text-left"
                >
                  <motion.span
                    variants={{
                      hover: { x: 8 },
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    className="text-[#20244F] text-[13px] sm:text-[16px] font-semibold leading-snug"
                  >
                    {item.question}
                  </motion.span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    variants={{
                      hover: { scale: 1.3 },
                    }}
                    transition={{ duration: 0.35 }}
                    className="shrink-0"
                  >
                    <ToggleIcon open={isOpen} />
                  </motion.span>
                </motion.button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      initial={{
                        height: 0,
                        opacity: 0,
                        rotateX: -30,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        rotateX: 0,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        rotateX: -30,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: "easeOut",
                      }}
                      style={{
                        transformPerspective: 700,
                        transformOrigin: "top",
                      }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#666666] text-[11px] sm:text-[14px] leading-[1.6] pb-5 pr-6 sm:pr-8 max-w-[850px]">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesFAQSection;
