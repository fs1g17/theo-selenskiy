import { Download } from "lucide-react";
import Link from "next/link";

export default function CV() {
  return (
    <div className="w-full flex flex-col gap-y-14 pb-16 pt-8">

      {/* Header */}
      <div className="flex flex-col gap-y-3">
        <div className="flex items-center gap-3 mb-1">
          <span
            className="text-xs tracking-[0.2em] uppercase"
            style={{ color: "var(--accent-color)", fontFamily: "var(--font-geist-mono)" }}
          >
            Curriculum Vitae
          </span>
          <div className="flex-1 h-px" style={{ background: "var(--border-color)" }} />
        </div>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h1 className="m-0" style={{ fontFamily: "var(--font-cormorant)" }}>
            Fedor Selenskiy
          </h1>
          <a
            href="/Fedor Selenskiy CV.pdf"
            download
            className="flex items-center gap-2 text-sm px-4 py-2 border transition-all duration-200 hover:border-accent hover:text-accent"
            style={{ borderColor: "var(--border-color)", color: "var(--muted-foreground)", borderRadius: "var(--radius)" }}
          >
            <Download size={14} />
            Download PDF
          </a>
        </div>
      </div>

      {/* Summary */}
      <section>
        <SectionHeader>Summary</SectionHeader>
        <p style={{ color: "var(--muted-foreground)" }}>
          Passionate full-stack developer, experienced with React/NextJs
          (TypeScript) and NodeJs (TypeScript/JavaScript), with past experience
          with Spring (Java), currently working as founding software developer.
          Keep a medium blog on React and maths, love all things tech related.
        </p>
      </section>

      {/* Skills */}
      <section>
        <SectionHeader>Skills</SectionHeader>
        <div className="flex flex-wrap gap-2">
          {[
            "JavaScript", "TypeScript", "React", "NextJs", "TailwindCss",
            "Jest", "NodeJs", "Express", "Docker", "Git"
          ].map((skill) => (
            <span
              key={skill}
              className="text-xs px-2.5 py-1 border"
              style={{
                borderColor: "var(--border-color)",
                color: "var(--muted-foreground)",
                borderRadius: "var(--radius)",
                fontFamily: "var(--font-geist-mono)",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Work Experience */}
      <section>
        <SectionHeader>Work Experience</SectionHeader>
        <div className="flex flex-col gap-y-8">
          <WorkExperience
            job="Ai-UP (Startup)"
            location="Moscow (Remote)"
            title="Founding Software Engineer"
            date="Oct 2024 – present"
            parts={[
              {
                description:
                  "Working as part of a team of 3 founding engineers to create and scale a B2B, lead-generation SaaS product.",
                bulletPoints: [
                  "Took a leading role for the front-end development of the web app with NextJs using TypeScript.",
                  "Built a coherent design system with shadcn and TailwindCss.",
                  "Optimized performance by managing server state with react-query and client state with zustand.",
                  "Helped scale to over 10,000 users, with 44% conversion rate to paid users in a year.",
                  "Delivered an MVP within 1 month, allowing us to become profitable by the 2nd month.",
                ],
              },
            ]}
          />

          <WorkExperience
            job="Capgemini Invent"
            location="London (Remote)"
            title="Software Development Consultant"
            date="Oct 2022 – Oct 2024"
            parts={[
              {
                description:
                  "Building a healthcare solution that automates SR1 form submission for a greenfield project.",
                bulletPoints: [
                  "Took on the leading role for the front-end development in creating a server-side rendered app in Node with TypeScript.",
                  "Collaborated with User Research and Design to optimize user journey and accelerated prototype completion.",
                  "Empowered more junior colleagues to continuously improve with pair programming sessions and in-depth code reviews.",
                  "Ensured over 99% test coverage with Mocha test framework",
                ],
              },
              {
                description:
                  "Helped develop a SaaS PoC for monitoring company CO2 emissions for investors.",
                bulletPoints: [
                  "Contributed to front-end development of a web-app using React with TypeScript",
                  "Ensured over 90% test coverage with Jest",
                ],
              },
            ]}
          />

          <WorkExperience
            job="1Spatial"
            location="Cambridge"
            title="Full-stack software developer"
            date="Sep 2021 – Oct 2022"
            parts={[
              {
                description:
                  "Help develop a user-friendly web application for interacting with the company's business rules engine.",
                bulletPoints: [
                  "Building secure RESTful API endpoints using Spring (Java) which supports authentication using SAML and OAuth2.",
                  "Developing UI in React (TypeScript) for a web SaaS with users in 6 different industries spanning 4 countries.",
                  "Asserting a minimum of 80% test coverage using JUnit and Selenium testing frameworks.",
                  "Maintaining a PostgreSQL database.",
                ],
              },
            ]}
          />
        </div>
      </section>

      {/* Education */}
      <section>
        <SectionHeader>Education</SectionHeader>
        <div className="flex flex-col gap-y-4">
          <Education
            date="2017 – 2021"
            location="MEng Computer Science, University of Southampton"
            grades="2:1"
          />
          <Education
            date="2015 – 2017"
            location="A Levels, Northgate Sixth Form"
            grades="A* A* A* B B"
          />
          <Education
            date="2011 – 2015"
            location="GCSEs, Northgate High School"
            grades="10 GCSEs A* – C"
          />
        </div>
      </section>
    </div>
  );
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <h3
        className="m-0 whitespace-nowrap"
        style={{ fontFamily: "var(--font-cormorant)", color: "var(--foreground)" }}
      >
        {children}
      </h3>
      <div className="flex-1 h-px" style={{ background: "var(--accent-color)", opacity: 0.4 }} />
    </div>
  );
}

interface WorkExperiencePart {
  description: string;
  bulletPoints: string[];
}

function WorkExperience({
  job,
  location,
  title,
  date,
  parts,
}: {
  job: string;
  location: string;
  title: string;
  date: string;
  parts: WorkExperiencePart[];
}) {
  return (
    <div
      className="border-l-2 pl-5 pb-1"
      style={{ borderColor: "var(--border-color)" }}
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
        <div>
          <span
            className="font-semibold text-base"
            style={{ color: "var(--foreground)", fontFamily: "var(--font-cormorant)", fontSize: "1.15rem" }}
          >
            {job}
          </span>
          <span style={{ color: "var(--muted-foreground)" }} className="text-sm">
            {" "}· {location}
          </span>
        </div>
        <span
          className="text-xs shrink-0"
          style={{ color: "var(--accent-color)", fontFamily: "var(--font-geist-mono)" }}
        >
          {date}
        </span>
      </div>
      <p className="text-sm italic m-0 mb-3" style={{ color: "var(--muted-foreground)" }}>
        {title}
      </p>
      {parts.map(({ description, bulletPoints }, i) => (
        <div key={i}>
          <p className="text-sm m-0 mb-1.5" style={{ color: "var(--muted-foreground)" }}>
            {description}
          </p>
          <ul
            className="ml-4 list-disc m-0 mb-3"
            style={{ color: "var(--muted-foreground)" }}
          >
            {bulletPoints.map((point) => (
              <li key={point} className="text-sm m-0 mb-0.5">
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Education({
  date,
  location,
  grades,
}: {
  date: string;
  location: string;
  grades: string;
}) {
  return (
    <div className="flex gap-x-6 items-baseline">
      <span
        className="text-xs shrink-0 w-24"
        style={{ color: "var(--accent-color)", fontFamily: "var(--font-geist-mono)" }}
      >
        {date}
      </span>
      <div>
        <p className="font-medium m-0 text-sm" style={{ color: "var(--foreground)" }}>
          {location}
        </p>
        <p className="text-xs m-0 mt-0.5" style={{ color: "var(--muted-foreground)" }}>
          {grades}
        </p>
      </div>
    </div>
  );
}
