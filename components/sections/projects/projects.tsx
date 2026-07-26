import { useTranslation } from "react-i18next";
import ProjectsList from "./projects-list";
import { Code, Gamepad2, Joystick, Monitor } from "lucide-react";

export default function Projects() {
  const { t } = useTranslation();
  return (
    <div className="mt-32">
      <h1 className="mb-4 ml-16 text-4xl">{t("sections.projects")}</h1>
      <div>
        <h1 className="ml-16 text-center text-2xl flex justify-center items-center gap-4 mb-4">
          <Monitor className="size-8" /> {t("sections.web")}
        </h1>
        <div className="mx-16 mb-4 grid grid-cols-2 gap-8">
          <ProjectsList type="web" />
        </div>
      </div>
      <div className="mt-32">
        <h1 className="ml-16 text-center text-2xl flex justify-center items-center gap-4 mb-4">
          <Gamepad2 className="size-8" /> {t("sections.games")}
        </h1>
        <div className="mx-16 mb-4 grid grid-cols-2 gap-8">
          <ProjectsList type="game" />
        </div>
      </div>
      <div className="mt-32">
        <h1 className="ml-16 text-center text-2xl flex justify-center items-center gap-4 mb-4">
          <Code className="size-8" /> {t("sections.others")}
        </h1>
        <div className="mx-16 mb-4 grid grid-cols-2 gap-8">
          <ProjectsList type="other" />
        </div>
      </div>
    </div>
  );
}
