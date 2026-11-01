import type { ReactNode } from "react";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/config";

export function Education(): ReactNode {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-[#52657A] dark:text-[#A9B7C9]">Education</h2>
      <ul className="divide-y divide-[#253B53]/10 border-y border-[#253B53]/10">
        {education.map((entry) => (
          <li key={entry.school} className="flex items-start gap-4 py-5">
            <GraduationCap className="mt-1 h-5 w-5 shrink-0 text-[#3978C6]" aria-hidden="true" />
            <div>
              <h3 className="font-semibold text-[#101C2C] dark:text-[#F7F9FC]">{entry.school}</h3>
              <p className="mt-1 text-sm leading-relaxed text-[#52657A] dark:text-[#D6E4F6]">
                {entry.qualification} <span aria-hidden="true">·</span> {entry.period}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-[#718096] dark:text-[#A9B7C9]">{entry.result}</p>
              {"distinction" in entry && entry.distinction ? (
                <p className="mt-2 text-sm leading-relaxed text-[#3978C6] dark:text-[#8DB9EC]">{entry.distinction}</p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
