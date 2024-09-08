import InfiniteScroll from "@/components/infinite-scroll";
import ProjectCard from "@/components/project-card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-y-[75px] pt-20 pb-10">
      <div className="bg-gradient-to-r from-accent from-30% to-primary inline-block text-transparent  bg-clip-text text-center justify-self-center">
        <h1>Hi, I'm Theo</h1>
        <h5>Passionate full-stack developer</h5>
      </div>
      <div className="w-full flex flex-col">
        <h2>About Me</h2>
        <p>
          I love building stuff that solves people's pain points. I keep a blog
          about programming and maths, and occasionally post YouTube videos
          about programming.
        </p>

        <div className="flex gap-x-8 mx-auto">
          <Link
            href="https://www.linkedin.com/in/fedor-selenskiy/"
            target="_blank"
          >
            <Image src="linkedin.svg" width={50} height={50} alt="linkedin" />
          </Link>
          <Link href="https://medium.com/@fedor.selenskiy" target="_blank">
            <Image src="medium.svg" width={50} height={50} alt="medium" />
          </Link>
          <Link href="https://www.youtube.com/@AquilexTalent" target="_blank">
            <Image src="youtube.svg" width={50} height={50} alt="youtube" />
          </Link>
        </div>
      </div>
      <div className="w-full">
        <h2>Tech Stack</h2>
        <InfiniteScroll />
      </div>
      <div className="w-full">
        <h2>Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
          <ProjectCard
            project={{
              projectTitle: "anymate.video",
              projectDescription:
                "Jira for teams of animators. A place to track progress of animation.",
            }}
          />
          <ProjectCard
            project={{
              projectTitle: "starhaze.me",
              projectDescription: "The simplest way to collect user feedback.",
            }}
          />
          <ProjectCard
            project={{
              projectTitle: "sponsor spotter",
              projectDescription:
                "Competitor analysis tool for marketing agencies working with YouTubers",
            }}
          />
          <ProjectCard
            project={{
              projectTitle: "wls pro",
              projectDescription:
                "Fully automated and AI driven public blog network",
            }}
          />
          <ProjectCard
            project={{
              projectTitle: "flash format",
              projectDescription: "Online image format converter",
            }}
          />
          <ProjectCard
            project={{
              projectTitle: "mercante",
              projectDescription: "User friendly RAG SaaS",
            }}
          />
        </div>
      </div>
    </div>
  );
}
