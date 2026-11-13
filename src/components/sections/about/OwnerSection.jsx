import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

import aboutImage from "../../../assets/images/Architectural-photography-1.png";
import { SplitText } from "../../common/Animations";

const points = [
  {
    title: "Clarity over clutter",
    description:
      "Useful structure, understandable categories and a clear place for the information that matters.",
  },
  {
    title: "Preparation over guesswork",
    description:
      "A practical way to gather details before decisions become urgent.",
  },
  {
    title: "Continuity from start to finish",
    description:
      "Project information that stays connected through planning, construction and the final walkthrough.",
  },
];

const OwnerSection = () => {
  const figRef = useRef(null);

  /* ---------- scroll: side-on to straight ---------- */
  const { scrollYProgress } = useScroll({
    target: figRef,
    offset: ["start end", "center center"],
  });
  const p = useSpring(scrollYProgress, { stiffness: 80, damping: 22, mass: 0.6 });

  const sceneRotY = useTransform(p, [0, 1], [-32, 0]);
  const sceneRotX = useTransform(p, [0, 1], [8, 0]);
  const sceneScale = useTransform(p, [0, 1], [0.94, 1]);
  const sceneOpacity = useTransform(p, [0, 0.35], [0, 1]);

  /* back frames slide out from behind the photo */
  const plate1X = useTransform(p, [0.2, 1], [0, -12]);
  const plate1Y = useTransform(p, [0.2, 1], [0, 12]);
  const plate2X = useTransform(p, [0.2, 1], [0, -24]);
  const plate2Y = useTransform(p, [0.2, 1], [0, 24]);
  const plateOpacity = useTransform(p, [0.3, 0.8], [0, 1]);

  const shadowOpacity = useTransform(p, [0, 1], [0.1, 0.45]);
  const shadowScale = useTransform(p, [0, 1], [0.7, 1]);

  /* ---------- mouse tilt + glare ---------- */
  const nx = useMotionValue(0);
  const ny = useMotionValue(0);
  const hover = useMotionValue(0);
  const sx = useSpring(nx, { stiffness: 90, damping: 18 });
  const sy = useSpring(ny, { stiffness: 90, damping: 18 });
  const hoverSpring = useSpring(hover, { stiffness: 80, damping: 20 });

  const tiltY = useTransform(sx, [-0.5, 0.5], [-10, 10]);
  const tiltX = useTransform(sy, [-0.5, 0.5], [8, -8]);

  const gx = useTransform(sx, [-0.5, 0.5], ["0%", "100%"]);
  const gy = useTransform(sy, [-0.5, 0.5], ["0%", "100%"]);
  const glare = useMotionTemplate`radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.35), transparent 55%)`;

  const onMove = (e) => {
    // skip on touch devices
    if (window.matchMedia("(hover: none)").matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    nx.set((e.clientX - r.left) / r.width - 0.5);
    ny.set((e.clientY - r.top) / r.height - 0.5);
    hover.set(1);
  };
  const onLeave = () => {
    nx.set(0);
    ny.set(0);
    hover.set(0);
  };

  /* ---------- right side ---------- */
  const listVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18, delayChildren: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, rotateY: -60, x: -20 },
    visible: {
      opacity: 1,
      rotateY: 0,
      x: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="w-full overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* LEFT IMAGE */}
          <figure
            ref={figRef}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{ perspective: 1400 }}
            className="relative w-full"
          >
            {/* scroll-driven 3D (hinged on the left edge) */}
            <motion.div
              style={{
                rotateY: sceneRotY,
                rotateX: sceneRotX,
                scale: sceneScale,
                opacity: sceneOpacity,
                transformOrigin: "left center",
                transformStyle: "preserve-3d",
              }}
            >
              {/* mouse tilt */}
              <motion.div
                style={{
                  rotateX: tiltX,
                  rotateY: tiltY,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* idle float + sway */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotateY: [-2, 2, -2],
                    rotateX: [1, -1, 1],
                  }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div
                    style={{ transformStyle: "preserve-3d" }}
                    className="relative w-full aspect-[5/4]"
                  >
                    {/* BACK FRAME 2 (deepest, tinted) */}
                    <motion.div
                      aria-hidden="true"
                      style={{ x: plate2X, y: plate2Y, z: -70, opacity: plateOpacity }}
                      className="pointer-events-none absolute inset-0 rounded-[4px] bg-[#EFEDE7]"
                    />

                    {/* BACK FRAME 1 (outline) */}
                    <motion.div
                      aria-hidden="true"
                      style={{ x: plate1X, y: plate1Y, z: -35, opacity: plateOpacity }}
                      className="pointer-events-none absolute inset-0 rounded-[4px] border border-[#7771D5]/50"
                    />

                    {/* THE PHOTO (always one whole piece) */}
                    <div className="absolute inset-0 overflow-hidden rounded-[4px] shadow-[0_30px_60px_-30px_rgba(32,36,79,0.5)]">
                      <img
                        src={aboutImage}
                        alt="Timber frame of a house under construction"
                        className="w-full h-full object-cover rounded-[4px]"
                      />

                      {/* cursor glare */}
                      <motion.div
                        aria-hidden="true"
                        style={{ opacity: hoverSpring, backgroundImage: glare }}
                        className="pointer-events-none absolute inset-0 mix-blend-soft-light"
                      />

                      {/* light sweep once the image settles */}
                      <motion.div
                        aria-hidden="true"
                        initial={{ x: "-120%" }}
                        whileInView={{ x: "320%" }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 1.4, delay: 0.8, ease: "easeInOut" }}
                        className="pointer-events-none absolute inset-y-0 left-0 w-1/4 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent"
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* floor shadow that breathes */}
            <motion.div
              aria-hidden="true"
              style={{ opacity: shadowOpacity, scaleX: shadowScale }}
              className="pointer-events-none absolute -bottom-3 left-[6%] right-[6%] h-4 rounded-full bg-[#20244F] blur-xl"
            />

            <motion.figcaption
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-3 text-[10px] sm:text-[11px] text-[#777777] leading-[1.6]"
            >
              Conceptual construction imagery
            </motion.figcaption>
          </figure>

          {/* RIGHT CONTENT */}
          <div className="w-full">
            <motion.p
              initial={{ opacity: 0, letterSpacing: "6px" }}
              whileInView={{ opacity: 1, letterSpacing: "1.5px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="text-[#7771D5] text-[10px] sm:text-[14px] font-semibold uppercase tracking-[1.5px] mb-3"
            >
              Our approach
            </motion.p>

            <h2 className="font-['Georgia',serif] text-[26px] sm:text-[40px] md:text-[34px] lg:text-[38px] font-normal leading-[1.15] text-[#20244F] max-w-[460px]">
              <SplitText text="Keep the owner at the center." delay={0.2} />
            </h2>

            {/* POINTS */}
            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              style={{ perspective: 900 }}
              className="mt-7 flex flex-col gap-5 sm:gap-6"
            >
              {points.map((point) => (
                <motion.div
                  key={point.title}
                  variants={itemVariants}
                  whileHover={{ x: 6 }}
                  style={{ transformOrigin: "left center" }}
                  className="group"
                >
                  <h3 className="text-[#20244F] text-[13px] sm:text-[16px] font-semibold leading-snug mb-2 transition-colors duration-300 group-hover:text-[#7771D5]">
                    {point.title}
                  </h3>

                  <p className="max-w-[460px] text-[#666666] text-[11px] sm:text-[14px] leading-[1.7]">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OwnerSection;