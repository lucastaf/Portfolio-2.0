import { Card, CardContent } from "@/components/ui/card";
import { languages, project } from "@/lib/db/db-types";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import SkillBadge from "../skill-badge";

export default function ProjectCard(props: { project: project }) {
  const { project } = props;
  const { i18n } = useTranslation();
  return (
    <Card>
      <CardContent className="flex flex-col justify-between h-full">
        <div>
          <Image
            src={project.banner}
            alt="demo"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              aspectRatio: "20/9",
              objectFit: "cover",
            }}
            className="rounded-2xl"
          />
          <div className="my-2">
            <h1 className="text-xl flex gap-2">
              {project.title[i18n.language as languages]}
              {project.external_link && (
                <Link href={project.external_link}>
                  {" "}
                  <ExternalLink />
                </Link>
              )}
            </h1>
            <h1 className="text-xs">{project.date}</h1>
          </div>
          <p>{project.description[i18n.language as languages]}</p>
        </div>
        <div className="flex gap-2 mt-4 flex-wrap">
          {project.skills.map((skill, index) => (
            <SkillBadge key={index} skill={skill} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
