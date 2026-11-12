import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import planningImage from "../../assets/images/Architectural-photography.png";
import { SplitText, TiltCard, Magnetic } from "../common/Animations";

const corners = [
  { pos: "-top-2 -left-2", origin: "top left", border: "border-t-2 border-l-2" },
  { pos: "-top-2 -right-2", origin: "top right", border: "border-t-2 border-r-2" },
  { pos: "-bottom-2 -left-2", origin: "bottom left", border: "border-b-2 border-l-2" },
  { pos: "-bottom-2 -right-2", origin: "bottom right", border: "border-b-2 border-r-2" },
];

const PreparationSection = () => {
  const imageRef = useRef(null);

  /* scroll parallax for the image */
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section className="w-full bg-[#F8F7F3] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 py-12 sm:py-14 md:py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10 lg:gap-14">

          {/* IMAGE SIDE */}
          <div ref={imageRef} className="relative w-full">

            {/* floating glow orb behind image */}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-[#7771D5]/25 blur-3xl"
              animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            <TiltCard max={6} className="w-full">
              <div className="relative w-full">

                {/* corner brackets draw in */}
                {corners.map((c, i) => (
                  <motion.span
                    key={i}
                    aria-hidden="true"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.0 + i * 0.12, ease: "easeOut" }}
                    style={{ transformOrigin: c.origin }}
                    className={`pointer-events-none absolute z-20 h-5 w-5 border-[#7771D5] ${c.pos} ${c.border}`}
                  />
                ))}

                {/* IMAGE: wipe reveal + zoom out */}
                <motion.div
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: [0.77, 0, 0.175, 1] }}
                  className="relative w-full overflow-hidden rounded-sm"
                >
                  <motion.div
                    initial={{ scale: 1.35 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.6, ease: "easeOut" }}
                  >
                    <motion.img
                      src={planningImage}
                      alt="Architectural planning and preparation"
                      style={{ y: imgY, scale: 1.15 }}
                      className="w-full h-[220px] sm:h-[280px] md:h-[320px] object-cover rounded-sm"
                    />
                  </motion.div>

                  {/* blueprint lines drawn over the photo, then fade out */}
                  <motion.svg
                    aria-hidden="true"
                    viewBox="0 0 400 300"
                    preserveAspectRatio="none"
                    className="pointer-events-none absolute inset-0 h-full w-full"
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: [1, 1, 0] }}
                    viewport={{ once: true }}
                    transition={{ duration: 3.2, delay: 0.8, times: [0, 0.7, 1] }}
                  >
                    {[
                      "M30 30 H370 V270 H30 Z",
                      "M30 30 L370 270",
                      "M370 30 L30 270",
                      "M200 30 V270",
                      "M30 150 H370",
                    ].map((d, i) => (
                      <motion.path
                        key={d}
                        d={d}
                        fill="none"
                        stroke="rgba(255,255,255,0.75)"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                        vectorEffect="non-scaling-stroke"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.9 + i * 0.2, ease: "easeInOut" }}
                      />
                    ))}
                  </motion.svg>

                  {/* light sweep after reveal */}
                  <motion.div
                    aria-hidden="true"
                    initial={{ x: "-120%" }}
                    whileInView={{ x: "320%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 1.3, ease: "easeInOut" }}
                    className="pointer-events-none absolute inset-y-0 left-0 w-1/4 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent"
                  />
                </motion.div>
              </div>
            </TiltCard>
          </div>

          {/* TEXT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-[480px]"
          >
            <motion.p
              initial={{ opacity: 0, letterSpacing: "6px" }}
              whileInView={{ opacity: 1, letterSpacing: "1.5px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="text-[#7771D5] text-[10px] sm:text-[14px] font-semibold uppercase tracking-[1.5px] mb-3"
            >
              The owner’s field notes
            </motion.p>

            <h2 className="font-['Georgia',serif] text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] font-normal leading-[1.15] text-[#20244F]">
              <SplitText text="A little preparation goes a long way." delay={0.3} />
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="text-[#666666] text-[12px] sm:text-[15px] leading-[1.7] mt-4"
            >
              Explore proposed guides on planning, comparing bids and organizing project documents. Start with the practical previews in our resource library.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5"
            >
              <Magnetic strength={0.3}>
                <Link
                  to="/services"
                  className="group relative overflow-hidden text-[11px] sm:text-[13px] font-medium inline-flex items-center gap-3 border border-[#DAD8D2] px-4 py-2.5 text-[#20244F] hover:bg-[#20244F] hover:text-white transition-all duration-300"
                >
                  <span className="pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-[#7771D5]/25 transition-transform duration-700 group-hover:translate-x-[450%]" />
                  <span className="relative">Visit resources</span>
                  <span className="relative text-sm inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </Link>
              </Magnetic>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="relative mt-5 max-w-[390px] pl-3"
            >
              {/* line that grows down beside the caption */}
              <motion.span
                aria-hidden="true"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
                className="absolute left-0 top-0 h-full w-[2px] origin-top bg-[#7771D5]/60"
              />
              <p className="text-[#777777] text-[10px] sm:text-[13px] leading-[1.6]">
                Editorial previews are proposed content. Final guides and downloads await approval.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PreparationSection;