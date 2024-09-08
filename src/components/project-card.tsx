import { Project } from "@/types/project";
import { Button } from "./ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function ProjectCard({
  project: { projectTitle, projectDescription },
}: {
  project: Project;
}) {
  return (
    <Card className="w-full hover:shadow-custom-shadow">
      <CardHeader>
        <CardTitle>{projectTitle}</CardTitle>
        <CardDescription>{projectDescription}</CardDescription>
      </CardHeader>
    </Card>
  );
}
