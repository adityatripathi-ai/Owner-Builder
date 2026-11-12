import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { Link } from "react-router-dom";

import heroImage from "../../assets/images/herobg.png";

const Hero = () => {
  const wrapRef = useRef(null);

  /* ---------- mouse position (-0.5 to 0.5) ---------- */
  const nx = useMotionValue(0);
  const ny = useMotionValue(0);
  const hover = useMotionValue(0);

  const sx = useSpring(nx, { stiffness: 90, damping: 20 });
  const sy = useSpring(ny, { stiffness: 90, damping: 20 });
  const hoverSpring = useSpring(hover, { stiffness: 80, damping: 20 });

  /* ---------- image mouse parallax (your values) ---------- */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, { stiffness: 45, damping: 20 });
  const y = useSpring(mouseY, { stiffness: 45, damping: 20 });

  /* ---------- scroll ---------- */
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end start"],
  });
  const imgScrollY = useTransform(scrollYProgress, [0, 1], ["0%", "9%"]);
  const cardScrollY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  /* ---------- 3D tilt of the whole banner (mouse + scroll) ---------- */
  const bannerRotY = useTransform(sx, [-0.5, 0.5], [-4, 4]);
  const bannerRotX = useTransform([sy, scrollYProgress], ([m, s]) => m * -4 + s * 8);

  /* ---------- card depth ---------- */
  const cardRotY = useTransform(sx, [-0.5, 0.5], [-6, 6]);
  const cardRotX = useTransform(sy, [-0.5, 0.5], [6, -6]);
  const cardShiftX = useTransform(sx, [-0.5, 0.5], [8, -8]);
  const cardShiftY = useTransform(sy, [-0.5, 0.5], [6, -6]);

  /* ---------- cursor glare on image ---------- */
  const gx = useTransform(sx, [-0.5, 0.5], ["0%", "100%"]);
  const gy = useTransform(sy, [-0.5, 0.5], ["0%", "100%"]);
  const glare = useMotionTemplate`radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.35), transparent 50%)`;

  /* ---------- button magnetic (your values) ---------- */
  const buttonX = useMotionValue(0);
  const buttonY = useMotionValue(0);
  const springButtonX = useSpring(buttonX, { stiffness: 180, damping: 15 });
  const springButtonY = useSpring(buttonY, { stiffness: 180, damping: 15 });

  const handleMouseMove = (e) => {
    // Disable parallax on touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const fx = (e.clientX - rect.left) / rect.width - 0.5;
    const fy = (e.clientY - rect.top) / rect.height - 0.5;

    nx.set(fx);
    ny.set(fy);
    mouseX.set(fx * -15);
    mouseY.set(fy * -10);
    hover.set(1);
  };

  const handleMouseLeave = () => {
    nx.set(0);
    ny.set(0);
    mouseX.set(0);
    mouseY.set(0);
    hover.set(0);
  };

  const handleButtonMove = (e) => {
    if (window.matchMedia("(hover: none)").matches) return;

    const rect = e.currentTarget.getBoundingClientRect();

    buttonX.set((e.clientX - rect.left - rect.width / 2) * 0.15);
    buttonY.set((e.clientY - rect.top - rect.height / 2) * 0.15);
  };

  const handleButtonLeave = () => {
    buttonX.set(0);
    buttonY.set(0);
  };

  const headingVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.16,
        delayChildren: 1.0,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 45,
      rotateX: -35,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="w-full bg-[#F8F7F3] px-3 sm:px-4 lg:px-6 pt-3 pb-3">
      <div className="max-w-[1400px] mx-auto">

        {/* PERSPECTIVE WRAPPER (receives mouse, never rotates itself) */}
        <div
          ref={wrapRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ perspective: 1600 }}
        >
          {/* 3D CAMERA ENTRANCE */}
          <motion.div
            initial={{ opacity: 0, rotateX: 22, y: 60, scale: 0.93 }}
            animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "50% 100%" }}
          >
            {/* MOUSE + SCROLL TILT */}
            <motion.div
              style={{
                rotateX: bannerRotX,
                rotateY: bannerRotY,
                transformOrigin: "50% 50%",
              }}
            >

              {/* HERO BANNER */}
              <div className="relative w-full h-[430px] sm:h-[440px] md:h-[500px] lg:h-[560px] overflow-hidden rounded-md">

                {/* BACKGROUND IMAGE (scroll parallax wrapper) */}
                <motion.div
                  style={{ y: imgScrollY }}
                  className="absolute inset-x-0 -top-[12%] h-[124%]"
                >
                  {/* focus pull: blur to sharp + dolly in */}
                  <motion.div
                    initial={{ filter: "blur(16px)", scale: 1.18 }}
                    animate={{ filter: "blur(0px)", scale: 1 }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <motion.img
                      src={heroImage}
                      alt="Modern architectural house"
                      initial={{ opacity: 0 }}
                      animate={{
                        scale: [1.08, 1.03, 1.06, 1.03],
                        opacity: 1,
                      }}
                      transition={{
                        scale: {
                          duration: 25,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                        opacity: {
                          duration: 1.2,
                        },
                      }}
                      style={{
                        x,
                        y,
                      }}
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                  </motion.div>
                </motion.div>

                {/* IMAGE OVERLAY */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
                  className="absolute inset-0 bg-black/10"
                />

                {/* CURSOR GLARE */}
                <motion.div
                  aria-hidden="true"
                  style={{ opacity: hoverSpring, backgroundImage: glare }}
                  className="pointer-events-none absolute inset-0 z-[3] mix-blend-soft-light"
                />

                {/* CINEMATIC LIGHT SWEEP */}
                <motion.div
                  initial={{ x: "-120%", opacity: 0 }}
                  animate={{
                    x: ["-120%", "220%"],
                    opacity: [0, 0.35, 0],
                  }}
                  transition={{
                    duration: 2.2,
                    delay: 0.9,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-y-0 w-[35%] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] pointer-events-none"
                />

                {/* CONTENT WRAPPER: centers the card so Framer transforms never fight Tailwind's translate */}
                <div className="absolute inset-0 z-10 flex items-center px-3 sm:px-0 pointer-events-none">

                  {/* CONTENT CARD: 3D hinge unfold + scroll drift */}
                  <motion.div
                    initial={{ opacity: 0, rotateY: -75, x: -40 }}
                    animate={{ opacity: 1, rotateY: 0, x: 0 }}
                    transition={{
                      duration: 1.2,
                      delay: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{
                      y: cardScrollY,
                      transformPerspective: 1200,
                      transformOrigin: "left center",
                    }}
                    className="pointer-events-auto w-full sm:w-[55%] md:w-[48%] lg:w-[43%] sm:ml-7 lg:ml-[4%] max-w-[520px]"
                  >
                    {/* MOUSE DEPTH LAYER */}
                    <motion.div
                      style={{
                        rotateX: cardRotX,
                        rotateY: cardRotY,
                        x: cardShiftX,
                        y: cardShiftY,
                        transformPerspective: 1000,
                      }}
                      className="bg-[#F8F7F3] rounded-md px-5 py-6 sm:px-7 sm:py-8 md:px-9 md:py-9 lg:px-10 lg:py-10 shadow-[0_25px_80px_rgba(0,0,0,0.15)]"
                    >

                      {/* SMALL HEADING */}
                      <motion.p
                        initial={{
                          opacity: 0,
                          x: -20,
                          letterSpacing: "7px",
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          letterSpacing: "1.5px",
                        }}
                        transition={{
                          delay: 1.2,
                          duration: 0.8,
                        }}
                        className="text-[#7771D5] text-[10px] sm:text-[13px] font-semibold uppercase tracking-[1.5px] mb-3"
                      >
                        The Owner's Advantage
                      </motion.p>

                      {/* MAIN HEADING */}
                      <motion.h1
                        variants={headingVariants}
                        initial="hidden"
                        animate="visible"
                        className="font-['Georgia',serif] text-[#303030] text-[32px] min-[380px]:text-[36px] sm:text-[38px] md:text-[44px] lg:text-[48px] leading-[1.05] font-normal tracking-[-1px]"
                        style={{ perspective: 700 }}
                      >
                        <span className="block overflow-hidden py-[2px]">
                          <motion.span
                            variants={wordVariants}
                            className="inline-block"
                          >
                            Build your
                          </motion.span>
                        </span>

                        <span className="block overflow-hidden py-[2px]">
                          <motion.span
                            variants={wordVariants}
                            className="inline-block"
                          >
                            home. Keep
                          </motion.span>
                        </span>

                        <span className="block overflow-hidden py-[2px]">
                          <motion.span
                            variants={wordVariants}
                            className="inline-block"
                          >
                            your vision.
                          </motion.span>
                        </span>
                      </motion.h1>

                      {/* DESCRIPTION */}
                      <motion.p
                        initial={{
                          opacity: 0,
                          y: 20,
                          filter: "blur(6px)",
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          filter: "blur(0px)",
                        }}
                        transition={{
                          delay: 1.8,
                          duration: 0.8,
                          ease: "easeOut",
                        }}
                        className="text-[#666666] text-[12px] sm:text-[15px] leading-[1.7] mt-3 sm:mt-4 max-w-[340px]"
                      >
                        Bring your plans, people and decisions together. Owner
                        Builder helps you coordinate the details, so you can move
                        through your build with clarity.
                      </motion.p>

                      {/* CTA BUTTON */}
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: 2.1,
                          duration: 0.8,
                        }}
                        className="mt-4 sm:mt-5"
                      >
                        <motion.div
                          onMouseMove={handleButtonMove}
                          onMouseLeave={handleButtonLeave}
                          style={{
                            x: springButtonX,
                            y: springButtonY,
                          }}
                          className="inline-block"
                        >
                          <Link
                            to="/contact"
                            className="relative overflow-hidden group/btn text-[11px] sm:text-[15px] font-medium inline-flex items-center gap-2 bg-[#20244F] text-white px-4 py-2.5 rounded-sm hover:bg-[#7771D5] transition-colors duration-300 shadow-lg shadow-[#20244F]/20"
                          >

                            {/* SHINE */}
                            <span className="pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover/btn:translate-x-[450%]" />

                            <span className="relative z-10">
                              Discuss your project
                            </span>

                            <motion.span
                              animate={{
                                x: [0, 4, 0],
                                y: [0, -3, 0],
                              }}
                              transition={{
                                duration: 1.8,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                              className="relative z-10"
                            >
                              ↗
                            </motion.span>

                          </Link>
                        </motion.div>
                      </motion.div>

                    </motion.div>
                  </motion.div>
                </div>

                {/* BOTTOM WHITE STRIP */}
                <motion.div
                  initial={{
                    opacity: 0,
                    scaleX: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    scaleX: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: 1.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute z-10 overflow-hidden bottom-1 sm:bottom-5 left-3 right-3 sm:left-6 sm:right-6 min-h-[30px] bg-white/95 rounded-full origin-left flex items-center px-3 py-2 shadow-md"
                >

                  {/* MOVING LIGHT */}
                  <motion.span
                    aria-hidden="true"
                    animate={{
                      x: ["-100%", "500%"],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-white to-transparent"
                  />

                  <span className="relative text-[#555555] text-[10px] sm:text-[15px] leading-tight">
                    A little more planning for a confident build
                  </span>

                </motion.div>

              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;