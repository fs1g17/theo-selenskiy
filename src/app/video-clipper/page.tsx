import ProjectPageHeader from "@/components/project-page-header";
import ProjectSection from "@/components/project-section";

export default function VideoClipper() {
  return (
    <div className="w-full flex flex-col gap-y-10 pb-16">
      <ProjectPageHeader
        title="Video Clipper"
        externalHref="https://video-clipper.com"
        externalLabel="video-clipper.com"
      />

      <ProjectSection num="01" heading="Demo">
        <video
          controls
          src="/videos/video-clipper-demo.mp4"
          autoPlay
          muted
          className="w-full aspect-auto grayscale rounded-sm"
        />
      </ProjectSection>

      <ProjectSection num="02" heading="What problem does it solve?">
        <p>
          Clipping a long YouTube video into shareable Shorts is tedious —
          rewatching, trimming, repeating. Let AI handle that.
        </p>
      </ProjectSection>

      <ProjectSection num="03" heading="What does it do?">
        <p>
          Paste a YouTube link and the AI downloads and transcribes the video,
          identifies the best moments, and produces YouTube Shorts-ready clips.
          Each clip can be uploaded in a single click.
        </p>
      </ProjectSection>

      <ProjectSection num="04" heading="Tech stack">
        <ul className="ml-4 list-disc" style={{ color: "var(--muted-foreground)" }}>
          <li>Python on the backend, Next.js on the frontend</li>
          <li>Google Cloud Run — everything runs in a Dockerised Python script</li>
          <li>Two Cloud Task queues: one for downloading &amp; transcribing, one for cutting clips</li>
        </ul>
      </ProjectSection>

      <ProjectSection num="05" heading="Behind the scenes">
        <p>
          When a user pastes a link and hits <em>Get AI Clips</em>, the{" "}
          <code>/download</code> endpoint queues a Cloud Task. An available
          instance picks it up via <code>/process-download</code>, handles the
          download and transcription, then schedules each individual clip cut as
          its own task in a second queue — one with a higher{" "}
          <code>max_instances</code> ceiling so it scales out faster.
        </p>
        <p>
          The two-queue split keeps costs near zero when idle but lets the
          system scale automatically if real traffic shows up. A hard{" "}
          <code>max_instances</code> cap on each queue means no surprise bills.
        </p>
      </ProjectSection>
    </div>
  );
}
