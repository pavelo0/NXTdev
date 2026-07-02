import { processSteps } from "@/lib/content";

export function Process() {
  return (
    <section id="process" className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-emerald-400">Процесс</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Как работаем с клиентом
          </h2>
        </div>

        <ol className="mt-14 grid gap-8 md:grid-cols-3">
          {processSteps.map((item) => (
            <li key={item.step} className="relative">
              <div className="flex items-center gap-4">
                <span className="shrink-0 font-mono text-xs text-emerald-500/80">
                  {item.step}
                </span>
                <span
                  className="hidden h-px flex-1 bg-gradient-to-r from-emerald-500/30 to-transparent md:block"
                  aria-hidden
                />
              </div>
              <h3 className="mt-4 text-xl font-medium text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
