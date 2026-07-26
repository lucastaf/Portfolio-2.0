import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SkillBadge from "../professional-experiencies/skill-badge";

export default function ProjectCard() {
  return (
    <Card>
      <CardContent>
        <Image
          src="/projects/plataforma-sp-capital.png"
          alt="demo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="rounded-2xl"
        />
        <div className="my-2">
          <h1 className="text-xl flex gap-2">
            Plataforma SP Capital{" "}
            <Link href={"https://plataforma.spcapital.com.br"}>
              {" "}
              <ExternalLink />
            </Link>
          </h1>
          <h1 className="text-xs">2025</h1>
        </div>
        <p>
          Plataforma interna utilizada pela empresa SP Capital para gestão de
          leads
        </p>
        <div className="flex gap-2 mt-4">
          <SkillBadge />
          <SkillBadge />
          <SkillBadge />
        </div>
      </CardContent>
    </Card>
  );
}
