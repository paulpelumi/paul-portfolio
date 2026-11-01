import type { ReactNode } from "react";
import { skillGroups } from "@/lib/config";

export function Skills(): ReactNode {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-[#52657A] dark:text-[#A9B7C9]">Technical skills</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#718096] dark:text-[#A9B7C9]">Tools and engineering capabilities used across my application work.</p>
      </div>
      <div className="grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <section key={group.category}>
            <h3 className="text-sm font-semibold text-[#101C2C] dark:text-[#F7F9FC]">{group.category}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li key={skill} className="rounded-md border border-[#253B53]/10 bg-white px-2.5 py-1.5 text-xs leading-relaxed text-[#52657A] dark:bg-[#101C2C] dark:text-[#CFD9E7] sm:text-sm">
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
