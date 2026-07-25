export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 font-display text-xs font-bold text-white">
            MA
          </span>
          <span className="font-display text-sm text-slate-300">
            Muhammad Ali Asad Khan
          </span>
        </div>
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} — Designed &amp; built with React &amp;
          Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
