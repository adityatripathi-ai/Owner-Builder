
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

export default function CtaBand() {
  return (
    <section className="bg-[#1d1f6b] text-white">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-6 py-14 md:flex-row md:items-center md:justify-between md:px-12 md:py-20">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[10px] sm:text-[14px] font-semibold uppercase tracking-[1.5px] text-white/80">
            Still exploring?
          </p>

          <h2 className="mt-3 font-serif text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] font-normal leading-[1.15] tracking-[-1px]">
            Get to know the tools first.
          </h2>

          <p className="mt-3 max-w-lg text-[12px] sm:text-[15px] leading-[1.7] text-white/80">
            See how Owner Builder organizes the everyday details of a
            house-building project.
          </p>
        </motion.div>

        {/* BUTTON */}
        <motion.a
          href="/services"
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2 self-start rounded-[3px] bg-white px-5 py-3 text-[11px] sm:text-[13px] font-medium text-[#1d2056] transition hover:bg-[#f4f2ed] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1d1f6b] md:self-center"
        >
          Explore offerings <ArrowIcon />
        </motion.a>

      </div>
    </section>
  );
}
