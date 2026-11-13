
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { TiltCard } from "../../common/Animations";

const iconProps = {
  viewBox: "0 0 24 24",
  className: "h-5 w-5 text-[#20244F]",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const PersonIcon = () => (
  <svg {...iconProps}>
    <circle cx="10" cy="8" r="3.2" />
    <path d="M4 20c0-3.5 2.7-6 6-6s6 2.5 6 6" />
    <path d="M18 4v4M16 6h4" />
  </svg>
);

const BuildingIcon = () => (
  <svg {...iconProps}>
    <path d="M4 20h16M6 20v-6h12v6" />
    <path d="M8 14V9l4-4 4 4v5" />
    <path d="M10 20v-3h4v3" />
  </svg>
);

const HomeIcon = () => (
  <svg {...iconProps}>
    <path d="M4 11 12 4l8 7" />
    <path d="M6 10v10h12V10" />
    <path d="M10 20v-5h4v5" />
  </svg>
);

const processSteps = [
  {
    icon: <PersonIcon />,
    stage: "Before construction",
    title: "Prepare the project",
    description:
      "Collect project details, organize estimates and create a place for early documents and selections.",
  },
  {
    icon: <BuildingIcon />,
    stage: "During construction",
    title: "Coordinate the details",
    description:
      "Follow the action schedule, keep trade contacts handy, review costs and record progress.",
  },
  {
    icon: <HomeIcon />,
    stage: "Toward completion",
    title: "Close the loop",
    description:
      "Review punch items, follow up on unfinished work and preserve the project's pictures and documents.",
  },
];

const ServicesProcessSection = () => {
  return (
    <section className="w-full bg-[#1D1F6B] px-5 sm:px-8 lg:px-10 py-14 sm:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8 sm:mb-10"
        >
          <p className="text-white/70 text-[10px] sm:text-[14px] font-semibold uppercase tracking-[1.5px] mb-4">
            Put it into practice
          </p>

          <h2 className="font-normal text-white text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] leading-[1.15] tracking-[-1px] max-w-[680px] [font-family:Georgia,serif]">
            A simpler way to move through the build.
          </h2>
        </motion.div>

        {/* PROCESS CARDS */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
        >
          {processSteps.map((step) => (
            <TiltCard
              key={step.title}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
                hover: { y: -5 },
              }}
              transition={{ duration: 0.6 }}
              whileHover="hover"
              className="
                bg-white
                rounded-md
                p-5 sm:p-6
                transition-shadow duration-300
                hover:shadow-md
              "
            >
              <div className="flex items-start justify-between gap-3">
                {/* ICON ANIMATION */}
                <motion.div
                  style={{ transformPerspective: 400 }}
                  variants={{
                    hover: {
                      rotateY: 360,
                      scale: 1.15,
                      transition: {
                        duration: 0.7,
                        ease: "easeInOut",
                      },
                    },
                  }}
                >
                  {step.icon}
                </motion.div>

                <span className="text-[#9A9AAE] text-[10px] sm:text-[11px] font-semibold uppercase tracking-[1.5px] text-right">
                  {step.stage}
                </span>
              </div>

              <h3 className="mt-6 text-[#20244F] text-[13px] sm:text-[16px] font-semibold leading-[1.3]">
                {step.title}
              </h3>

              <p className="mt-2 text-[#777777] text-[11px] sm:text-[14px] leading-[1.7]">
                {step.description}
              </p>
            </TiltCard>
          ))}
        </motion.ul>

        {/* QUESTIONS BOX */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 sm:mt-10"
        >
          <Link
            to="/contact"
            className="inline-block w-full sm:w-auto rounded-md bg-white px-6 sm:px-12 py-5 sm:py-4 text-center text-[11px] sm:text-[14px] font-medium text-[#20244F] transition-colors hover:bg-[#F4F2ED] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1D1F6B]"
          >
            Got Questions?... Ask the builder right in your pocket
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesProcessSection;
