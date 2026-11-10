
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const InformationSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Planning",
    "Costs",
    "Design",
    "Building",
    "Materials",
    "Legal",
  ];

  const cards = [
    {
      category: "Planning",
      title: "Make a plan that works",
      description:
        "Understand your priorities and create a clear starting point for your home project.",
      detail: "Project planning",
      link: "Explore guide",
    },
    {
      category: "Costs",
      title: "Understand your costs",
      description:
        "Get familiar with budgets, estimates and the expenses involved in building a home.",
      detail: "Budget guidance",
      link: "See cost guide",
    },
    {
      category: "Planning",
      title: "Prepare for your first conversation",
      description:
        "Know what information to gather before speaking with your architect or builder.",
      detail: "Getting started",
      link: "Read the guide",
    },
    {
      category: "Design",
      title: "Explore design ideas",
      description:
        "Discover different approaches to layouts, spaces and the overall look of your home.",
      detail: "Design inspiration",
      link: "Explore ideas",
    },
    {
      category: "Building",
      title: "Keep a record of your choices",
      description:
        "Stay organised by keeping track of important decisions throughout your project.",
      detail: "Project checklist",
      link: "View checklist",
    },
    {
      category: "Materials",
      title: "Plan for thoughtful selections",
      description:
        "Understand material options and make informed choices for your home.",
      detail: "Material guidance",
      link: "Learn more",
    },
  ];

  const filteredCards =
    activeCategory === "All"
      ? cards
      : cards.filter((card) => card.category === activeCategory);

  return (
    <section className="w-full bg-[#F5F4F0] px-5 sm:px-8 lg:px-10 py-10 sm:py-12 lg:py-14">

      <div className="max-w-[1200px] mx-auto">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#7771D5] text-[9px] sm:text-[10px] font-semibold uppercase tracking-[1.5px] mb-3">
            Overview
          </p>

          <h2 className="font-serif text-[#20244F] text-[25px] sm:text-[30px] lg:text-[34px] leading-[1.1] max-w-[450px]">
            The right information for the next decision.
          </h2>
        </motion.div>

        {/* CATEGORY FILTERS */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide mt-6 mb-5 pb-1">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 px-3 py-1.5 text-[9px] sm:text-[10px] uppercase tracking-wide transition-colors duration-200 ${
                activeCategory === category
                  ? "bg-[#20244F] text-white"
                  : "bg-white text-[#777777] border border-[#E8E6E0] hover:text-[#20244F]"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

        {/* INFORMATION CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">

          {filteredCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.06,
              }}
              className="bg-white border border-[#EAE8E2] p-4 sm:p-5 min-h-[185px] flex flex-col"
            >

              {/* CARD CATEGORY */}
              <div className="flex items-center justify-between">
                <span className="text-[#7771D5] text-[8px] sm:text-[9px] font-semibold uppercase tracking-[1px]">
                  {card.category}
                </span>

                <span className="text-[#A6A3C9] text-xs">
                  ↗
                </span>
              </div>

              {/* CARD TITLE */}
              <h3 className="font-serif text-[#20244F] text-base sm:text-lg leading-snug mt-3">
                {card.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-[#777777] text-[9px] sm:text-[10px] leading-[1.7] mt-2">
                {card.description}
              </p>

              {/* CARD FOOTER */}
              <div className="mt-auto pt-3 border-t border-[#F0EFEB] flex flex-col gap-1">
                <Link
                  to="/contact"
                  className="text-[#20244F] text-[9px] sm:text-[10px] font-semibold hover:text-[#7771D5] transition-colors"
                >
                  {card.link} →
                </Link>

                <span className="text-[#999999] text-[8px]">
                  {card.detail}
                </span>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default InformationSection;
