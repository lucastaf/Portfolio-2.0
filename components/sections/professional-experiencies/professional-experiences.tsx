import { Ref } from "react";
import { useTranslation } from "react-i18next";
import ExperienceList from "./experience-list";

export default function ProfessionalExperiences(props: { ref: Ref<HTMLDivElement> }) {
  const { ref } = props;
  const { t } = useTranslation();
  return (
    <div ref={ref} className="scroll-mt-32 md:mx-16">
      <h1 className="mb-4 text-4xl">
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
