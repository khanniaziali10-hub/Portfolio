const channels = [
  {
    label: "Email / LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-ali-asad-khan-09b49441a/",
    icon: (
      <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3V9Zm6 0h3.8v1.71h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.7c0-1.36-.03-3.11-1.95-3.11-1.95 0-2.25 1.49-2.25 3.02V21H9V9Z" />
    ),
  },
  {
    label: "WhatsApp",
    value: "+92 320 1371811",
    href: "https://wa.me/923201371811",
    icon: (
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.9 9.9 0 0 0 12.04 2Zm5.8 14.2c-.24.68-1.42 1.32-1.96 1.36-.5.06-1.14.08-1.84-.12-.42-.14-.96-.32-1.66-.62-2.92-1.26-4.82-4.2-4.96-4.4-.14-.2-1.18-1.58-1.18-3s.74-2.12 1-2.42c.26-.28.56-.36.76-.36l.54.02c.18 0 .42-.06.66.5.24.58.82 2 .9 2.14.06.14.1.3.02.5-.34.68-.7.66-.34 1.28.36.62.94 1.5 1.6 2.02.72.66 1.32.86 1.52.96.2.1.32.08.44-.06.14-.16.5-.58.64-.78.14-.2.28-.16.48-.1.2.08 1.28.6 1.5.72.22.1.36.16.42.24.06.1.06.54-.18 1.22Z" />
    ),
  },
  {
    label: "GitHub",
    value: "@khanniaziali10-hub",
    href: "https://github.com/khanniaziali10-hub",
    icon: (
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.34 9.34 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="reveal relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 text-center sm:p-14">
        <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />

        <p className="relative font-display text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
          Get In Touch
        </p>
        <h2 className="relative mt-4 font-display text-3xl font-bold text-white sm:text-5xl">
          Let's build something
          <br />
          <span className="text-gradient">great together</span>
        </h2>
        <p className="relative mx-auto mt-5 max-w-lg text-slate-400">
          Have a project in mind, a role to fill, or just want to say hi? I'm
          always open to new opportunities and collaborations.
        </p>

        <div className="relative mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/923201371811"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-indigo-100"
          >
            💬 Message on WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-ali-asad-khan-09b49441a/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5"
          >
            Connect on LinkedIn
          </a>
        </div>

        <div className="relative mt-12 grid gap-4 sm:grid-cols-3">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left transition hover:-translate-y-1 hover:border-indigo-400/40"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 text-indigo-300">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  {c.icon}
                </svg>
              </span>
              <div className="min-w-0">
                <div className="text-xs text-slate-500">{c.label}</div>
                <div className="truncate text-sm font-semibold text-white">
                  {c.value}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
