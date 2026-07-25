const socials = [
  {
    label: "GitHub",
    href: "https://github.com/khanniaziali10-hub",
    icon: (
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.34 9.34 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-ali-asad-khan-09b49441a/",
    icon: (
      <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3V9Zm6 0h3.8v1.71h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.7c0-1.36-.03-3.11-1.95-3.11-1.95 0-2.25 1.49-2.25 3.02V21H9V9Z" />
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/923201371811",
    icon: (
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.9 9.9 0 0 0 12.04 2Zm5.8 14.2c-.24.68-1.42 1.32-1.96 1.36-.5.06-1.14.08-1.84-.12-.42-.14-.96-.32-1.66-.62-2.92-1.26-4.82-4.2-4.96-4.4-.14-.2-1.18-1.58-1.18-3s.74-2.12 1-2.42c.26-.28.56-.36.76-.36l.54.02c.18 0 .42-.06.66.5.24.58.82 2 .9 2.14.06.14.1.3.02.5-.34.68-.7.66-.34 1.28.36.62.94 1.5 1.6 2.02.72.66 1.32.86 1.52.96.2.1.32.08.44-.06.14-.16.5-.58.64-.78.14-.2.28-.16.48-.1.2.08 1.28.6 1.5.72.22.1.36.16.42.24.06.1.06.54-.18 1.22Z" />
    ),
  },
];

const stats = [
  { value: "20+", label: "Projects Built" },
  { value: "3+", label: "Years Coding" },
  { value: "1", label: "Live Product" },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      {/* animated background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-blob-1 absolute -left-20 top-10 h-96 w-96 rounded-full bg-indigo-600/25 blur-[120px]" />
        <div className="animate-blob-2 absolute right-0 top-40 h-[28rem] w-[28rem] rounded-full bg-violet-600/20 blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#05060a_75%)]" />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff12 1px, transparent 1px), linear-gradient(to bottom, #ffffff12 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(circle at 50% 30%, black, transparent 70%)",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 md:grid-cols-[1.1fr_0.9fr] md:pb-28">
        {/* left */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for freelance & internships
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Muhammad Ali
            <br />
            Asad <span className="text-gradient">Khan</span>
          </h1>

          <p className="mt-3 font-display text-lg font-medium text-indigo-300">
            Web Developer &amp; Front-End Engineer
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400">
            I design and build fast, modern web experiences that feel premium
            and convert. Computer Science student at COMSATS University
            Islamabad (Vehari Campus), and the creator of{" "}
            <a
              href="https://sumavia.online"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-white underline decoration-indigo-400 underline-offset-4 hover:text-indigo-300"
            >
              Sumavia.online
            </a>{" "}
            — a live automated news channel.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-indigo-100"
            >
              View My Work
              <svg
                className="h-4 w-4 transition group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              Get in Touch
            </a>
          </div>

          {/* socials */}
          <div className="mt-8 flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-1 hover:border-indigo-400/50 hover:text-white"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  {s.icon}
                </svg>
              </a>
            ))}
          </div>

          {/* stats */}
          <div className="mt-10 grid max-w-md grid-cols-3 gap-4">
            {stats.map((st) => (
              <div key={st.label}>
                <div className="font-display text-2xl font-bold text-white sm:text-3xl">
                  {st.value}
                </div>
                <div className="mt-1 text-xs text-slate-400">{st.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* right - portrait */}
        <div className="relative mx-auto w-full max-w-sm animate-fade-up [animation-delay:150ms]">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-indigo-500/30 to-violet-500/30 blur-2xl" />
          <div className="animate-spin-slow absolute -right-6 -top-6 h-24 w-24 rounded-full border border-dashed border-indigo-400/40" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 backdrop-blur">
            <img
              src="/images/portrait.jpg"
              alt="Muhammad Ali Asad Khan"
              className="h-full w-full rounded-[1.6rem] object-cover"
            />
            <div className="pointer-events-none absolute inset-2 rounded-[1.6rem] ring-1 ring-inset ring-white/10" />
          </div>

          {/* floating badge */}
          <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0b0d16]/90 px-4 py-3 shadow-xl backdrop-blur">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-lg">
              ⚡
            </span>
            <div>
              <div className="text-sm font-semibold text-white">Clean Code</div>
              <div className="text-xs text-slate-400">Pixel-perfect UI</div>
            </div>
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div className="flex justify-center pb-6">
        <a
          href="#about"
          className="animate-bounce-slow flex flex-col items-center gap-2 text-xs text-slate-500"
        >
          Scroll
          <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1">
            <span className="h-2 w-1 rounded-full bg-indigo-400" />
          </span>
        </a>
      </div>
    </section>
  );
}
