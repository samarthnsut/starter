import type { CourseModule } from "@/lib/data";
import { CheckCircle2, Clock3, IndianRupee } from "lucide-react";

type CourseModuleCardProps = {
  module: CourseModule;
};

export default function CourseModuleCard({ module }: CourseModuleCardProps) {
  const pricing = Array.isArray(module.pricing)
    ? module.pricing
    : [module.pricing];
  const sessionCount = module.sessions.length;

  return (
    <article className="card-surface overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-r from-brand-500 via-brand-600 to-accent-600 px-6 py-6 text-white dark:border-slate-800 dark:from-brand-700 dark:via-brand-800 dark:to-slate-900">
        <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-white/10" />
        <span className="relative inline-flex w-fit rounded-full bg-white/20 px-4 py-1 text-sm font-semibold ring-1 ring-white/30 backdrop-blur-sm">
          {module.number}
        </span>
        <div className="relative mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="text-2xl font-bold sm:text-3xl">{module.title}</h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/85">
              {module.description[0]}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold ring-1 ring-white/25">
            <Clock3 className="h-4 w-4" />
            {sessionCount} {sessionCount === 1 ? "session" : "sessions"}
          </div>
        </div>
      </div>

      <div className="grid gap-8 p-6 lg:grid-cols-[1fr_280px] lg:p-8">
        <div>
          {module.description.slice(1).map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="mb-4 leading-relaxed text-slate-600 dark:text-slate-300"
            >
              {paragraph}
            </p>
          ))}

          <h4 className="mb-4 mt-6 text-lg font-semibold text-slate-900 dark:text-white">
            About the Module
          </h4>

          <dl className="space-y-5">
            {module.sessions.map((session) => (
              <div
                key={session.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-brand-200 hover:bg-white dark:border-slate-800 dark:bg-slate-950/50 dark:hover:border-brand-900 dark:hover:bg-slate-900"
              >
                <dt className="flex items-start gap-2 font-semibold text-brand-600 dark:text-brand-400">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{session.title}</span>
                </dt>
                {session.items && (
                  <dd className="mt-2">
                    <ul className="list-disc space-y-1 pl-5 text-slate-600 dark:text-slate-300">
                      {session.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </dd>
                )}
                {session.ordered && (
                  <dd className="mt-2">
                    <ol className="list-decimal space-y-1 pl-5 text-slate-600 dark:text-slate-300">
                      {session.ordered.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ol>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>

        <aside className="flex flex-col justify-center">
          <div className="rounded-2xl bg-slate-950 p-6 text-center text-white shadow-md dark:bg-brand-950/70 dark:ring-1 dark:ring-brand-900/60">
            <IndianRupee className="mx-auto mb-3 h-8 w-8 text-white/90" />
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-200">
              Pricing
            </p>
            <div className="space-y-3 text-sm font-semibold leading-relaxed">
              {pricing.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
