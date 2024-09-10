import ProjectCard from "./project-card";

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
      <ProjectCard
        project={{
          projectUrl: "/anymate.video",
          projectTitle: "anymate.video",
          projectDescription:
            "Jira for teams of animators. A place to track progress of animation.",
        }}
      />
      <ProjectCard
        project={{
          projectUrl: "/starhaze.me",
          projectTitle: "starhaze.me",
          projectDescription: "The simplest way to collect user feedback.",
        }}
      />
      <ProjectCard
        project={{
          projectUrl: "/sponsor_spotter",
          projectTitle: "sponsor spotter",
          projectDescription:
            "Competitor analysis tool for marketing agencies working with YouTubers",
        }}
      />
      <ProjectCard
        project={{
          projectUrl: "/wls_pro",
          projectTitle: "wls pro",
          projectDescription:
            "Fully automated and AI driven public blog network",
        }}
      />
      <ProjectCard
        project={{
          projectUrl: "/flash_format",
          projectTitle: "flash format",
          projectDescription: "Online image format converter",
        }}
      />
      <ProjectCard
        project={{
          projectUrl: "/mercante",
          projectTitle: "mercante",
          projectDescription: "User friendly RAG SaaS",
        }}
      />
    </div>
  );
}
