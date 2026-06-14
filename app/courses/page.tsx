import CourseModuleCard from "@/components/CourseModuleCard";
import { courseModules } from "@/lib/data";
import { ArrowRight, BadgeCheck, BookOpenCheck, MessagesSquare, Route, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses",
};

const courseHighlights = [
  {
    icon: Route,
    title: "Structured Path",
    text: "Move from profile building to skills, interview practice, and focused career discussions.",
  },
  {
    icon: MessagesSquare,
    title: "Workshop Led",
    text: "Sessions combine lectures, guided practice, mock interactions, and feedback loops.",
  },
  {
    icon: BadgeCheck,
    title: "Job Search Ready",
    text: "Every module is aimed at making candidates clearer, sharper, and more visible to recruiters.",
  },
];

export default function CoursesPage() {
  const totalSessions = courseModules.reduce(
    (total, module) => total + module.sessions.length,
    0,
  );

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-slate-50 py-16 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:py-24">
        <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-brand-200/30 blur-3xl dark:bg-brand-900/20" />
        <div className="absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-accent-500/10 blur-3xl dark:bg-brand-950/20" />
        <div className="section-container relative">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-500">
                Learning Programs
              </p>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight text-slate-900 dark:text-slate-50 sm:text-5xl">
                Courses built for the moments that decide your career.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                Comprehensive training programs designed to strengthen your job
                search strategy, professional profile, interview confidence, and
                industry readiness.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#course-modules" className="btn-primary">
                  Browse modules
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="/contact" className="btn-outline">
                  Talk to us
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="card-surface p-6 sm:col-span-2">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-500 dark:bg-brand-950/50">
                    <BookOpenCheck className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Complete Program
                    </p>
                    <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                      {courseModules.length} modules, {totalSessions}+ sessions
                    </p>
                  </div>
                </div>
              </div>
              {courseHighlights.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <div key={highlight.title} className="card-surface p-6">
                    <Icon className="mb-5 h-7 w-7 text-brand-500" />
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                      {highlight.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {highlight.text}
                    </p>
                  </div>
                );
              })}
              <div className="rounded-2xl bg-slate-950 p-6 text-white shadow-xl dark:bg-brand-950/70">
                <Sparkles className="mb-5 h-7 w-7 text-brand-200" />
                <h2 className="text-lg font-bold">Pick only what you need</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-200">
                  Modules can be taken independently, so students can focus on
                  the exact gap they want to solve first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="course-modules" className="bg-white py-20 dark:bg-slate-950 sm:py-24">
        <div className="section-container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-500">
              Course Modules
            </p>
            <h2 className="section-heading">Choose the support your next step needs</h2>
            <p className="section-subheading">
              Each module is focused, practical, and priced separately, making it
              easier to start with the highest-impact area.
            </p>
          </div>
          <div className="space-y-10">
            {courseModules.map((module) => (
              <CourseModuleCard key={module.number} module={module} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
