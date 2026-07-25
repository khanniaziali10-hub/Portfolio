const projects = [
  {
    title: "Sumavia — Auto News Channel",
    tag: "Live Product",
    year: "2025",
    desc: "A fully automated news channel platform that curates, generates, and publishes news content in real time. Designed for speed, clean reading, and seamless automation. Deployed on Vercel.",
    stack: ["React", "Automation", "Vercel", "APIs"],
    live: "https://sumavia.online",
    featured: true,
    accent: "from-indigo-500/30 to-violet-600/30",
    emoji: "📰",
  },
  {
    title: "Portfolio Experience",
    tag: "Personal",
    year: "2026",
    desc: "This very portfolio — an interactive, animation-rich site built to make a strong first impression with smooth scroll reveals and a premium dark aesthetic.",
    stack: ["React", "TypeScript", "Tailwind"],
    live: "#home",
    featured: false,
    accent: "from-fuchsia-500/30 to-indigo-600/30",
    emoji: "🌌",
  },
  {
    title: "Open Source & Experiments",
    tag: "GitHub",
    year: "Ongoing",
    desc: "A collection of web experiments, UI components, and learning projects. Explore my code, contributions, and works-in-progress on GitHub.",
    stack: ["JavaScript", "React", "CSS"],
    live: "https://github.com/khanniaziali10-hub",
    featured: false,
    accent: "from-emerald-500/30 to-teal-600/30",
    emoji: "💾",
  },
];

export default function Work() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="reveal flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
            Featured Work
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
            Projects I'm proud of
          </h2>
        </div>
        <a
          href="https://github.com/khanniaziali10-hub"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold text-indigo-300 underline decoration-indigo-500/40 underline-offset-4 hover:text-white"
        >
          See all on GitHub →
        </a>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className={`reveal group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-500 hover:-translate-y-1.5 hover:border-indigo-400/40 hover:shadow-2xl hover:shadow-indigo-500/10 ${
              p.featured ? "lg:col-span-2" : ""
            }`}
          >
            <div
              className={`pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-gradient-to-br ${p.accent} opacity-60 blur-3xl transition group-hover:opacity-100`}
            />

            <div className="relative flex flex-wrap items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-2xl">
                {p.emoji}
              </span>
              <span className="rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
                {p.tag}
              </span>
              <span className="text-xs text-slate-500">{p.year}</span>
              {p.featured && (
                <span className="ml-auto inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Live now
                </span>
              )}
            </div>

            <h3 className="relative mt-6 font-display text-2xl font-bold text-white">
              {p.title}
            </h3>
            <p className="relative mt-3 max-w-2xl leading-relaxed text-slate-400">
              {p.desc}
            </p>

            <div className="relative mt-6 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-lg bg-white/5 px-3 py-1 text-xs text-slate-300"
                >
                  {s}
                </span>
              ))}
            </div>

            <a
              href={p.live}
              target={p.live.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="relative mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              <span className="border-b border-indigo-400/50 pb-0.5 transition group-hover:border-indigo-400">
                {p.live.startsWith("http") ? "Visit Project" : "Back to top"}
              </span>
              <svg
                className="h-4 w-4 transition group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
