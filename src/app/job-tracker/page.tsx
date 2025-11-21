import Link from "next/link";
import Image from "next/image";

export default function JobTracker() {
  return (
    <div className="w-full flex flex-col gap-y-10 pb-10">
      <div className="flex flex-col">
        <h1>JobTracker</h1>
        <Link
          href="https://github.com/fs1g17/JobTracker"
          target="_blank"
          className="text-muted-foreground"
        >
          Check out the GitHub repo (opens in new tab)
        </Link>
      </div>
      <div>
        <h2>Demo</h2>
        <video
          controls
          src={"/videos/job-tracker-demo.mp4"}
          autoPlay
          muted
          className="w-full aspect-auto grayscale"
        />
      </div>
      <div>
        <h2>What problem does it solve?</h2>
        <p className="text-muted-foreground">
          It's easy to lose track of job applications, important emails can get
          easily lost in the inbox.
        </p>
      </div>
      <div>
        <h2>What does it do?</h2>
        <p className="text-muted-foreground">
          This fullstack webapp allows me to easily track all my job
          applications by leveraging AI. It's a kanban board of all my job
          applications, and it gets automatically updated when an email
          regarding a job application is received.
        </p>
      </div>
      <div>
        <h2>Tech approach</h2>
        <p className="text-muted-foreground">The tech-stack is this: The</p>
        <ul className="ml-4 marker:text-muted-foreground text-muted-foreground list-disc	">
          <li>Go on the backend, with PostgreSQL database</li>
          <li>NextJs, TailwindCss, and shadcn on the frontend</li>
          <li>n8n for AI integration</li>
          <li>Docker - everything is dockerised for easy deployment</li>
        </ul>
        <h3>Backend</h3>
        <p className="text-muted-foreground">There are 3 main endpoints:</p>
        <ul className="ml-4 marker:text-muted-foreground text-muted-foreground list-disc	">
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
        <h3>n8n</h3>
        <p className="text-muted-foreground">
          The approach with n8n is quite straightforward:
        </p>
        <Image
          src="/job-tracker/job-tracker-n8n.png"
          width={1000}
          height={100}
          objectFit="contain"
          alt=""
          className="w-full mx-auto grayscale"
        />
        <p className="text-muted-foreground">
          There is a GMail trigger, which activates whenever an email is
          received in the inbox. This is then piped to a text classifier, which
          classifies the email as either "applied", "in_progress", "rejected",
          "offer", or "not a job application". If the email is classified as
          relating to a job application, then the corresponding endpoing is
          called.
        </p>
        <p className="text-muted-foreground">
          However, if any data is missing (i.e. it's not clear which company or
          what role the email is talking about), then the "notification"
          endpoint is called so that I never miss important emails.
        </p>
      </div>
    </div>
  );
}
