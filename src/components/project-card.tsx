import { Project } from "@/types/project";
import Link from "next/link";

export default function ProjectCard({
  project: { projectUrl, projectTitle, projectDescription },
}: {
  project: Project;
}) {
  return (
    <Link href={projectUrl} className="group block">
      <div
        className="relative h-full p-5 border transition-all duration-300 overflow-hidden"
        style={{
          borderColor: "var(--border-color)",
          background: "var(--card-bg)",
          borderRadius: "var(--radius)",
        }}
      >
        {/* Amber glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            boxShadow: "inset 0 0 0 1px var(--accent-color)",
            borderRadius: "var(--radius)",
          }}
        />

        <div className="flex flex-col gap-2 h-full">
          <div className="flex items-start justify-between gap-2">
            <h3
              className="text-base leading-snug text-foreground transition-colors duration-200 group-hover:text-accent m-0"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, fontSize: "1.25rem" }}
            >
              {projectTitle}
            </h3>
            <span
              className="text-base opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-[-4px] group-hover:translate-x-0 flex-shrink-0 mt-0.5"
              style={{ color: "var(--accent-color)" }}
              aria-hidden="true"
            >
              →
            </span>
          </div>
          <p
            className="text-sm leading-relaxed m-0"
            style={{ color: "var(--muted-foreground)" }}
          >
            {projectDescription}
          </p>
        </div>
      </div>
    </Link>
  );
}
