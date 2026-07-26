import { useTranslation } from "react-i18next";
import ProjectsList from "./projects-list";

export default function Projects() {
  const {t} = useTranslation();
  return (
    <div>
      <h1 className="mb-4 text-2xl">{t("sections.projects")}</h1>
      <h1 className="ml-16 text-xl mb-4">{t("sections.web")}</h1>
      <div className="mx-16 mb-4 grid grid-cols-2 gap-8">
        <ProjectsList type="web" />
      </div>
      <h1 className="ml-16 text-xl mb-4 mt-16">{t("sections.games")}</h1>
      <div className="mx-16 mb-4 grid grid-cols-2 gap-8">
        <ProjectsList type="game" />
      </div>
      <h1 className="ml-16 text-xl mb-4 mt-16">{t("sections.others")}</h1>
      <div className="mx-16 mb-4 grid grid-cols-2 gap-8">
        <ProjectsList type="other" />
      </div>
    </div>
  );
}
