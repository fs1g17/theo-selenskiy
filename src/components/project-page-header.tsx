import Link from "next/link";

interface ProjectPageHeaderProps {
  title: string;
  externalHref?: string;
  externalLabel?: string;
}

export default function ProjectPageHeader({
  title,
  externalHref,
  externalLabel = "View project",
}: ProjectPageHeaderProps) {
  return (
    <header className="flex flex-col gap-y-4 pb-8 pt-4 border-b" style={{ borderColor: "var(--border-color)" }}>
      <Link
        href="/"
        className="flex items-center gap-1.5 text-xs tracking-wide w-fit transition-colors duration-200"
        style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-geist-mono)" }}
      >
        <span>←</span>
        <span className="hover:underline underline-offset-2">Back</span>
      </Link>

      <div className="flex flex-wrap items-end justify-between gap-3">
        <h1
          className="m-0 leading-tight"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {title}
        </h1>

        {externalHref && (
          <Link
            href={externalHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs px-3 py-1.5 border transition-all duration-200 shrink-0 hover:border-accent hover:text-accent"
            style={{
              borderColor: "var(--border-color)",
              color: "var(--muted-foreground)",
              borderRadius: "var(--radius)",
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            {externalLabel}
            <span aria-hidden="true" style={{ color: "var(--accent-color)" }}>↗</span>
          </Link>
        )}
      </div>
    </header>
  );
}
