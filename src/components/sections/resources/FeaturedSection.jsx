import { lazy, Suspense, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import aboutImage from "../../../assets/images/Project-planning-still-life.png";
import { SplitText, FloatingOrbs } from "../../common/Animations";

const PhotoPlane3D = lazy(() => import("../../common/PhotoPlane3D"));

const briefQuestions = [
  {
    number: "01",
    title: "What are you building?",
    description:
      "Record your site, intended spaces and the scope you want people to price.",
  },
  {
    number: "02",
    title: "What matters most?",
    description:
      "Separate essential needs from preferences that can evolve with the budget.",
  },
  {
    number: "03",
    title: "What needs confirming?",
    description:
      "List open questions for your designer, builder and local authorities.",
  },
];

/* ---------- variants ---------- */
const sceneV = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const noteV = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 110, damping: 14, delay: 1.2 },
  },
};

const noteLineV = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { delay: 1.8, duration: 0.9, ease: "easeOut" },
  },
};

const listV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.4 } },
};

const itemV = {
  hidden: { opacity: 0, x: 40, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const ringV = {
  hidden: { pathLength: 0 },
  visible: { pathLength: 1, transition: { duration: 1, delay: 0.3, ease: "easeInOut" } },
};

const FeaturedSection = () => {
  const sceneRef = useRef(null);
  const inView = useInView(sceneRef, { once: true, amount: 0.3 });
  const show = inView ? "visible" : "hidden";

  /* ---------- mouse: the note card shifts on its own depth ---------- */
  const nx = useMotionValue(0);
  const ny = useMotionValue(0);
  const sx = useSpring(nx, { stiffness: 90, damping: 18 });
  const sy = useSpring(ny, { stiffness: 90, damping: 18 });
  const noteX = useTransform(sx, [-0.5, 0.5], [10, -10]);
  const noteY = useTransform(sy, [-0.5, 0.5], [6, -6]);

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

  return (
    <section className="relative w-full overflow-hidden bg-[#1D1F6B] px-5 sm:px-8 lg:px-10 py-12 sm:py-16 lg:py-20">
      <FloatingOrbs />

      <div className="relative z-10 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

        {/* LEFT: IMAGE WITH FIELD NOTE */}
        <div
          ref={sceneRef}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          style={{ perspective: 1400 }}
          className="relative w-full"
        >
          {/* floor shadow that breathes */}
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 0.4, scaleX: [1, 0.88, 1] } : { opacity: 0 }}
            transition={{
              opacity: { delay: 1, duration: 1 },
              scaleX: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            }}
            className="pointer-events-none absolute -bottom-3 left-[6%] right-[6%] h-4 rounded-full bg-black/60 blur-xl"
          />

          {/* ENTRANCE (simple rise + fade) */}
          <motion.div variants={sceneV} initial="hidden" animate={show}>
            <motion.figure
              style={{ transformStyle: "preserve-3d" }}
              className="relative w-full aspect-[5/4]"
            >
              {/* THE 3D PHOTO (one whole piece) */}
              <div
                role="img"
                aria-label="Rolled blueprints and plans on a wooden desk"
                className="absolute inset-0 overflow-hidden rounded-[10px] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]"
              >
                <Suspense
                  fallback={
                    <img
                      src={aboutImage}
                      alt="Rolled blueprints and plans on a wooden desk"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  }
                >
                  <PhotoPlane3D src={aboutImage} />
                </Suspense>
              </div>

              {/* FIELD NOTE (pops out in front on its own depth) */}
              <motion.figcaption
                style={{
                  x: noteX,
                  y: noteY,
                  z: 60,
                  transformStyle: "preserve-3d",
                }}
                className="pointer-events-none absolute inset-x-4 bottom-4 sm:inset-x-5 sm:bottom-5"
              >
                <motion.div variants={noteV} initial="hidden" animate={show}>
                  {/* endless float + sway */}
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      rotateZ: [0, -0.7, 0, 0.7, 0],
                    }}
                    transition={{
                      y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
                      rotateZ: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                    }}
                    className="relative overflow-hidden rounded-md bg-[#F8F6F1]/95 px-4 py-3 sm:px-5 sm:py-4 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.45)]"
                  >
                    {/* accent line draws in */}
                    <motion.span
                      aria-hidden="true"
                      variants={noteLineV}
                      initial="hidden"
                      animate={show}
                      className="absolute top-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-[#7771D5] to-[#A9A5F5]"
                    />

                    <p className="text-[#1D1F6B] text-[10px] sm:text-[14px] font-semibold uppercase tracking-[1.5px]">
                      The owner’s field notes
                    </p>
                    <p className="mt-1.5 text-[#20244F] text-[13px] sm:text-[14px] font-semibold leading-[1.3]">
                      Preparation is part of the build.
                    </p>
                  </motion.div>
                </motion.div>
              </motion.figcaption>
            </motion.figure>
          </motion.div>
        </div>

        {/* RIGHT: CONTENT */}
        <div>
          <motion.p
            initial={{ opacity: 0, letterSpacing: "6px" }}
            whileInView={{ opacity: 1, letterSpacing: "1.5px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-white/70 text-[10px] sm:text-[14px] font-semibold uppercase tracking-[1.5px] mb-4"
          >
            Featured / Planning / Editorial preview
          </motion.p>

          <h2 className="text-white text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] leading-[1.15] tracking-[-1px] font-normal max-w-[520px] [font-family:Georgia,serif]">
            <SplitText text="Before the first estimate," delay={0.2} />{" "}
            <br className="hidden sm:block" />
            <SplitText text="get clear on the brief." delay={0.5} />
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-4 text-white/80 text-[12px] sm:text-[15px] leading-[1.7] max-w-[500px]"
          >
            A useful project brief helps you describe the same scope to
            everyone you speak with. Begin with three simple questions:
          </motion.p>

          <motion.ol
            variants={listV}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-6 space-y-5"
          >
            {briefQuestions.map((item) => (
              <motion.li
                key={item.number}
                variants={itemV}
                whileHover={{ x: 6 }}
                className="group relative grid grid-cols-[32px_1fr] items-start"
              >
                {/* ring that draws around the number */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 26 26"
                  className="pointer-events-none absolute -left-[5px] -top-[1px] h-[26px] w-[26px] -rotate-90"
                >
                  <motion.circle
                    cx="13"
                    cy="13"
                    r="11.5"
                    fill="none"
                    stroke="#A9A5F5"
                    strokeWidth="1"
                    variants={ringV}
                  />
                </svg>

                <span className="pt-1 text-white text-[10px] sm:text-[13px]">
                  {item.number}
                </span>

                <div>
                  <h3 className="text-white text-[13px] sm:text-[16px] font-semibold leading-[1.3] transition-colors duration-300 group-hover:text-[#A9A5F5]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-white/65 text-[11px] sm:text-[14px] leading-[1.7] max-w-[460px]">
                    {item.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>

      </div>
    </section>
  );
};

export default FeaturedSection;