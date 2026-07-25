const items = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "JavaScript",
  "Node.js",
  "HTML5",
  "CSS3",
  "Vercel",
  "Git & GitHub",
  "Automation",
  "UI / UX",
];

export default function Marquee() {
  return (
    <div className="border-y border-white/10 bg-white/[0.02] py-5">
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee-track whitespace-nowrap">
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className="mx-6 font-display text-lg font-semibold text-slate-500 transition-colors hover:text-white"
            >
              {item}
              <span className="ml-6 text-indigo-500/50">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
