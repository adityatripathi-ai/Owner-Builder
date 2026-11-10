
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqItems = [
  {
    question: "Is Owner Builder a construction company?",
    answer:
      "Owner Builder is a project coordination platform. It helps you organize building information; your appointed professionals remain responsible for design, construction and local requirements.",
  },
  {
    question: "What can I manage in one project?",
    answer:
      "Keep bid estimates, costs, schedules, trade contacts, contracts, selections and completion details organized around your house-building project",
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
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="w-full bg-[#F8F7F3]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 py-10 sm:py-14 md:py-16">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#7771D5] text-[9px] sm:text-[10px] uppercase tracking-[1.5px] font-semibold mb-2">
            A little more clarity
          </p>

          <h2 className="font-serif text-[#20244F] text-[26px] sm:text-[30px] md:text-[34px] leading-tight">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* FAQ LIST */}
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
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 pt-4 pb-2 text-left"
                >
                  <span className="text-[#20244F] text-[11px] sm:text-[12px] font-semibold">
                    {item.question}
                  </span>

                  <span className="text-[#7771D5] text-[15px] shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#777777] text-[9px] sm:text-[10px] leading-[1.7] pb-4 pr-8 max-w-[850px]">
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

export default FAQSection;
