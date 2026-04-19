import Image from "next/image";
import ProjectPageHeader from "@/components/project-page-header";
import ProjectSection from "@/components/project-section";

export default function JobTracker() {
  return (
    <div className="w-full flex flex-col gap-y-10 pb-16">
      <ProjectPageHeader
        title="JobTracker"
        externalHref="https://github.com/fs1g17/JobTracker"
        externalLabel="GitHub repo"
      />

      <ProjectSection num="01" heading="Demo">
        <video
          controls
          src={"/videos/job-tracker-demo.mp4"}
          autoPlay
          muted
          className="w-full aspect-auto grayscale rounded-sm"
        />
      </ProjectSection>

      <ProjectSection num="02" heading="What problem does it solve?">
        <p>
          It&apos;s easy to lose track of job applications, important emails can get
          easily lost in the inbox.
        </p>
      </ProjectSection>

      <ProjectSection num="03" heading="What does it do?">
        <p>
          This fullstack webapp allows me to easily track all my job
          applications by leveraging AI. It&apos;s a kanban board of all my job
          applications, and it gets automatically updated when an email
          regarding a job application is received.
        </p>
      </ProjectSection>

      <ProjectSection num="04" heading="Tech approach">
        <p>The tech-stack is this:</p>
        <ul className="ml-4 list-disc" style={{ color: "var(--muted-foreground)" }}>
          <li>Go on the backend, with PostgreSQL database</li>
          <li>NextJs, TailwindCss, and shadcn on the frontend</li>
          <li>n8n for AI integration</li>
          <li>Docker - everything is dockerised for easy deployment</li>
        </ul>

        <h3 style={{ fontFamily: "var(--font-cormorant)" }}>Backend</h3>
        <p>There are 3 main endpoints:</p>
        <ul className="ml-4 list-disc" style={{ color: "var(--muted-foreground)" }}>
          <li>
            Create job application (called when an email confirming received
            application is sent)
          </li>
          <li>
            Update job application (called when an email informing about updates
            regarding job application is sent)
          </li>
          <li>
            Create notification (called when any data is missing, but the email
            is classified as relating to job application)
          </li>
        </ul>

        <h3 style={{ fontFamily: "var(--font-cormorant)" }}>n8n</h3>
        <p>The approach with n8n is quite straightforward:</p>
        <Image
          src="/job-tracker/job-tracker-n8n.png"
          width={1000}
          height={100}
          alt=""
          className="w-full mx-auto grayscale rounded-sm my-4"
        />
        <p>
          There is a GMail trigger, which activates whenever an email is
          received in the inbox. This is then piped to a text classifier, which
          classifies the email as either &quot;applied&quot;, &quot;in_progress&quot;, &quot;rejected&quot;,
          &quot;offer&quot;, or &quot;not a job application&quot;. If the email is classified as
          relating to a job application, then the corresponding endpoint is
          called.
        </p>
        <p>
          However, if any data is missing (i.e. it&apos;s not clear which company or
          what role the email is talking about), then the &quot;notification&quot;
          endpoint is called so that I never miss important emails.
        </p>
      </ProjectSection>
    </div>
  );
}
