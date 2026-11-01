import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Building2,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/ui/motion-primitives";
import { featuredProjects, independentProjects } from "@/lib/config";

type Project = {
  id: string;
  name: string;
  type: string;
  status: string;
  description: string;
  image: string;
  technologies: readonly string[];
  links: readonly { label: string; href: string }[];
  capabilities?: readonly string[];
  privacySensitive?: boolean;
};

const PROJECT_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  zentryx: Building2,
  zentra: Lightbulb,
  veriguard: ShieldCheck,
  viewprd: Blocks,
  "accessories-store": Blocks,
};

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  return (
    <section className="relative w-full pb-12">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-start gap-4 pt-12 pb-10 sm:pt-16 sm:pb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#3978C6]">
              Selected work
            </p>
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Featured projects
            </h2>
            <p className="max-w-[60ch] text-base leading-relaxed text-foreground/65 sm:text-lg">
              Selected applications and product ideas focused on practical workflows and useful technology.
            </p>
          </FadeIn>
        ) : null}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} featured />
          ))}
        </div>

        {viewMoreVisible ? (
          <div className="mt-8 flex justify-start">
            <Link
              href="/projects"
              className="focus-ring group inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#253B53]/15 px-4 py-2.5 text-sm font-semibold text-[#253B53] transition-colors hover:border-[#3978C6]/50 hover:text-[#3978C6]"
            >
              Explore projects
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}

        {!viewMoreVisible ? (
          <section id="independent-projects" className="mt-20 scroll-mt-28 sm:mt-24">
            <div className="mb-8 border-t border-[#253B53]/12 pt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#3978C6]">
                Independent development
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
                Other Projects &amp; Independent Development
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {independentProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: Project;
  index: number;
  featured?: boolean;
}): ReactNode {
  const Icon = PROJECT_ICONS[project.id] ?? Blocks;
  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.18)}
      className={featured && project.id === "zentryx" ? "md:col-span-2" : ""}
    >
      <article className="project-card flex h-full flex-col gap-5 rounded-lg border border-[#253B53]/10 bg-white p-5 dark:bg-[#101C2C] sm:p-6">
        <header className="flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-3">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EAF1F9] text-[#253B53]">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-lg font-semibold text-[#101C2C] dark:text-[#F7F9FC]">{project.name}</span>
              <span className="mt-0.5 block text-sm text-[#718096] dark:text-[#A9B7C9]">{project.type}</span>
            </span>
          </span>
          <span className="rounded-full border border-[#3978C6]/20 bg-[#F2F6FB] px-3 py-1 text-xs font-semibold text-[#253B53] dark:border-[#6AA5EF]/35 dark:bg-[#172334] dark:text-[#D6E4F6]">
            {project.status}
          </span>
        </header>

        <div className="relative aspect-[16/9] overflow-hidden rounded-md border border-[#253B53]/10 bg-[#F7F9FC] dark:border-white/15 dark:bg-[#0B1220]">
          <Image
            src={project.image}
            alt={`${project.name} project screenshot`}
            fill
            sizes="(min-width: 1024px) 700px, (min-width: 768px) 45vw, 100vw"
            className={`object-cover object-top ${project.privacySensitive ? "scale-110 blur-xl brightness-75" : ""}`}
          />
          {project.privacySensitive ? (
            <div className="absolute inset-0 flex items-center justify-center bg-[#101C2C]/25 p-4 text-center">
              <span className="rounded-md border border-white/30 bg-[#101C2C]/80 px-4 py-2 text-sm font-semibold text-white">
                Internal interface. Operational details obscured.
              </span>
            </div>
          ) : null}
        </div>

        <div className="flex flex-1 flex-col gap-3">
          <h3 className="text-base leading-relaxed text-[#253B53] dark:text-[#D6E4F6]">
            {project.description}
          </h3>
          {project.capabilities?.length ? (
            <ul className="grid gap-2 pt-1 sm:grid-cols-2">
              {project.capabilities.map((capability) => (
                <li key={capability} className="flex items-start gap-2 text-sm leading-relaxed text-[#718096] dark:text-[#A9B7C9]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3978C6]" aria-hidden="true" />
                  {capability}
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {project.technologies.length ? (
          <ul className="flex flex-wrap gap-2" aria-label="Technologies">
            {project.technologies.map((technology) => (
              <li key={technology} className="rounded-md bg-[#F1F4F8] px-2.5 py-1 text-xs font-medium text-[#52657A] dark:bg-[#172334] dark:text-[#CFD9E7]">
                {technology}
              </li>
            ))}
          </ul>
        ) : null}

        {project.links.length ? (
          <footer className="flex flex-wrap gap-x-5 gap-y-2 border-t border-[#253B53]/10 pt-4">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex min-h-9 items-center gap-1.5 text-sm font-semibold text-[#253B53] transition-colors hover:text-[#3978C6] dark:text-[#D6E4F6] dark:hover:text-[#8DB9EC]"
              >
                {link.label}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ))}
          </footer>
        ) : null}
      </article>
    </FadeIn>
  );
}
