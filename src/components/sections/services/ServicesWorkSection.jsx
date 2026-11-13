import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "framer-motion";

import phone1 from "../../../assets/images/Mobile-device-mockup.png";   // Bid Estimates
import phone2 from "../../../assets/images/Mobile-device-mockup-3.png"; // Action Schedule
import phone3 from "../../../assets/images/Mobile-device-mockup-4.png"; // Brick / Contractor
import phone4 from "../../../assets/images/Mobile-device-mockup-2.png"; // Cards grid
import { SplitText } from "../../common/Animations";

const screens = [
  {
    title: "Understand the estimate",
    description:
      "Organize bid categories and amounts before moving into cost review.",
    image: phone1,
  },
  {
    title: "Coordinate the next trade",
    description:
      "Keep scheduled work and subcontractor information together.",
    image: phone2,
  },
  {
    title: "Contractor",
    description:
      "Organize bid categories and amounts before moving into cost review.",
    image: phone3,
  },
  {
    title: "Keep agreements close",
    description:
      "Maintain a clear place for forms and contracts throughout the project.",
    image: phone4,
  },
];

/* starting angle of each phone before it straightens on scroll */
const FAN = [-32, -14, 14, 32];

const PhoneCard = ({ screen, index, progress }) => {
  /* ---------- scroll: fanned out to straight ---------- */
  const start = index * 0.05;
  const end = 0.75 + index * 0.05;
  const rotY = useTransform(progress, [start, end], [FAN[index], 0]);
  const z = useTransform(progress, [start, end], [-120, 0]);
  const lift = useTransform(progress, [start, end], [50, 0]);
  const shadowOpacity = useTransform(progress, [start, end], [0.05, 0.35]);
  const shadowScale = useTransform(progress, [start, end], [0.5, 1]);

  /* ---------- mouse tilt (per phone) ---------- */
  const nx = useMotionValue(0);
  const ny = useMotionValue(0);
  const sx = useSpring(nx, { stiffness: 110, damping: 16 });
  const sy = useSpring(ny, { stiffness: 110, damping: 16 });
  const tiltY = useTransform(sx, [-0.5, 0.5], [-16, 16]);
  const tiltX = useTransform(sy, [-0.5, 0.5], [10, -10]);

  const onMove = (e) => {
    // skip on touch devices
    if (window.matchMedia("(hover: none)").matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    nx.set((e.clientX - r.left) / r.width - 0.5);
    ny.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    nx.set(0);
    ny.set(0);
  };

  /* ---------- text reveal (driven by the card, not by the clipped title) ---------- */
  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: index * 0.12 },
    },
  };

  const titleVariants = {
    hidden: { y: "110%" },
    visible: {
      y: "0%",
      transition: {
        duration: 0.7,
        delay: 0.3 + index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const descVariants = {
    hidden: { opacity: 0, y: 12, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, delay: 0.5 + index * 0.12 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{ perspective: 1000 }}
      className="w-full"
    >
      {/* PHONE (negative margins cut the transparent PNG padding,
          so the phone edge lines up with the text below) */}
      <motion.div
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{
          rotateY: rotY,
          z,
          y: lift,
          transformStyle: "preserve-3d",
        }}
        className="relative w-fit -ml-[12%] -mt-[6%] -mb-[8%]"
      >
        {/* floor shadow that breathes with the float */}
        <motion.div
          aria-hidden="true"
          style={{ opacity: shadowOpacity, scaleX: shadowScale }}
          className="pointer-events-none absolute bottom-[7%] left-[22%] right-[22%] h-3 rounded-full bg-[#20244F] blur-lg"
        />

        {/* mouse tilt */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          style={{
            rotateX: tiltX,
            rotateY: tiltY,
            transformStyle: "preserve-3d",
          }}
        >
          {/* idle float + sway */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotateZ: [0, -0.8, 0, 0.8, 0],
            }}
            transition={{
              y: {
                duration: 6 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.4,
              },
              rotateZ: {
                duration: 9 + index * 0.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.4,
              },
            }}
          >
            <img
              src={screen.image}
              alt={screen.title}
              className="h-[240px] sm:h-[320px] lg:h-[430px] w-auto max-w-none object-contain object-left drop-shadow-[0_20px_25px_rgba(32,36,79,0.25)]"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* TEXT (kept above the 3D phone) */}
      <div className="relative z-10">
        <div className="overflow-hidden mt-5">
          <motion.h3
            variants={titleVariants}
            className="font-serif text-[#20244F] text-[17px] sm:text-[19px] lg:text-[20px] leading-tight"
          >
            {screen.title}
          </motion.h3>
        </div>

        <motion.p
          variants={descVariants}
          className="text-[#777777] text-[11px] sm:text-[15px] leading-[1.7] mt-2 max-w-[250px]"
        >
          {screen.description}
        </motion.p>
      </div>
    </motion.div>
  );
};

const ServicesWorkSection = () => {
  const gridRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "center center"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 22,
    mass: 0.6,
  });

  return (
    <section className="relative w-full overflow-hidden bg-[#EAE6DF] px-5 sm:px-8 lg:px-10 py-12 sm:py-16 lg:py-20">
      {/* floating glow behind the phones */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/4 h-64 w-64 rounded-full bg-[#7771D5]/15 blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8 sm:mb-10"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.4em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.12em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-[#20244F] text-[9px] sm:text-[14px] uppercase tracking-[0.12em] font-semibold mb-4"
          >
            A closer look
          </motion.p>

          <h2 className="font-serif text-[#20244F] text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.12] tracking-[-0.01em] font-normal">
            <SplitText text="The work, brought into focus." />
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-4 text-[#6F6F7E] text-[12px] sm:text-[15px] lg:text-[14px] leading-[1.7] max-w-[640px]"
          >
            Explore the original application screens for estimates, trade
            scheduling and project agreements.
          </motion.p>
        </motion.div>

        {/* FOUR PHONE SCREENS */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 sm:gap-x-6 lg:gap-x-8 items-center ml-10"
        >
          {screens.map((screen, index) => (
            <PhoneCard
              key={screen.title}
              screen={screen}
              index={index}
              progress={progress}
            />
          ))}
        </div>

        {/* CAPTION */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 sm:mt-12 text-[10px] sm:text-[13px] text-[#5b5a5a]"
        >
          Unchanged source application screens. Sample entries shown are
          demonstration content.
        </motion.p>
      </div>
    </section>
  );
};

export default ServicesWorkSection;