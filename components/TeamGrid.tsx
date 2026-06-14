import { Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type TeamMember = {
  name: string;
  role: string;
  education: string;
  image: string;
  linkedin: string;
};

type TeamGridProps = {
  title: string;
  members: TeamMember[];
};

export default function TeamGrid({ title, members }: TeamGridProps) {
  return (
    <div className="mb-16 last:mb-0">
      <h3 className="section-heading mb-10 text-center">{title}</h3>
      <div
        className={`mx-auto grid max-w-5xl gap-8 ${
          members.length === 2
            ? "sm:grid-cols-2"
            : "sm:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {members.map((member) => (
          <div
            key={member.name}
            className="card-surface group overflow-hidden text-center transition hover:-translate-y-1 hover:shadow-lg"
          >
            <Link
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-800">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-slate-950/70 to-transparent p-4 opacity-0 transition group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-slate-900">
                    <Linkedin className="h-4 w-4 text-[#0A66C2]" />
                    View Profile
                  </span>
                </div>
              </div>
            </Link>
            <div className="p-5">
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                {member.name}
              </h4>
              <p className="mt-1 text-sm text-brand-500">{member.role}</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {member.education}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
