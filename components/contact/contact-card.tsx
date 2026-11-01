import { Github, Linkedin } from "lucide-react";
import type { ReactNode } from "react";

import { ContactCardCtas } from "./contact-card-ctas";
import { FadeIn } from "@/components/ui/motion-primitives";
import { profile } from "@/lib/config";

export function ContactCard(): ReactNode {
  return (
    <section className="my-12 w-full border-y border-[#253B53]/10 bg-[#101C2C] text-white sm:my-20">
      <FadeIn>
        <div className="mx-auto grid w-full max-w-275 gap-10 px-6 py-12 sm:px-10 sm:py-16 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#8DB9EC]">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">Let&rsquo;s build something useful.</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              For project discussions and professional opportunities, connect with me on LinkedIn.
            </p>
            <p className="mt-5 text-sm text-white/60">
              Email: <a className="text-white/85 underline decoration-white/30 underline-offset-4 hover:text-white" href={`mailto:${profile.email}`}>{profile.email}</a>
            </p>
            <p className="mt-1 text-sm text-white/60">Based in {profile.location}</p>
          </div>
          <div className="flex flex-col items-start gap-5 md:items-end">
            <ContactCardCtas />
            <div className="flex gap-2">
              <SocialLink href={profile.socialLinks.github} label="GitHub profile">
                <Github className="h-4 w-4" aria-hidden="true" />
              </SocialLink>
              <SocialLink href={profile.socialLinks.linkedin} label="LinkedIn profile">
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </SocialLink>
            </div>
          </div>
          <div className="border-t border-white/15 pt-5 text-xs text-white/50 md:col-span-2">
            &copy; {new Date().getFullYear()} {profile.name}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

function SocialLink({
  href, label, children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}): ReactNode {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white/75 transition-colors hover:border-white/50 hover:text-white"
    >
      {children}
    </a>
  );
}
