import ProjectPageHeader from "@/components/project-page-header";
import ProjectSection from "@/components/project-section";

export default function StarHaze() {
  return (
    <div className="w-full flex flex-col gap-y-10 pb-16">
      <ProjectPageHeader title="StarHaze" />

      <ProjectSection num="01" heading="Demo">
        <video
          controls
          src={"/videos/starhaze-demo.mp4"}
          autoPlay
          playsInline
          muted
          className="w-full aspect-auto grayscale rounded-sm"
        />
      </ProjectSection>

      <ProjectSection num="02" heading="What problem does it solve?">
        <p>Collecting user feedback takes time away from building products.</p>
      </ProjectSection>

      <ProjectSection num="03" heading="What does it do?">
        <p>
          StarHaze allows the user to easily gather user feedback, view it in
          one place, and reach out to the users if they left their email!
        </p>
      </ProjectSection>

      <ProjectSection num="04" heading="Tech approach">
        <p>
          The frontend is implemented using NextJs with ShadCn Tailwind
          component library. The backend is implemented using firebase cloud
          functions and uses the firestore NoSQL database.
        </p>
      </ProjectSection>
    </div>
  );
}
