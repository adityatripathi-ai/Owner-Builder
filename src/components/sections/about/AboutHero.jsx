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

import aboutImage from "../../../assets/images/Residential-material-and-light.png";
import { SplitText, Magnetic } from "../../common/Animations";

const AboutHero = () => {
  const imageRef = useRef(null);

  /* ---------- mouse (-0.5 to 0.5) ---------- */
  const nx = useMotionValue(0);
  const ny = useMotionValue(0);
  const hover = useMotionValue(0);
  const sx = useSpring(nx, { stiffness: 90, damping: 18 });
  const sy = useSpring(ny, { stiffness: 90, damping: 18 });
  const hoverSpring = useSpring(hover, { stiffness: 80, damping: 20 });

  const tiltY = useTransform(sx, [-0.5, 0.5], [-12, 12]);
  const tiltX = useTransform(sy, [-0.5, 0.5], [10, -10]);
  const cardX = useTransform(sx, [-0.5, 0.5], [8, -8]);
  const cardY = useTransform(sy, [-0.5, 0.5], [5, -5]);

  /* ---------- cursor glare on image ---------- */
  const gx = useTransform(sx, [-0.5, 0.5], ["0%", "100%"]);
  const gy = useTransform(sy, [-0.5, 0.5], ["0%", "100%"]);
  const glare = useMotionTemplate`radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.35), transparent 55%)`;

  /* ---------- scroll parallax ---------- */
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

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

  return (
    <section className="w-full overflow-hidden bg-[#F5F3EF] px-5 sm:px-7 lg:px-10 pt-8 sm:pt-10 pb-10 sm:pb-14">
      <div className="max-w-[1200px] mx-auto">

        {/* BREADCRUMB */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "6px" }}
          animate={{ opacity: 1, letterSpacing: "1.5px" }}
          transition={{ duration: 0.9 }}
          className="text-[#7771D5] text-[10px] sm:text-[14px] font-semibold uppercase tracking-[1.5px] mb-8 sm:mb-10 lg:mb-12"
        >
          HOME / ABOUT OWNER BUILDER
        </motion.p>

        {/* HERO CONTENT */}
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-8 min-[480px]:gap-5 lg:gap-14 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[480px]"
          >
            {/* HEADING */}
            <h1
              className="
                font-['Georgia',serif]
                text-[#303030]
                text-[32px]
                min-[380px]:text-[36px]
                min-[480px]:text-[27px]
                sm:text-[38px]
                md:text-[44px]
                lg:text-[48px]
                leading-[1.05]
                tracking-[-1px]
                font-normal
              "
            >
              <SplitText text="Behind every" delay={0.3} />
              <br />
              <SplitText text="home, a better" delay={0.55} />
              <br />
              <SplitText text="way to build." delay={0.8} />
            </h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 1.1, duration: 0.7 }}
              className="mt-4 text-[#666666] text-[12px] min-[480px]:text-[11px] sm:text-[15px] leading-[1.7] max-w-[390px]"
            >
              Owner Builder exists to make the coordination of a
              house-building project easier to understand, easier
              to organize and easier to follow through.
            </motion.p>

            {/* BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4"
            >
              <Magnetic strength={0.3}>
                <Link
                  to="/services"
                  className="
                    group relative overflow-hidden
                    inline-flex items-center gap-2
                    border border-[#DAD8D2]
                    text-[#20244F]
                    font-medium
                    text-[11px] min-[480px]:text-[10px] sm:text-[13px]
                    px-3 py-2
                    rounded-[2px]
                    hover:bg-[#20244F]
                    hover:text-white
                    transition-all duration-300
                  "
                >
                  <span className="pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-[#7771D5]/25 transition-transform duration-700 group-hover:translate-x-[450%]" />
                  <span className="relative">Explore our offerings</span>
                  <span className="relative inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </Link>
              </Magnetic>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <div
            ref={imageRef}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{ perspective: 1400 }}
            className="relative w-full min-w-0 min-[480px]:max-w-[500px] min-[480px]:ml-auto"
          >
            {/* floating glow behind the scene */}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-8 -left-8 h-44 w-44 rounded-full bg-[#7771D5]/25 blur-3xl"
              animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* floor shadow that breathes with the sway */}
            <motion.div
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scaleX: [1, 0.86, 1], scaleY: [1, 1.25, 1] }}
              transition={{
                opacity: { delay: 1.2, duration: 1 },
                scaleX: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                scaleY: { duration: 7, repeat: Infinity, ease: "easeInOut" },
              }}
              className="pointer-events-none absolute -bottom-5 left-[8%] right-[8%] h-4 rounded-full bg-[#20244F]/25 blur-xl"
            />

            {/* 3D ENTRANCE (hinged on the right edge) */}
            <motion.div
              initial={{ opacity: 0, rotateY: 28, x: 25 }}
              animate={{ opacity: 1, rotateY: 0, x: 0 }}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "right center", transformStyle: "preserve-3d" }}
            >
              {/* IDLE SWAY (runs even without mouse) */}
              <motion.div
                animate={{
                  rotateY: [-3.5, 3.5, -3.5],
                  rotateX: [1.8, -1.8, 1.8],
                }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* MOUSE TILT */}
                <motion.div
                  style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
                >
                  <div
                    style={{ transformStyle: "preserve-3d" }}
                    className="relative w-full h-[260px] min-[480px]:h-[204px] sm:h-[280px] lg:h-[430px] overflow-visible"
                  >

                    {/* BACK PLATE 2 (deepest, tinted) */}
                    <motion.div
                      aria-hidden="true"
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1, z: [-70, -85, -70] }}
                      transition={{
                        opacity: { delay: 0.9, duration: 0.8 },
                        scale: { delay: 0.9, duration: 0.8 },
                        z: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                      }}
                      style={{ x: -20, y: 20 }}
                      className="pointer-events-none absolute inset-0 rounded-[2px] bg-[#E9E6DF]"
                    />

                    {/* BACK PLATE 1 (outline) */}
                    <motion.div
                      aria-hidden="true"
                      initial={{ opacity: 0, scale: 0.94 }}
                      animate={{ opacity: 1, scale: 1, z: [-35, -48, -35] }}
                      transition={{
                        opacity: { delay: 0.7, duration: 0.8 },
                        scale: { delay: 0.7, duration: 0.8 },
                        z: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                      }}
                      style={{ x: -10, y: 10 }}
                      className="pointer-events-none absolute inset-0 rounded-[2px] border border-[#7771D5]/50"
                    />

                    {/* IMAGE: wipe reveal + zoom out + scroll parallax */}
                    <motion.div
                      initial={{ clipPath: "inset(0 100% 0 0)" }}
                      animate={{ clipPath: "inset(0 0% 0 0)" }}
                      transition={{ duration: 1.1, delay: 0.3, ease: [0.77, 0, 0.175, 1] }}
                      className="relative h-full w-full overflow-hidden rounded-[2px] shadow-[0_30px_60px_-25px_rgba(32,36,79,0.5)]"
                    >
                      <motion.div
                        initial={{ scale: 1.35 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.6, delay: 0.3, ease: "easeOut" }}
                        className="h-full w-full"
                      >
                        <motion.img
                          src={aboutImage}
                          alt="Modern home interior"
                          style={{ y: imgY, scale: 1.14 }}
                          className="
                            w-full h-full
                            object-cover
                            object-center
                            rounded-[2px]
                          "
                        />
                      </motion.div>

                      {/* cursor glare */}
                      <motion.div
                        aria-hidden="true"
                        style={{ opacity: hoverSpring, backgroundImage: glare }}
                        className="pointer-events-none absolute inset-0 mix-blend-soft-light"
                      />

                      {/* light sweep after reveal */}
                      <motion.div
                        aria-hidden="true"
                        initial={{ x: "-120%" }}
                        animate={{ x: "320%" }}
                        transition={{ duration: 1.4, delay: 1.5, ease: "easeInOut" }}
                        className="pointer-events-none absolute inset-y-0 left-0 w-1/4 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent"
                      />
                    </motion.div>

                    {/* IMAGE OVERLAY CARD (pops out in front, floats forever) */}
                    <motion.div
                      style={{ x: cardX, y: cardY, z: 70, transformStyle: "preserve-3d" }}
                      className="absolute left-[4%] right-[-2%] bottom-[8px] z-10"
                    >
                      {/* entrance flip */}
                      <motion.div
                        initial={{ opacity: 0, y: 25, rotateX: -50 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        style={{ transformPerspective: 800, transformOrigin: "bottom center" }}
                      >
                        {/* endless float + sway */}
                        <motion.div
                          animate={{
                            y: [0, -10, 0],
                            rotateZ: [0, -0.8, 0, 0.8, 0],
                            rotateX: [0, 4, 0],
                          }}
                          transition={{
                            y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
                            rotateZ: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                            rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                          }}
                          style={{ transformPerspective: 800 }}
                          className="
                            relative overflow-hidden
                            bg-white
                            px-3 py-3
                            sm:px-3 sm:py-2.5
                            rounded-[3px]
                            shadow-[0_18px_40px_-12px_rgba(32,36,79,0.35)]
                          "
                        >
                          {/* accent line draws in */}
                          <motion.span
                            aria-hidden="true"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.9, delay: 1.7, ease: "easeOut" }}
                            className="absolute top-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-[#7771D5] to-[#A9A5F5]"
                          />

                          {/* soft shine passing over the card now and then */}
                          <motion.span
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-y-0 left-0 w-1/4 -skew-x-12 bg-gradient-to-r from-transparent via-[#7771D5]/15 to-transparent"
                            animate={{ x: ["-120%", "520%"] }}
                            transition={{
                              duration: 2,
                              delay: 3,
                              repeat: Infinity,
                              repeatDelay: 4,
                              ease: "easeInOut",
                            }}
                          />

                          <p className="relative text-[#7771D5] text-[10px] sm:text-[13px] font-semibold uppercase tracking-[1.5px] mb-1">
                            A SIMPLE BELIEF
                          </p>

                          <p className="relative font-['Georgia',serif] text-[#303030] text-[14px] sm:text-[15px] lg:text-[17px] leading-[1.15]">
                            Your attention belongs on the home you’re creating.
                          </p>
                        </motion.div>
                      </motion.div>
                    </motion.div>

                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;