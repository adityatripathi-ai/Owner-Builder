import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { Link } from "react-router-dom";

import heroImage from "../../../assets/images/Architectural-plan-setting-2.png";
import phoneImage from "../../../assets/images/Unchanged-application-screen.png";
import { SplitText, Magnetic } from "../../common/Animations";

const ServicesHero = () => {
  /* ---------- mouse tilt + glare ---------- */
  const nx = useMotionValue(0);
  const ny = useMotionValue(0);
  const hover = useMotionValue(0);
  const sx = useSpring(nx, { stiffness: 90, damping: 18 });
  const sy = useSpring(ny, { stiffness: 90, damping: 18 });
  const hoverSpring = useSpring(hover, { stiffness: 80, damping: 20 });

  const tiltY = useTransform(sx, [-0.5, 0.5], [-10, 10]);
  const tiltX = useTransform(sy, [-0.5, 0.5], [8, -8]);
  const phoneShiftX = useTransform(sx, [-0.5, 0.5], [10, -10]);
  const phoneShiftY = useTransform(sy, [-0.5, 0.5], [6, -6]);

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

  return (
    <section className="w-full overflow-hidden bg-[#F4F2ED]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 pt-5 pb-12 sm:pb-16 lg:pb-20">

        {/* BREADCRUMB */}
        <motion.nav
          aria-label="Breadcrumb"
          initial={{ opacity: 0, letterSpacing: "6px" }}
          animate={{ opacity: 1, letterSpacing: "1.5px" }}
          transition={{ duration: 0.9 }}
          className="text-[10px] sm:text-[13px] font-semibold uppercase tracking-[1.5px] text-[#20244F]/70"
        >
          <Link to="/" className="hover:underline">Home</Link>
          <span className="mx-1.5" aria-hidden="true">/</span>
          <span aria-current="page">Services &amp; Offerings</span>
        </motion.nav>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="
              font-['Georgia',serif]
              text-[#292929]
              text-[32px]
              min-[380px]:text-[36px]
              sm:text-[38px]
              md:text-[44px]
              lg:text-[48px]
              leading-[1.05]
              tracking-[-1px]
              font-normal
              max-w-[520px]
            ">
              <SplitText
                text="Builder Owner software connects you to every stage and decision of your home"
                delay={0.2}
                stagger={0.05}
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 1.0, duration: 0.7 }}
              className="text-[#777777] text-[12px] sm:text-[15px] leading-[1.7] mt-6 max-w-[500px]"
            >
              Simplify the way you coordinate your build. Owner Builder brings
              project information, costs, people and paperwork into a connected
              set of practical tools.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6"
            >
              <Magnetic strength={0.3}>
                <Link
                  to="/contact"
                  className="group relative overflow-hidden inline-flex items-center gap-3 bg-[#20244F] text-white text-[11px] sm:text-[12px] font-medium px-5 py-3 rounded-[3px] hover:bg-[#7771D5] transition-colors duration-300"
                >
                  <span className="pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/25 transition-transform duration-700 group-hover:translate-x-[450%]" />
                  <span className="relative">Find your starting point</span>
                  <span
                    aria-hidden="true"
                    className="relative inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    ↗
                  </span>
                </Link>
              </Magnetic>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <div
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{ perspective: 1400 }}
            className="relative w-full"
          >
            {/* floor shadow that breathes */}
            <motion.div
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 0.4,
                scaleX: [1, 0.88, 1],
              }}
              transition={{
                opacity: { delay: 1, duration: 1 },
                scaleX: { duration: 7, repeat: Infinity, ease: "easeInOut" },
              }}
              className="pointer-events-none absolute -bottom-3 left-[6%] right-[6%] h-4 rounded-full bg-[#20244F] blur-xl"
            />

            {/* 3D ENTRANCE (hinged on the left edge) */}
            <motion.div
              initial={{ opacity: 0, rotateY: -32, rotateX: 8, scale: 0.94 }}
              animate={{ opacity: 1, rotateY: 0, rotateX: 0, scale: 1 }}
              transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "left center", transformStyle: "preserve-3d" }}
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
                    className="relative w-full aspect-[15/14]"
                  >
                    {/* BACK FRAME 2 (deepest, tinted) */}
                    <motion.div
                      aria-hidden="true"
                      initial={{ opacity: 0, x: 0, y: 0 }}
                      animate={{ opacity: 1, x: -24, y: 24 }}
                      transition={{ delay: 0.9, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      style={{ z: -70 }}
                      className="pointer-events-none absolute inset-0 rounded-[10px] bg-[#E9E6DF]"
                    />

                    {/* BACK FRAME 1 (outline) */}
                    <motion.div
                      aria-hidden="true"
                      initial={{ opacity: 0, x: 0, y: 0 }}
                      animate={{ opacity: 1, x: -12, y: 12 }}
                      transition={{ delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      style={{ z: -35 }}
                      className="pointer-events-none absolute inset-0 rounded-[10px] border border-[#7771D5]/50"
                    />

                    {/* THE PHOTO (always one whole piece) */}
                    <div className="absolute inset-0 overflow-hidden rounded-[10px] shadow-[0_30px_60px_-30px_rgba(32,36,79,0.5)]">
                      <img
                        src={heroImage}
                        alt="Building plans and workspace"
                        className="absolute inset-0 w-full h-full object-cover"
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
                        animate={{ x: "320%" }}
                        transition={{ duration: 1.4, delay: 1.4, ease: "easeInOut" }}
                        className="pointer-events-none absolute inset-y-0 left-0 w-1/4 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent"
                      />
                    </div>

                    {/* PHONE (pops out in front on its own depth) */}
                    <motion.div
                      style={{
                        x: phoneShiftX,
                        y: phoneShiftY,
                        z: 60,
                        transformStyle: "preserve-3d",
                      }}
                      className="pointer-events-none absolute inset-0"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 40, rotateX: -35, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                        transition={{ delay: 1.0, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        style={{ transformPerspective: 900 }}
                        className="h-full w-full"
                      >
                        {/* endless float + sway */}
                        <motion.div
                          animate={{
                            y: [0, -12, 0],
                            rotateZ: [0, -1, 0, 1, 0],
                          }}
                          transition={{
                            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                            rotateZ: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                          }}
                          className="flex h-full w-full items-center justify-center"
                        >
                          <img
                            src={phoneImage}
                            alt="Owner Builder mobile app showing projects"
                            className="h-[90%] w-auto max-w-none object-contain drop-shadow-2xl"
                          />
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

export default ServicesHero;