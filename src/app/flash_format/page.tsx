import ProjectPageHeader from "@/components/project-page-header";
import ProjectSection from "@/components/project-section";

export default function FlashFormat() {
  return (
    <div className="w-full flex flex-col gap-y-10 pb-16">
      <ProjectPageHeader
        title="Flash Format"
        externalHref="https://flash-format-git-main-aquilex.vercel.app/"
        externalLabel="Live product"
      />

      <ProjectSection num="01" heading="Demo">
        <video
          controls
          src={"/videos/flashformat-demo.mp4"}
          autoPlay
          playsInline
          muted
          className="w-full aspect-auto grayscale rounded-sm"
        />
      </ProjectSection>

      <ProjectSection num="02" heading="What problem does it solve?">
        <p>
          Converting images to different formats requires tools to be downloaded
          on the computer, but that&apos;s inconvenient if you just need to convert a
          single file quickly.
        </p>
      </ProjectSection>

      <ProjectSection num="03" heading="What does it do?">
        <p>
          This small web app allows the user to convert images to different
          formats online, in a flash! Hence the name, flash format.
        </p>
      </ProjectSection>

      <ProjectSection num="04" heading="Tech approach">
        <p>
          The frontend is implemented with NextJs. The file conversion is done
          with a firebase cloud function, using the &apos;sharp&apos; image processing library.
        </p>
      </ProjectSection>
    </div>
  );
}
