import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SkillBadge from "../skill-badge";
import { project } from "@/lib/db/db-types";

export default function ProjectCard(props: { project: project }) {
  const { project } = props;
  return (
    <Card>
      <CardContent>
        <Image
          src={project.banner}
          alt="demo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="rounded-2xl"
        />
        <div className="my-2">
          <h1 className="text-xl flex gap-2">
            {project.title["pt-br"]}
            <Link href={project.external_link}>
              {" "}
              <ExternalLink />
            </Link>
          </h1>
          <h1 className="text-xs">{project.date}</h1>
        </div>
        <p>{project.description["pt-br"]}</p>
        <div className="flex gap-2 mt-4">
          {project.skills.map((skill, index) => (
            <SkillBadge key={index} skill={skill} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
