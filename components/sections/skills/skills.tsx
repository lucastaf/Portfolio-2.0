import { Ref } from "react";
import { useTranslation } from "react-i18next";
import SkillsList from "./skill-list";

export default function Skills(props: { ref: Ref<HTMLDivElement> }) {
  const { ref } = props;
  const { t } = useTranslation();
  return (
    <div ref={ref} className="scroll-mt-32">
      <h1 className="mb-4 ml-16 text-4xl">{t("sections.skills")}</h1>
      <h1 className="ml-16 text-xl mb-4">{t("sections.backend")}</h1>
      <div className="grid grid-cols-4 gap-8 mx-16">
        <SkillsList type="backend" />
      </div>
      <h1 className="ml-16 mt-16 text-xl mb-4">{t("sections.frontend")}</h1>
      <div className="grid grid-cols-4 gap-8 mx-16">
        <SkillsList type="frontend" />
      </div>
      <h1 className="ml-16 mt-16 text-xl mb-4">
        {t("sections.programming_languages")}
      </h1>
      <div className="grid grid-cols-4 gap-8 mx-16">
        <SkillsList type="language" />
      </div>
      <h1 className="ml-16 mt-16 text-xl mb-4">{t("sections.others")}</h1>
      <div className="grid grid-cols-4 gap-8 mx-16">
        <SkillsList type="other" />
      </div>
    </div>
  );
}
