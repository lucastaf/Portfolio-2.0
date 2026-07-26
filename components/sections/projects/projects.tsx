import { Code, Gamepad2, Monitor } from "lucide-react";
import { ReactElement, Ref } from "react";
import { useTranslation } from "react-i18next";
import ProjectsList from "./projects-list";
import { projectType } from "@/lib/db/db-types";

export default function Projects(props: { ref: Ref<HTMLDivElement> }) {
  const { ref } = props;
  const { t } = useTranslation();
  return (
    <div className="mt-32 scroll-mt-32" ref={ref}>
      <h1 className="mb-4 ml-16 text-4xl">{t("sections.projects")}</h1>
      <ProjectsSection
        title={t("sections.web")}
        icon={<Monitor className="size-8" />}
        type="web"
      />
      <div className="my-32" />
      <ProjectsSection
        title={t("sections.games")}
        icon={<Gamepad2 className="size-8" />}
        type="game"
      />
      <div className="my-32" />
      <ProjectsSection
        title={t("sections.others")}
        icon={<Code className="size-8" />}
        type="other"
      />
    </div>
  );
}

function ProjectsSection(props: {
  title: string;
  icon: ReactElement;
  type: projectType;
}) {
  const { icon, title, type } = props;
  return (
    <div>
      <div className="grid grid-cols-[1fr_auto_1fr] gap-2 items-center mb-4">
        <div className="justify-self-end mr-2">{icon}</div>
        <h1 className="text-2xl">{title}</h1>
        <div />
      </div>
      <div className="mx-16 mb-4 grid grid-cols-2 gap-8">
        <ProjectsList type={type} />
      </div>
    </div>
  );
}
