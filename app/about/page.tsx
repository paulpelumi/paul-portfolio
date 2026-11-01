import { Education } from "@/components/about/education";
import { Experience } from "@/components/about/experience";
import { Skills } from "@/components/about/skills";
import { Stack } from "@/components/about/stack";
import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { profile } from "@/lib/config";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "About | Pelumi Paul",
  description: "About Pelumi Paul Kolawole, a software engineer and full-stack developer based in Nigeria.",
  path: "/about",
});

export default function AboutPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-275 px-6 pt-36 pb-12 sm:px-10 sm:pt-44 sm:pb-16">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#3978C6]">About</p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              {profile.fullName}
            </h1>
            <p className="mt-2 text-base font-medium text-[#52657A]">{profile.title}</p>
            <div className="mt-7 space-y-4 text-base leading-relaxed text-foreground/75 sm:text-lg">
              {profile.biography.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-275 px-6 pb-12 sm:px-10 sm:pb-16">
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-x-16">
            <Experience />
            <Education />
            <div className="lg:col-span-2">
              <Skills />
            </div>
            <Stack />
          </div>
        </FadeIn>
      </section>

      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
