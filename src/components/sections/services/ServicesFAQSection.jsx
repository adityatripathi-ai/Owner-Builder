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
  // Figma me teeno answers khule dikh rahe hain
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
          <p className="text-[#1D1F6B] text-[9px] sm:text-[10px] uppercase tracking-[0.12em] font-semibold mb-3">
            A little more clarity
          </p>

          <h2 className="font-serif text-[#20244F] text-[30px] sm:text-[36px] lg:text-[42px] leading-[1.1] tracking-[-0.01em]">
            Before you begin.
          </h2>
        </motion.div>

        {/* FAQ LIST: sirf items ke beech patli lines */}
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
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="w-full flex items-center justify-between gap-4 pt-5 pb-2 text-left"
                >
                  <span className="text-[#20244F] text-[14px] sm:text-[16px] font-medium leading-snug">
                    {item.question}
                  </span>

                  <ToggleIcon open={isOpen} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#777777] text-[12px] sm:text-[14px] leading-[1.7] pb-5 pr-6 sm:pr-8">
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