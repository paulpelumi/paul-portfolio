import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/config";
import type { ReactNode } from "react";

export function ContactButton(): ReactNode {
  return (
    <a
      href={`mailto:${profile.email}`}
      className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#253B53]/15 px-5 text-sm font-semibold text-[#253B53] transition-colors hover:border-[#3978C6]/50 hover:text-[#3978C6] dark:border-white/25 dark:text-white dark:hover:border-[#8DB9EC] dark:hover:text-[#8DB9EC]"
    >
      Get In Touch
      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}
