import { ContactCard } from "@/components/contact/contact-card";
import { Projects } from "@/components/projects/projects";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Projects | Pelumi Paul",
  description: "Featured enterprise software and independent projects by Pelumi Paul.",
  path: "/projects",
});

export default function ProjectsPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-275 px-6 pt-36 pb-12 sm:px-10 sm:pt-40 sm:pb-14">
        <FadeIn className="flex flex-col items-center gap-5 text-center">
          <h1 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            Projects
          </h1>
          <p className="max-w-[60ch] text-base leading-relaxed text-foreground/65 sm:text-lg">
            Enterprise software, product concepts and independent applications.
          </p>
        </FadeIn>
      </section>
      <Projects />
      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
