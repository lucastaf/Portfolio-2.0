import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { experience, languages } from "@/lib/db/db-types";
import { formatDateMonthYear } from "@/lib/format-date";
import Image from "next/image";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import SkillBadge from "../skill-badge";

export default function ExperienceDialog(props: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  experience: experience;
}) {
  const { onOpenChange, open, experience } = props;

  const { t, i18n } = useTranslation();
  const formattedDates = useMemo(() => {
    const startDate = formatDateMonthYear(experience.started_at)!;
    const endDate = formatDateMonthYear(experience.ended_at);

    return {
      started_at: startDate,
      ended_at: endDate ?? t("misc.present"),
    };
  }, [experience, t]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={"min-w-1/2 max-h-[80vh] flex flex-col"}>
        <DialogHeader />
        <div className="flex-1 overflow-y-auto">
          <div className="flex">
            <div className="relative mr-4 mb-4 w-20 md:w-35 shrink-0 aspect-square">
              <Image
                className="rounded-xl"
                src={experience.logo}
                alt="logo"
                fill
              />
            </div>
            <div>
              <h1 className="text-3xl">{experience.title}</h1>
              <h2>
                {experience.location ?? t("misc.remote")},{" "}
                {formattedDates.started_at} - {formattedDates.ended_at}
              </h2>
              <h2 className="mt-2">
                {experience.role_description[i18n.language as languages]}
              </h2>
            </div>
          </div>
          <div className="max-h-fit overflow-y-hidden">
            <div className="flex flex-wrap gap-2 mb-4 ml-2">
              {" "}
              {experience.skills.map((skill, index) => (
                <SkillBadge skill={skill} key={index} />
              ))}
            </div>
            <div>
              <ul className="text-base">
                {experience.achievements.map((item, index) => (
                  <li key={index}>• {item[i18n.language as languages]}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
