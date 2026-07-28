import ProjectPageHeader from "@/components/project-page-header";
import ProjectSection from "@/components/project-section";

export default function RunpodS3Viewer() {
  return (
    <div className="w-full flex flex-col gap-y-10 pb-16">
      <ProjectPageHeader
        title="RunPod S3 Viewer"
        externalLabel="GitHub repo"
        externalHref="https://github.com/fs1g17/runpod-s3-viewer"
      />

      <ProjectSection num="01" heading="Demo">
        <video
          controls
          src="/videos/runpod-s3-viewer-demo.mp4"
          autoPlay
          playsInline
          muted
          loop
          className="w-full aspect-auto grayscale rounded-sm"
        />
      </ProjectSection>

      <ProjectSection num="02" heading="What problem does it solve?">
        <p>
          RunPod network volumes are only reachable through an S3-compatible API
          that has several non-standard quirks. There is no friendly way to
          browse a volume or pull files off it — you are stuck with fiddly AWS
          CLI incantations. I wanted a proper desktop file explorer for it.
        </p>
      </ProjectSection>

      <ProjectSection num="03" heading="What does it do?">
        <p>
          A cross-platform desktop app to browse and download from RunPod
          volumes:
          <ul
            className="ml-4 list-disc"
            style={{ color: "var(--muted-foreground)" }}
          >
            <li>browse the volume and navigate folders to any depth</li>
            <li>stream files straight to disk, with progress and quick reveal</li>
            <li>
              fully configurable connection (endpoint, region, volume ID, keys),
              with credentials stored in the OS keychain
            </li>
          </ul>
        </p>
      </ProjectSection>

      <ProjectSection num="04" heading="Tech stack">
        <ul
          className="ml-4 list-disc"
          style={{ color: "var(--muted-foreground)" }}
        >
          <li>Electron + React + Tailwind/shadcn, with a macOS-style UI</li>
          <li>AWS SDK v3 (<code>@aws-sdk/client-s3</code>) for all S3 operations</li>
          <li>
            every S3 call runs in the Electron main process — the endpoint serves
            no CORS headers, and downloads stream to disk in Node; the renderer
            is UI only and talks to main over a typed IPC bridge
          </li>
          <li>
            secrets encrypted at rest with the OS keychain via Electron{" "}
            <code>safeStorage</code>
          </li>
        </ul>
      </ProjectSection>

      <ProjectSection num="05" heading="Behind the scenes">
        <p>
          The RunPod endpoint is &ldquo;S3-compatible&rdquo; but non-standard, so
          a chunk of the work was reverse-engineering its behaviour:
          <ul
            className="ml-4 list-disc"
            style={{ color: "var(--muted-foreground)" }}
          >
            <li>
              the region must be the datacenter code (e.g. <code>eu-ro-1</code>),
              not <code>us-east-1</code>, and path-style addressing is required
            </li>
            <li>
              the AWS SDK for JS appends a trailing slash to bucket-level
              requests, which RunPod rejects as an invalid object path — a small
              signing-stage middleware strips it, matching what the AWS CLI sends
            </li>
            <li>
              <code>HeadObject</code> returns 403, so downloads use the low-level{" "}
              <code>GetObject</code> streamed to disk rather than the SDK&rsquo;s
              managed download, which would issue a HEAD first
            </li>
          </ul>
        </p>
      </ProjectSection>
    </div>
  );
}
