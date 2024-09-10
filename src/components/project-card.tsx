import { Project } from "@/types/project";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";

export default function ProjectCard({
  project: { projectUrl, projectTitle, projectDescription },
}: {
  project: Project;
}) {
  return (
    <Link href={projectUrl}>
      <Card className="w-full hover:shadow-custom-shadow h-full">
        <CardHeader>
          <CardTitle>{projectTitle}</CardTitle>
          <CardDescription>{projectDescription}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
