const skillGroups = [
  {
    title: "Front-End",
    icon: "🎨",
    skills: ["React", "TypeScript", "Next.js", "JavaScript (ES6+)", "HTML5 & CSS3"],
  },
  {
    title: "Styling & UI",
    icon: "✨",
    skills: ["Tailwind CSS", "Responsive Design", "Framer-style Motion", "UI / UX"],
  },
  {
    title: "Tools & Deploy",
    icon: "🛠️",
    skills: ["Git & GitHub", "Vercel", "Vite", "REST APIs", "Automation"],
  },
];

const bars = [
  { label: "Front-End Development", value: 92 },
  { label: "UI / UX Design", value: 85 },
  { label: "React & TypeScript", value: 88 },
  { label: "Automation & Deployment", value: 80 },
];

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="reveal text-center">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
          My Toolkit
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
          Skills that ship results
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          A modern stack for building fast, scalable, and beautiful web
          applications.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {skillGroups.map((g, i) => (
          <div
            key={g.title}
            className="reveal rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-indigo-400/40 hover:shadow-2xl hover:shadow-indigo-500/10"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 text-2xl">
              {g.icon}
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold text-white">
              {g.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {g.skills.map((s) => (
                <li key={s} className="flex items-center gap-2.5 text-slate-300">
                  <svg
                    className="h-4 w-4 text-indigo-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* proficiency bars */}
      <div className="reveal mt-12 grid gap-x-12 gap-y-7 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:grid-cols-2">
        {bars.map((b) => (
          <div key={b.label}>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-medium text-slate-200">{b.label}</span>
              <span className="text-indigo-400">{b.value}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                style={{ width: `${b.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
