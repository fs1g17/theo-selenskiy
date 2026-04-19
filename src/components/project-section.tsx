interface ProjectSectionProps {
  num: string;
  heading: string;
  children: React.ReactNode;
}

export default function ProjectSection({ num, heading, children }: ProjectSectionProps) {
  return (
    <section>
      <div className="flex items-baseline gap-3 mb-3">
        <span
          className="text-xs shrink-0"
          style={{ color: "var(--accent-color)", fontFamily: "var(--font-geist-mono)" }}
        >
          {num}
        </span>
        <h2
          className="m-0"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {heading}
        </h2>
      </div>
      {children}
    </section>
  );
}
