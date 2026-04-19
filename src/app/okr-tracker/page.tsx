import ProjectPageHeader from "@/components/project-page-header";
import ProjectSection from "@/components/project-section";

export default function OkrTracker() {
  return (
    <div className="w-full flex flex-col gap-y-10 pb-16">
      <ProjectPageHeader
        title="OKR Tracker"
        externalHref="https://okr-supabase.vercel.app"
        externalLabel="Live product"
      />

      <ProjectSection num="01" heading="Demo">
        <video
          controls
          src={"/videos/okr-tracker-demo.mp4"}
          autoPlay
          playsInline
          muted
          className="w-full aspect-auto grayscale rounded-sm"
        />
      </ProjectSection>

      <ProjectSection num="02" heading="What problem does it solve?">
        <p>
          OKRs (Objectives and Key Results) are a goal-setting framework that
          helps teams align around clear, measurable goals by defining ambitious
          objectives and tracking progress through specific, actionable results.
          <br />
          Inspired after reading &apos;Measure What Matters: OKRs: The Simple Idea
          that Drives 10x Growth&apos; by John Doerr, I decided to make an app that
          allows users to systematically approach goal setting.
        </p>
      </ProjectSection>

      <ProjectSection num="03" heading="What does it do?">
        <p>
          OKR tracker is a tool that allows users to create and maintain their
          OKRs in one place, where they can:
        </p>
        <ul className="ml-4 list-disc" style={{ color: "var(--muted-foreground)" }}>
          <li>create an objective</li>
          <li>add key results</li>
          <li>
            make a key result itself an objective with its own sub key-results
          </li>
        </ul>
        <p>all inside a web app.</p>
      </ProjectSection>

      <ProjectSection num="04" heading="Tech approach">
        <p>
          This app uses NextJs for the frontend, rendering the tree graph with
          d3 data visualisation library, and Supabase for the backend.
        </p>
      </ProjectSection>
    </div>
  );
}
