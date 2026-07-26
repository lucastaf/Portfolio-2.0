import Image from "next/image";
import ExperienceCard from "./experience-card";
import ExperienceList from "./experience-list";
import { useTranslation } from "react-i18next";

export default function ProfessionalExperiences() {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="mb-4 text-2xl">
        {t("sections.professional_experiences")}
      </h1>
      <div className="flex flex-col gap-4">
        <ExperienceList type="job" />
      </div>
      <h1 className="mb-4 mt-8 text-2xl">
        {t("sections.academic_background")}
      </h1>
      <div className="flex flex-col gap-4">
        <ExperienceList type="education" />
      </div>
    </div>
  );
}
