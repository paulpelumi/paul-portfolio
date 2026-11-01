import { BriefcaseBusiness } from "lucide-react";
import type { ReactNode } from "react";
import { experience } from "@/lib/config";

export function Experience(): ReactNode {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-[#52657A] dark:text-[#A9B7C9]">Experience</h2>
      <ul className="divide-y divide-[#253B53]/10 border-y border-[#253B53]/10">
        {experience.map((entry) => (
          <li key={entry.company} className="flex items-start gap-4 py-5">
            <BriefcaseBusiness className="mt-1 h-5 w-5 shrink-0 text-[#3978C6]" aria-hidden="true" />
            <div>
              <h3 className="font-semibold text-[#101C2C] dark:text-[#F7F9FC]">{entry.company}</h3>
              <p className="mt-1 text-sm leading-relaxed text-[#718096] dark:text-[#A9B7C9]">
                {entry.role} <span aria-hidden="true">·</span> {entry.period}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
