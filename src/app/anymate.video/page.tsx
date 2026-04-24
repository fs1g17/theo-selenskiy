import ProjectPageHeader from "@/components/project-page-header";
import ProjectSection from "@/components/project-section";

export default function AnymateVideo() {
  return (
    <div className="w-full flex flex-col gap-y-10 pb-16">
      <ProjectPageHeader title="Anymate.Video" />

      <ProjectSection num="01" heading="Demo">
        <video
          controls
          src={"/videos/anymate-demo.mp4"}
          autoPlay
          playsInline
          muted
          className="w-full aspect-auto grayscale rounded-sm"
        />
      </ProjectSection>

      <ProjectSection num="02" heading="What problem does it solve?">
        <p>
          Anymate is a tool designed for teams of animators that are
          collaborating on a short animation. Before anymate, animators that we
          talked to had to manually keep track of which scenes were done by
          whom, and at the end of the working week someone had to sit down and
          render the animation at its current level of progress. We decided to
          help them by automating the process.
        </p>
      </ProjectSection>

      <ProjectSection num="03" heading="What does it do?">
        <p>
          Anymate is a tool that allows users to keep track of animation
          progress in one place. The users can:
        </p>
        <ul
          className="ml-4 list-disc"
          style={{ color: "var(--muted-foreground)" }}
        >
          <li>create a project by uploading the shots</li>
          <li>update the shots as they&apos;re drawn out</li>
          <li>assign work to animators</li>
        </ul>
        <p>all inside a web app.</p>
      </ProjectSection>

      <ProjectSection num="04" heading="Tech approach">
        <p>
          This app uses NextJs for the frontend, and firebase for cloud storage
          and database. The actual video-rendering is done in the browser using
          ffmpeg-wasm.
        </p>
      </ProjectSection>
    </div>
  );
}
