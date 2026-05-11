import ProjectPageHeader from "@/components/project-page-header";
import ProjectSection from "@/components/project-section";
import Image from "next/image";
import Link from "next/link";

export default function GoSandbox() {
  return (
    <div className="w-full flex flex-col gap-y-10 pb-16">
      <ProjectPageHeader
        title="Go Sandbox"
        externalLabel="GitHub repo"
        externalHref="https://github.com/fs1g17/go-sandbox"
      />

      <ProjectSection num="01" heading="Demo">
        <video
          controls
          src={"/videos/go-sandbox-demo.mp4"}
          autoPlay
          playsInline
          muted
          className="w-full aspect-auto grayscale rounded-sm"
        />
      </ProjectSection>

      <ProjectSection num="02" heading="What problem does it solve?">
        <p>
          There are plenty of expensive interview platforms for performing
          technical interviews in a plethora of languages. I wanted to build
          something that is completely self-hosted, free and fully open-source.
        </p>
      </ProjectSection>

      <ProjectSection num="03" heading="What does it do?">
        <p>
          Go Sandbox is a tool that allows small teams to perform coding
          interviews in Golang. The main features are:
          <ul
            className="ml-4 list-disc"
            style={{ color: "var(--muted-foreground)" }}
          >
            <li>collaborative editing</li>
            <li>remote execution</li>
            <li>session splitting</li>
          </ul>
        </p>
      </ProjectSection>

      <ProjectSection num="04" heading="Tech approach">
        <p>
          I have details blog posts on the development process and the technical
          approach:
          <ul
            className="ml-4 list-disc"
            style={{ color: "var(--muted-foreground)" }}
          >
            <li>
              <Link
                target="_blank"
                href="https://levelup.gitconnected.com/building-a-collaborative-go-sandbox-part-1-remote-execution-3c1945cee7af"
                className="underline"
              >
                Building a Collaborative Go Sandbox: Part 1 (Remote Execution)
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="https://levelup.gitconnected.com/building-a-collaborative-go-sandbox-part-2-collaborative-editing-43ea43004f3a"
                className="underline"
              >
                Building a Collaborative Go Sandbox: Part 2 (Collaborative
                Editing)
              </Link>
            </li>
          </ul>
        </p>

        <p>
          In short, there are 3 parts to the project. The "remote-execution" and
          "yjs-websocket-server" backend services, and a nextjs frontend.
        </p>

        <p>
          The "remote-execution" backend service is a Go server that accepts a
          map of file names to their content, writes these files to the
          appropraite session directory which is mounted as a volume to a docker
          container, which are then executed inside the docker container.
        </p>

        <p>
          The "yjs-websocket-server" serves as a centralised server that
          facilitates communication between the yjs clients, where each session
          is serves as a separate "room". Initially I used WebRTC provider, but
          I stumbled upon concurrency issues - it was impossible to load the
          files from the "remote-execution" server reliably. Switching to a
          websocket server allowed me to bypass this issue: the
          "yjs-websocket-server" service initialises the yjs document, and then
          any clients that connect to it will get the state that is synchronised
          with the "remote-execution" server.
        </p>

        <p>The nextjs frontend simply brings everything together.</p>

        <Image
          src="/go-sandbox/go-sandbox.png"
          width={1000}
          height={1000}
          className="w-full"
          alt="Service communication diagram"
        />
      </ProjectSection>
    </div>
  );
}
