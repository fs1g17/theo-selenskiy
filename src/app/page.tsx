import InfiniteScroll from "@/components/infinite-scroll";
import ProjectCard from "@/components/project-card";
import Image from "next/image";
import Link from "next/link";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-y-[75px] pt-20 pb-10">
      <div className="bg-gradient-to-r from-accent from-30% to-primary inline-block text-transparent  bg-clip-text text-center justify-self-center">
        <h1>Hi, I'm Theo</h1>
        <h5>Passionate full-stack developer</h5>
      </div>
      <div className="w-full flex flex-col">
        <h2>About Me</h2>
        <p className="text-muted-foreground">
          I love building stuff that solves people's pain points. I keep a blog
          about programming and maths, and occasionally post YouTube videos
          about programming.
        </p>

        <div className="flex gap-x-8 mx-auto mt-8 items-center">
          <Link
            href="https://www.linkedin.com/in/fedor-selenskiy/"
            target="_blank"
          >
            <Image src="linkedin.svg" width={50} height={50} alt="linkedin" />
          </Link>
          <Link href="https://medium.com/@fedor.selenskiy" target="_blank">
            <Image src="medium.svg" width={50} height={50} alt="medium" />
          </Link>
          <Link href="https://www.youtube.com/@AquilexTalent" target="_blank" className="h-fit">
            <Image src="youtube.svg" width={50} height={50} alt="youtube" className="h-fit" />
          </Link>
        </div>
      </div>
      <div className="w-full">
        <h2>Tech Stack</h2>
        <InfiniteScroll />
      </div>
      <div className="w-full">
        <h2>Projects</h2>
        <Projects />
      </div>
    </div>
  );
}
