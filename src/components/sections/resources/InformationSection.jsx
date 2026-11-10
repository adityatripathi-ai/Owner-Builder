import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Card ke top-right me arrow ki jagah ye icon. Baad me apna asli icon yahan badal dena.
import vector1 from "../../../assets/icons/Vector.png";

const filters = [
  { label: "All topics", value: "All" },
  { label: "Planning", value: "Planning" },
  { label: "Budgeting", value: "Budgeting" },
  { label: "Coordination", value: "Coordination" },
  { label: "Documents", value: "Documents" },
  { label: "Selections", value: "Selections" },
  { label: "Completion", value: "Completion" },
];

const cards = [
  {
    category: "Planning",
    title: "Start with a project brief",
    description:
      "Define the home you want to build before the details multiply.",
    tags: ["Goals", "Scope", "Priorities"],
  },
  {
    category: "Budgeting",
    title: "Compare bids with context",
    description:
      "Look beyond the headline price to scope, exclusions and assumptions.",
    tags: ["Scope", "Allowances", "Questions"],
  },
  {
    category: "Coordination",
    title: "Prepare for your trade conversations",
    description:
      "Gather the information that makes a handoff more useful.",
    tags: ["Contacts", "Timing", "Follow-ups"],
  },
  {
    category: "Documents",
    title: "Create a project filing system",
    description:
      "Give drawings, agreements and progress records a consistent home.",
    tags: ["Folders", "Naming", "Versions"],
  },
  {
    category: "Selections",
    title: "Keep a record of your choices",
    description:
      "Track the material decisions that need a clear specification.",
    tags: ["Finishes", "Specifications", "Lead times"],
  },
  {
    category: "Completion",
    title: "Plan a focused final walkthrough",
    description:
      "Record outstanding work clearly and follow each item through.",
    tags: ["Punch items", "Trades", "Completion"],
  },
];

const InformationSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCards =
    activeCategory === "All"
      ? cards
      : cards.filter((card) => card.category === activeCategory);

  return (
    <section className="w-full bg-[#F4F2ED] px-5 sm:px-8 lg:px-10 py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#1D1F6B] text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.12em] mb-4">
            Explore by topic
          </p>

          <h2 className="font-serif text-[#20244F] text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.12] tracking-[-0.01em] max-w-[650px]">
            The right information for the next decision.
          </h2>
        </motion.div>

        {/* TOPIC FILTERS */}
        <div
          role="group"
          aria-label="Filter by topic"
          className="flex items-center gap-2 overflow-x-auto mt-7 mb-6 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {filters.map((filter) => {
            const isActive = activeCategory === filter.value;

            return (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveCategory(filter.value)}
                aria-pressed={isActive}
                className={`shrink-0 rounded-[3px] px-3 py-1.5 text-[10px] sm:text-[11px] transition-colors duration-200 ${
                  isActive
                    ? "bg-[#1D1F6B] text-white border border-[#1D1F6B]"
                    : "bg-white text-[#20244F]/70 border border-[#E4E1DA] hover:text-[#20244F]"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* INFORMATION CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {filteredCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="bg-white rounded-[10px] p-5 sm:p-6"
            >
              {/* CATEGORY + ICON */}
              <div className="flex items-center justify-between">
                <span className="text-[#1D1F6B] text-[8px] sm:text-[9px] font-semibold uppercase tracking-[0.1em]">
                  {card.category}
                </span>

                <img
                  src={vector1}
                  alt=""
                  aria-hidden="true"
                  className="h-4 w-4 object-contain"
                />
              </div>

              {/* TITLE */}
              <h3 className="font-serif text-[#20244F] text-[20px] sm:text-[22px] leading-[1.2] mt-5">
                {card.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-[#777777] text-[11px] sm:text-[12px] leading-[1.6] mt-3">
                {card.description}
              </p>

              {/* TAGS */}
              <p className="text-[#8A8A98] text-[9px] sm:text-[10px] mt-4">
                {card.tags.join(" • ")}
              </p>

              {/* FOOTER */}
              <div className="mt-4 pt-4 border-t border-[#ECEAE4]">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 text-[#20244F] text-[10px] sm:text-[11px] font-semibold hover:text-[#7771D5] transition-colors"
                >
                  View editorial preview <span aria-hidden="true">↗</span>
                </Link>

                <p className="text-[#8A8A98] text-[9px] sm:text-[10px] mt-2">
                  Proposed guide · Awaiting approval
                </p>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InformationSection;