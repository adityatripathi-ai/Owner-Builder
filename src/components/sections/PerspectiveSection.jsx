import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { Link } from "react-router-dom";

import phone4 from "../../assets/images/phone-3.png";
import warmBg from "../../assets/images/Warm-architectural-setting.png";
import { SplitText, Magnetic } from "../common/Animations";

const points = [
  "Bring daily tasks into focus",
  "Keep project records organized",
  "Review the details before the next conversation",
];

const CheckIcon = ({ delay = 0 }) => (
  <svg
    viewBox="0 0 24 24"
    className="h-3 w-3 shrink-0 text-[#20244F]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <motion.path
      d="m5 12.5 4.5 4.5L19 7.5"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    />
  </svg>
);

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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

const PerspectiveSection = () => {
  const cardRef = useRef(null);

  /* ---------- scroll-linked ---------- */
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const phoneY = useTransform(scrollYProgress, [0, 0.5, 1], [70, 0, -70]);
  const phoneRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-12, 0, 12]);
  const phoneScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.88, 1, 0.92]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.25, 1.1]);
  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    [0.2, 0.8, 0.8, 0.2]
  );

  /* ---------- mouse-linked depth ---------- */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const hover = useMotionValue(0);

  const sx = useSpring(mx, { stiffness: 90, damping: 18 });
  const sy = useSpring(my, { stiffness: 90, damping: 18 });
  const hoverSpring = useSpring(hover, { stiffness: 120, damping: 20 });

  const tiltY = useTransform(sx, [-0.5, 0.5], [-7, 7]);
  const tiltX = useTransform(sy, [-0.5, 0.5], [6, -6]);

  const bgX = useTransform(sx, [-0.5, 0.5], [8, -8]);
  const bgY = useTransform(sy, [-0.5, 0.5], [6, -6]);
  const phoneMX = useTransform(sx, [-0.5, 0.5], [-10, 10]);
  const phoneMY = useTransform(sy, [-0.5, 0.5], [-8, 8]);

  const gx = useTransform(sx, [-0.5, 0.5], ["0%", "100%"]);
  const gy = useTransform(sy, [-0.5, 0.5], ["0%", "100%"]);
  const glareBg = useMotionTemplate`radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.28), transparent 55%)`;

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onEnter = () => hover.set(1);
  const onLeave = () => {
    mx.set(0);
    my.set(0);
    hover.set(0);
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="w-full bg-[#F4F2ED] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 py-12 sm:py-16 md:py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10 lg:gap-16">

          {/* LEFT SIDE - IMAGE CARD */}
          <motion.div
            ref={cardRef}
            onMouseMove={onMove}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            initial={{
              opacity: 0,
              x: -50,
              rotateY: 18,
              scale: 0.94,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotateY: 0,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformPerspective: 1200 }}
            className="rounded-md bg-[#E9E6DF] pr-3 md:pr-4"
          >
            {/* mouse tilt layer */}
            <motion.div
              style={{
                rotateX: tiltX,
                rotateY: tiltY,
                transformPerspective: 1000,
              }}
            >
              <div className="relative aspect-[15/16] w-full overflow-hidden rounded-md">

                {/* BACKGROUND IMAGE (moves opposite to mouse) */}
                <motion.img
                  src={warmBg}
                  alt=""
                  style={{ scale: bgScale, x: bgX, y: bgY }}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* ANIMATED PURPLE BLUE GLOW */}
                <motion.div
                  style={{ opacity: glowOpacity }}
                  animate={{
                    scale: [0.9, 1.15, 0.9],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] h-[65%] rounded-full bg-[#7771D5]/40 blur-[65px]"
                />

                {/* RIPPLE WAVES */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-[4] flex items-center justify-center"
                >
                  {[0, 1.6].map((d) => (
                    <motion.span
                      key={d}
                      className="absolute aspect-square w-[55%] rounded-full border border-white/60"
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: [0.6, 1.5], opacity: [0.5, 0] }}
                      transition={{
                        duration: 3.2,
                        delay: d,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    />
                  ))}
                </div>

                {/* 3D ORBIT RINGS */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-[5] flex items-center justify-center"
                >
                  <div
                    className="aspect-square w-[92%]"
                    style={{ transform: "perspective(900px) rotateX(70deg)" }}
                  >
                    <motion.div
                      className="relative h-full w-full rounded-full border border-dashed border-white/60"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                    >
                      <span className="absolute -top-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#A9A5F5] shadow-[0_0_14px_4px_rgba(169,165,245,0.9)]" />
                    </motion.div>
                  </div>

                  <div
                    className="absolute aspect-square w-[68%]"
                    style={{ transform: "perspective(900px) rotateX(70deg)" }}
                  >
                    <motion.div
                      className="relative h-full w-full rounded-full border border-white/40"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                    >
                      <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-white shadow-[0_0_12px_3px_rgba(255,255,255,0.8)]" />
                    </motion.div>
                  </div>
                </div>

                {/* PHONE IMAGE */}
                <motion.div
                  style={{ x: phoneMX, y: phoneMY }}
                  className="absolute inset-0 z-10"
                >
                  <motion.div
                    style={{
                      y: phoneY,
                      rotateY: phoneRotate,
                      scale: phoneScale,
                      transformPerspective: 1000,
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <motion.img
                      src={phone4}
                      alt="Mobile app showing a to-do list and calendar"
                      animate={{
                        y: [0, -12, 0],
                        rotateZ: [0, 1, 0, -1, 0],
                      }}
                      transition={{
                        y: {
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                        rotateZ: {
                          duration: 7,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                      whileHover={{
                        scale: 1.04,
                        transition: { duration: 0.4 },
                      }}
                      className="h-[84%] w-auto max-w-none object-contain drop-shadow-2xl"
                    />
                  </motion.div>
                </motion.div>

                {/* CURSOR GLARE */}
                <motion.div
                  aria-hidden="true"
                  style={{ opacity: hoverSpring, backgroundImage: glareBg }}
                  className="pointer-events-none absolute inset-0 z-30"
                />

              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - CONTENT */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-[480px]"
          >
            <motion.p
              variants={itemVariants}
              className="text-[#7771D5] text-[10px] sm:text-[14px] font-semibold uppercase tracking-[1.5px] mb-3"
            >
              At the desk. On the site.
            </motion.p>

            <motion.h2
              variants={itemVariants}
              className="font-['Georgia',serif] text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] font-normal leading-[1.15] text-[#20244F]"
            >
              <SplitText text="Keep the next step close" />{" "}
              <br className="hidden lg:block" />
              <SplitText text="at hand." delay={0.4} />
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-[#666666] text-[12px] sm:text-[15px] leading-[1.7] mt-5"
            >
              Building doesn’t happen in one place. Keep your to-do list,
              project information and important records within reach when it’s
              time to make a decision.
            </motion.p>

            {/* POINTS */}
            <ul className="mt-5 flex flex-col gap-2.5">
              {points.map((point, i) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + i * 0.2,
                    ease: "easeOut",
                  }}
                  className="text-[#666666] text-[11px] sm:text-[15px] leading-[1.6] flex items-center gap-2.5"
                >
                  <motion.span
                    initial={{ scale: 0, rotate: -90 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + i * 0.2,
                      type: "spring",
                      stiffness: 180,
                    }}
                  >
                    <CheckIcon delay={0.6 + i * 0.2} />
                  </motion.span>

                  {point}
                </motion.li>
              ))}
            </ul>

            {/* BUTTON */}
            <motion.div
              variants={itemVariants}
              className="mt-7"
            >
              <Magnetic>
                <Link
                  to="/services"
                  className="group relative overflow-hidden text-[11px] sm:text-[14px] font-medium inline-flex items-center gap-3 rounded-[3px] border border-[#DDDAD1] bg-white px-4 py-2.5 text-[#20244F] transition-all duration-300 hover:border-[#20244F] hover:shadow-[0_8px_25px_rgba(32,36,79,0.12)]"
                >
                  <span className="pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-[#7771D5]/20 transition-transform duration-700 group-hover:translate-x-[450%]" />
                  <span className="relative">Explore project tools</span>
                  <span className="relative">
                    <ArrowIcon />
                  </span>
                </Link>
              </Magnetic>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PerspectiveSection;