import type { ReactNode } from "react";

import { HeroCtas } from "./hero-ctas";
import { FadeIn, ScaleUnblur } from "@/components/ui/motion-primitives";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { profile } from "@/lib/config";
import { PortraitMorph } from "./portrait-morph";

export function Hero(): ReactNode {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 pt-32 pb-14 sm:px-10 sm:pt-36 sm:pb-16">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <FadeIn className="flex flex-col items-start gap-5">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#3978C6]">
              Software Engineer <span className="mx-2 text-[#718096]">/</span>
              Full-Stack Developer
            </p>

            <h1 className="max-w-[20ch] text-[2rem] font-semibold leading-[1.12] text-foreground sm:max-w-[19ch] sm:text-[2.5rem] lg:max-w-[18ch] lg:text-[3rem]">
              {profile.heroHeadline}
            </h1>

            <p className="max-w-[58ch] text-base leading-relaxed text-foreground/70 sm:text-lg">
              {profile.heroDescription}
            </p>

            <HeroCtas />

            <div className="mt-2 flex items-center gap-3" aria-label="Social profiles">
              <a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-lg px-2 text-sm font-medium text-foreground/70 transition-colors hover:text-[#3978C6]"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                GitHub
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-lg px-2 text-sm font-medium text-foreground/70 transition-colors hover:text-[#3978C6]"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                LinkedIn
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </FadeIn>

          <ScaleUnblur className="flex justify-stretch lg:justify-end">
            <div className="w-full max-w-[25rem]">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-foreground/10 bg-[#253B53]/10 shadow-[0_22px_60px_-34px_rgba(16,28,44,0.45)]">
                <PortraitMorph
                  srcA={profile.portrait}
                  srcB={profile.portraitHover}
                  alt="Pelumi Paul"
                />
              </div>
              <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-foreground/10 pb-3">
                <p className="font-semibold text-foreground">Pelumi Paul</p>
                <p className="text-sm text-foreground/60">{profile.location}</p>
              </div>
            </div>
          </ScaleUnblur>
        </div>
      </div>
    </section>
  );
}
