import { Download } from "lucide-react";

export default function CV() {
  return (
    <div className="w-full flex-col gap-y-[200px] pb-10">
      <a href="/Fedor Selenskiy CV.pdf" download>
        <div className="flex items-center gap-x-4">
          <h1>Fedor Selenskiy CV</h1>
          <Download />
        </div>
      </a>

      <div>
        <h3 className="w-full border-b-2 border-b-gray-500">Summary</h3>
        <p className="text-muted-foreground">
          Passionate full-stack developer, experienced with React/NextJs
          (TypeScript) and NodeJs (TypeScript/JavaScript), with past experience
          with Spring (Java), currently working as a consultant developer. Keep
          a medium blog on React and maths, love all things tech related.
        </p>
      </div>

      <div>
        <h3 className="w-full border-b-2 border-b-gray-500">Skills</h3>
        <div className="flex gap-x-4">
          <p className="text-muted-foreground">Technical:</p>
          <p className="text-muted-foreground">
            JavaScript, TypeScript, React, React Native, NodeJs, NextJs, Java,
            Python, Spring, Express, Selenium, JUnit, jest, PostgreSQL, SQLite,
            MDB, Android, Figma, Docker, Git, Maven, Gradle, Jira
          </p>
        </div>
      </div>

      <div>
        <h3 className="w-full border-b-2 border-b-gray-500">Work Experience</h3>
        <div className="flex flex-col gap-y-4">
          <WorkExperience
            job="Capgemini Invent"
            location="London (Remote)"
            title="Software Development Consultant"
            date="Oct 2022 - present"
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
            date="Sep 2021 - Oct 2022"
            parts={[
              {
                description:
                  "Help develop a user-friendly web application for interacting with the company’s business rules engine.",
                bulletPoints: [
                  "Building secure RESTful API endpoints using Spring (Java) which supports authentication using SAML and OAuth2.",
                  "Developing UI in React (TypeScript) for a web SaaS with users in 6 different industries spanning 4 countries.",
                  "Asserting a minimum of 80% test coverage using JUnit and Selenium testing frameworks.",
                  "Maintaining a PostgreSQL database.",
                ],
              },
            ]}
          />
          <WorkExperience
            job="Impression Agency"
            location="Remote"
            title="Software Developer"
            date="May 2021 - Jul 2021"
            parts={[
              {
                description:
                  "Contracted to develop a tool for for automating competitor analysis.",
                bulletPoints: [
                  "Automated YouTuber sponsor competitor analysis, speeding up to be less than 1 minute.",
                  "Removed the need to do the task by hand, skyrocketing productivity.",
                ],
              },
            ]}
          />
        </div>
      </div>

      <div>
        <h3 className="w-full border-b-2 border-b-gray-500">Education</h3>
        <div className="flex flex-col gap-y-4">
          <Education
            date="2017 - 2021"
            location="MEng Computer Science, Univeristy of Southampton"
            grades="2:1"
          />
          <Education
            date="2015 - 2017"
            location="A Levels, Northgate Sixth Form"
            grades="A* A* A* B B"
          />
          <Education
            date="2011 - 2015"
            location="GCSEs, Northgate High School"
            grades="10 GCSEs A* - C"
          />
        </div>
      </div>
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
    <div className="text-muted-foreground">
      <p>
        <span className="font-bold italic">{job},</span> {location}:{" "}
        <span className="italic">{title}</span>
      </p>
      <p>{date}</p>
      {parts.map(({ description, bulletPoints }) => (
        <>
          <p>{description}</p>
          <ul className="ml-4 marker:text-inherit list-disc	m-0 italic">
            {bulletPoints.map((point) => (
              <li className="m-0">{point}</li>
            ))}
          </ul>
        </>
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
    <div>
      <div className="flex gap-x-4">
        <p className="text-muted-foreground m-0">{date}</p>
        <div className="flex flex-col">
          <p className="text-muted-foreground font-bold m-0">{location}</p>
          <p className="text-muted-foreground m-0">{grades}</p>
        </div>
      </div>
    </div>
  );
}
