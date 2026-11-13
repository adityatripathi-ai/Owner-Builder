
import { motion } from "framer-motion";

const tags = [
  "Platform Questions",
  "Project organization",
  "Getting started",
];

const ease = [0.22, 1, 0.36, 1];

const containerV = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

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
      ease,
    },
  },
};

export default function Hero() {
  return (
    <section className="bg-[#f4f2ed] text-[#1d2056] overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 pb-14 pt-6 md:px-12 md:pb-20 md:pt-7">

        {/* BREADCRUMB */}
        <motion.nav
          aria-label="Breadcrumb"
          initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease }}
          className="text-[10px] sm:text-[14px] font-semibold uppercase tracking-[1.5px] text-[#1d2056]/70"
        >
          <a href="/" className="hover:underline">
            Home
          </a>
          <span className="mx-1" aria-hidden="true">/</span>
          <span aria-current="page">Contact us</span>
        </motion.nav>

        <div className="mt-5 grid gap-6 md:mt-6 md:grid-cols-[1fr_340px] md:gap-10 lg:grid-cols-[1fr_380px]">

          {/* HEADING */}
          <motion.h1
            initial={{
              opacity: 0,
              x: -40,
              filter: "blur(8px)",
            }}
            animate={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease,
            }}
            className="font-serif text-[32px] min-[380px]:text-[36px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-normal leading-[1.05] tracking-[-1px]"
          >
            Every build starts with
            <br className="hidden md:block" /> a conversation.
          </motion.h1>

          {/* RIGHT CONTENT */}
          <motion.div
            variants={containerV}
            initial="hidden"
            animate="visible"
            className="md:pt-3"
          >
            <motion.p
              variants={itemV}
              className="max-w-[330px] text-[12px] sm:text-[15px] leading-[1.7] text-[#1d2056]/75"
            >
              Planning your home, comparing options or already on site? Tell us
              what you’re working on and where you’d like more clarity.
            </motion.p>

            {/* TAGS */}
            <motion.ul
              variants={containerV}
              initial="hidden"
              animate="visible"
              className="mt-3 flex flex-wrap gap-1.5"
            >
              {tags.map((tag) => (
                <motion.li
                  key={tag}
                  variants={itemV}
                  whileHover={{
                    y: -4,
                    scale: 1.03,
                    transition: { duration: 0.25 },
                  }}
                  className="cursor-default rounded-sm border border-[#1d2056]/25 bg-white px-2 py-[3px] text-[10px] sm:text-[13px] leading-[1.6] text-[#1d2056]"
                >
                  {tag}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
