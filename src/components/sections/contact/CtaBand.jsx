
import { motion } from "framer-motion";

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-3 w-3"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

// Parent animation
const contentV = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

// Individual content animation
const itemV = {
  hidden: {
    opacity: 0,
    y: 25,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function CtaBand() {
  return (
    <section className="overflow-hidden bg-[#1d1f6b] text-white">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-6 py-14 md:flex-row md:items-center md:justify-between md:px-12 md:py-20">

        {/* LEFT CONTENT */}
        <motion.div
          variants={contentV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-2xl"
        >
          {/* Label */}
          <motion.p
            variants={itemV}
            className="text-[10px] font-semibold uppercase tracking-[1.5px] text-white/80 sm:text-[14px]"
          >
            Still exploring?
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={itemV}
            className="mt-3 font-serif text-[26px] font-normal leading-[1.15] tracking-[-1px] sm:text-[30px] md:text-[34px] lg:text-[38px]"
          >
            Get to know the tools first.
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemV}
            className="mt-3 max-w-lg text-[12px] leading-[1.7] text-white/80 sm:text-[15px]"
          >
            See how Owner Builder organizes the everyday details of a
            house-building project.
          </motion.p>
        </motion.div>

        {/* BUTTON */}
        <motion.a
          href="/services"
          initial={{
            opacity: 0,
            x: 40,
            scale: 0.95,
            filter: "blur(6px)",
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            y: -5,
            scale: 1.04,
            transition: { duration: 0.3 },
          }}
          whileTap={{
            scale: 0.96,
          }}
          className="inline-flex items-center gap-2 self-start rounded-[3px] bg-white px-5 py-3 text-[11px] font-medium text-[#1d2056] transition-colors hover:bg-[#f4f2ed] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1d1f6b] sm:text-[13px] md:self-center"
        >
          Explore offerings

          <motion.span
            whileHover={{ x: 3, y: -3 }}
            transition={{ duration: 0.25 }}
          >
            <ArrowIcon />
          </motion.span>
        </motion.a>

      </div>
    </section>
  );
}
