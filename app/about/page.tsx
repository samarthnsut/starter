import TeamGrid from "@/components/TeamGrid";
import {
  differentiators,
  educators,
  experts,
  whatWeDo,
} from "@/lib/data";
import { ArrowRight, Handshake, Sparkles, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const storyStats = [
  { value: "1:1", label: "career guidance" },
  { value: "4", label: "focused support pillars" },
  { value: "IIM", label: "alumni educators" },
];

const journeySteps = [
  {
    icon: Target,
    title: "Discover the right direction",
    text: "We help students understand their strengths, target industries, and practical career options before they start applying.",
  },
  {
    icon: Sparkles,
    title: "Shape a stronger profile",
    text: "CVs, cover letters, LinkedIn, and visibility are refined so each candidate looks prepared and credible.",
  },
  {
    icon: Handshake,
    title: "Prepare for real selection",
    text: "Mock interviews, communication practice, role readiness, and opportunity scouting turn preparation into action.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-slate-50 py-16 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:py-24">
        <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-brand-200/30 blur-3xl dark:bg-brand-900/20" />
        <div className="absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-accent-500/10 blur-3xl dark:bg-brand-950/20" />
        <div className="section-container relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-500">
                About Techlist
              </p>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight text-slate-900 dark:text-slate-50 sm:text-5xl">
                Career guidance that turns confusion into confident action.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                At Techlist, we believe every student can reach the right opportunity
                with structured guidance, honest mentoring, and industry-aware
                preparation. Our educators and experts work closely with candidates
                to build clarity, visibility, and interview readiness.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#what-we-do" className="btn-primary">
                  Explore our work
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link href="/courses" className="btn-outline">
                  View courses
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-3 shadow-2xl shadow-brand-200/30 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-black/30">
                <Image
                  src="/assets/images/about.jpg"
                  alt="Students receiving career guidance"
                  width={720}
                  height={560}
                  className="aspect-[4/3] w-full rounded-[1.4rem] object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 left-4 right-4 grid grid-cols-3 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900 sm:left-8 sm:right-8">
                {storyStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="border-r border-slate-200 px-4 py-4 text-center last:border-r-0 dark:border-slate-800"
                  >
                    <p className="text-xl font-bold text-brand-500">{stat.value}</p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="what-we-do" className="bg-white py-20 dark:bg-slate-950 sm:py-24">
        <div className="section-container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-500">
              What We Do
            </p>
            <h2 className="section-heading">A practical support system for the full career journey</h2>
            <p className="section-subheading">
              From career direction to opportunity conversion, each service is built
              around the places where freshers usually need sharper guidance.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {whatWeDo.map((item, index) => (
              <div
                key={item.title}
                className="card-surface group relative overflow-hidden p-7 transition hover:-translate-y-1 hover:shadow-xl"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: `fade-in-up 0.6s ease-out forwards`,
                }}
              >
                <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-brand-50 dark:bg-brand-950/30" />
                <div className="relative flex items-start gap-5">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-100 to-white shadow-inner transition group-hover:scale-105 dark:from-brand-900/40 dark:to-slate-900">
                    <Image
                      src={item.image}
                      alt=""
                      width={58}
                      height={58}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <div className="space-y-3 text-slate-600 dark:text-slate-300">
                      {item.paragraphs.map((paragraph) => (
                        <p key={paragraph.slice(0, 30)} className="text-sm leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-slate-50 to-white py-20 dark:from-slate-900 dark:to-slate-950 sm:py-24">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-100/20 rounded-full blur-3xl dark:bg-brand-900/10 -mr-48 -mt-48" />
        <div className="section-container relative">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-500">
                Our Method
              </p>
              <h2 className="section-heading">Built around clarity, visibility, and conversion</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {journeySteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                  >
                    <Icon className="mb-4 h-6 w-6 text-brand-500" />
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                      {step.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="card-surface group flex gap-5 p-6 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-100 to-brand-50 transition group-hover:scale-105 dark:from-brand-900/40 dark:to-brand-950/40">
                  <Image
                    src={item.image}
                    alt=""
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-slate-950 sm:py-24">
        <div className="section-container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-500">
              People Behind The Program
            </p>
            <h2 className="section-heading">Educators and experts with real industry context</h2>
            <p className="section-subheading">
              Students learn from professionals who understand both campus readiness
              and the expectations of modern hiring teams.
            </p>
          </div>
          <TeamGrid title="Our Educators" members={educators} />
          <TeamGrid title="Our Experts" members={experts} />
        </div>
      </section>
    </>
  );
}
