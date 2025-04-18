import { Project } from "@/types/project";
import ProjectCard from "./project-card";

const projects: Project[] = [
  {
    projectUrl: "/anymate.video",
    projectTitle: "anymate.video",
    projectDescription:
      "Jira for teams of animators. A place to track progress of animation.",
  },
  {
    projectUrl: "/starhaze.me",
    projectTitle: "starhaze.me",
    projectDescription: "The simplest way to collect user feedback.",
  },
  {
    projectUrl: "/sponsor_spotter",
    projectTitle: "sponsor spotter",
    projectDescription:
      "Competitor analysis tool for marketing agencies working with YouTubers",
  },
  {
    projectUrl: "/wls_pro",
    projectTitle: "wls pro",
    projectDescription: "Fully automated and AI driven public blog network",
  },
  {
    projectUrl: "/flash_format",
    projectTitle: "flash format",
    projectDescription: "Online image format converter",
  },
  {
    projectUrl: "/mercante",
    projectTitle: "mercante",
    projectDescription: "User friendly RAG SaaS",
  },
  {
    projectUrl: "/okr-tracker",
    projectTitle: "OKR Tracker",
    projectDescription: "Objective and Key Result tracker and visualizer",
  },
];

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
      {projects.map((project) => (
        <ProjectCard project={project} key={project.projectTitle} />
      ))}
    </div>
  );
}
