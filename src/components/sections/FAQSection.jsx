import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SplitText } from "../common/Animations";

const faqItems = [
  {
    question: "Is Owner Builder a construction company?",
    answer:
      "Owner Builder is a project coordination platform. It helps you organize building information; your appointed professionals remain responsible for design, construction and local requirements.",
  },
  {
    question: "What can I manage in one project?",
    answer:
      "Keep bid estimates, costs, schedules, trade contacts, contracts, selections and completion details organized around your house-building project.",
  },
  {
    question: "Where should I begin?",
    answer:
      "Start with your project details and a list of the decisions ahead. Contact us to discuss which parts of the platform are most relevant to your build.",
  },
];

const FAQSection = () => {
  const [openItems, setOpenItems] = useState([0, 1, 2]);

  const toggleFAQ = (index) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };

  return (
    <section className="w-full bg-[#F8F7F3]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 py-10 sm:py-14 md:py-16">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#7771D5] text-[10px] sm:text-[14px] font-semibold uppercase tracking-[1.5px] mb-3">A little more clarity</p>

          <h2 className="font-['Georgia',serif] text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] font-normal leading-[1.15] text-[#20244F]">
            <SplitText text="Frequently Asked Questions" />
          </h2>
        </motion.div>

        <div className="mt-6 sm:mt-8 border-t border-[#E1DFD8]">
          {faqItems.map((item, index) => {
            const isOpen = openItems.includes(index);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border-b border-[#E1DFD8]"
              >
                <motion.button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  whileHover="hover"
                  className="w-full flex items-center justify-between gap-4 pt-4 pb-2 text-left"
                >
                  <motion.span
                    variants={{ hover: { x: 8 } }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="text-[#20244F] text-[13px] sm:text-[15px] font-semibold leading-snug"
                  >
                    {item.question}
                  </motion.span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    variants={{ hover: { scale: 1.3 } }}
                    transition={{ duration: 0.35 }}
                    className="text-[#7771D5] text-[15px] shrink-0"
                  >
                    {isOpen ? "−" : "+"}
                  </motion.span>
                </motion.button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, rotateX: -30 }}
                      animate={{ height: "auto", opacity: 1, rotateX: 0 }}
                      exit={{ height: 0, opacity: 0, rotateX: -30 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      style={{ transformPerspective: 700, transformOrigin: "top" }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#666666] text-[11px] sm:text-[14px] leading-[1.6] pb-4 pr-8 max-w-[850px]">{item.answer}</p>
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

export default FAQSection;