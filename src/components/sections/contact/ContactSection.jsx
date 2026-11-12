
import { useState } from "react";
import { motion } from "framer-motion";
import aboutImage from "../../../assets/images/Architectural-photography-3.png";

const stages = [
  "Just exploring",
  "Planning and budgeting",
  "Ready to start building",
  "Already on site",
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  stage: "",
  location: "",
  message: "",
  consent: false,
};

const inputClass =
  "mt-1.5 w-full rounded-[3px] border border-[#dcd9d0] bg-white px-3 py-2.5 text-[12px] text-[#1d2056] placeholder:text-[#1d2056]/40 focus:border-[#1d2056] focus:outline-none focus:ring-2 focus:ring-[#1d2056]/20";

const labelClass =
  "block text-[11px] sm:text-[12px] font-medium text-[#1d2056]";

function Field({ label, htmlFor, children }) {
  return (
    <div>
      <label htmlFor={htmlFor} className={labelClass}>
        {label}
      </label>
      {children}
    </div>
  );
}

const icon = "h-3.5 w-3.5";

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className={icon}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    aria-hidden="true"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className={icon}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    aria-hidden="true"
  >
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);

const SendIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className={icon}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden="true"
  >
    <path d="M21 3 3 10.5l7 2.5 2.5 7L21 3Z" />
  </svg>
);

const contactItems = [
  { icon: <MailIcon />, label: "Email", value: "Email to be confirmed" },
  { icon: <PhoneIcon />, label: "Phone", value: "Phone to be confirmed" },
];

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const update = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({
      ...f,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: yahan apni API call lagao
    console.log(form);
    setSent(true);
    setForm(initialForm);
  };

  return (
    <section className="bg-[#1d1f6b] py-14 md:py-20">
      <div className="mx-auto grid max-w-[1280px] items-start gap-10 px-6 md:px-12 lg:grid-cols-[2.2fr_1fr] lg:gap-14">

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-md bg-[#f4f2ed] p-6 md:p-8"
        >
          <h2 className="font-serif text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] font-normal leading-[1.15] tracking-[-1px] text-[#1d2056]">
            Tell us about your project.
          </h2>

          <p className="mt-1.5 text-[10px] sm:text-[11px] leading-[1.6] text-[#1d2056]/60">
            Fields marked * are required. Share the details below and we’ll follow up.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-3.5">
            <Field label="Full name *" htmlFor="name">
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={update}
                placeholder="Your full name"
                className={inputClass}
              />
            </Field>

            <div className="grid gap-3.5 sm:grid-cols-2">
              <Field label="Email address *" htmlFor="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update}
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </Field>

              <Field label="Phone number (optional)" htmlFor="phone">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={update}
                  placeholder="Include country code"
                  className={inputClass}
                />
              </Field>
            </div>

            <Field label="Where are you in your journey? *" htmlFor="stage">
              <select
                id="stage"
                name="stage"
                required
                value={form.stage}
                onChange={update}
                className={inputClass}
              >
                <option value="" disabled>
                  Select your project stage
                </option>

                {stages.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Project location (optional)" htmlFor="location">
              <input
                id="location"
                name="location"
                value={form.location}
                onChange={update}
                placeholder="City / region"
                className={inputClass}
              />
            </Field>

            <Field label="Message / requirements *" htmlFor="message">
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={update}
                placeholder="Tell us about your build, the decisions you need to make and where you’d like help."
                className={`${inputClass} resize-y`}
              />
            </Field>

            <label className="flex items-start gap-2 pt-1 text-[10px] sm:text-[11px] leading-[1.6] text-[#1d2056]/70">
              <input
                type="checkbox"
                name="consent"
                required
                checked={form.consent}
                onChange={update}
                className="mt-px h-3 w-3 accent-[#1d2056]"
              />

              <span>
                I agree to be contacted about this inquiry and accept the{" "}
                <a href="/privacy" className="underline">
                  Privacy Notice
                </a>.
              </span>
            </label>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-[3px] bg-[#1d1f6b] px-4 py-2.5 text-[11px] sm:text-[12px] font-medium text-white transition hover:bg-[#2a2d8f] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1d2056] focus-visible:ring-offset-2"
            >
              <SendIcon /> Send inquiry
            </button>

            <p
              role="status"
              className="text-[10px] sm:text-[11px] leading-[1.6] text-[#1d2056]/55"
            >
              {sent
                ? "Thanks, your inquiry has been sent. We’ll reply by email."
                : "Please don’t include payment or sensitive personal details."}
            </p>
          </form>
        </motion.div>

        {/* Info panel */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-white"
        >
          <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[1.5px] text-white/60">
            Talk to our team
          </p>

          <h2 className="mt-3 max-w-[300px] font-serif text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] font-normal leading-[1.15] tracking-[-1px]">
            Let’s make the next step clearer.
          </h2>

          <p className="mt-3 max-w-[300px] text-[12px] sm:text-[13px] leading-[1.7] text-white/75">
            Use the inquiry form for questions about the platform and how it can
            support your building process.
          </p>

          <ul className="mt-5 space-y-3">
            {contactItems.map((item, index) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-[3px] border border-white/25 text-white/85">
                  {item.icon}
                </span>

                <span>
                  <span className="block text-[10px] sm:text-[11px] leading-[1.6] text-white/55">
                    {item.label}
                  </span>

                  <span className="block text-[11px] sm:text-[12px] leading-[1.6]">
                    {item.value}
                  </span>
                </span>
              </motion.li>
            ))}
          </ul>

          <p className="mt-3 max-w-[300px] text-[10px] sm:text-[11px] leading-[1.6] text-white/45">
            Business contatct details are awaiting confirmation before publication.
          </p>

          <motion.img
            src={aboutImage}
            alt="Timber-framed home interior with large glass doors"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 aspect-square w-full rounded-md object-cover"
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-2 max-w-[300px] text-[11px] sm:text-[12px] leading-[1.7] text-white/40"
          >
            A short description of your project, its current stage and the part you're finding hardest to organize is a useful place to start,
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
}
