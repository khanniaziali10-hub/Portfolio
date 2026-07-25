const highlights = [
  {
    icon: "🎓",
    title: "Computer Science",
    desc: "Studying at COMSATS University Islamabad, Vehari Campus — graduating 2026.",
  },
  {
    icon: "🚀",
    title: "Shipped Products",
    desc: "Built and deployed Sumavia.online, a live automated news channel on Vercel.",
  },
  {
    icon: "🎯",
    title: "Detail Obsessed",
    desc: "I sweat the small stuff — smooth animations, clean layouts, fast load times.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div className="reveal">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
            About Me
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
            Turning ideas into
            <br />
            <span className="text-gradient">premium web experiences</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-400">
            I'm Muhammad Ali Asad Khan, a passionate web developer focused on
            crafting clean, high-performing, and visually striking websites. I
            love blending thoughtful design with solid engineering to deliver
            interfaces that leave a strong first impression.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-400">
            From front-end interfaces to automation-driven products, I enjoy the
            full journey of building something real — and shipping it to the
            world.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Problem Solver", "Fast Learner", "Team Player", "Self-Starter"].map(
              (t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300"
                >
                  {t}
                </span>
              )
            )}
          </div>
        </div>

        <div className="space-y-5">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="reveal group flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-indigo-400/40 hover:bg-white/[0.06]"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 text-2xl">
                {h.icon}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {h.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">
                  {h.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
