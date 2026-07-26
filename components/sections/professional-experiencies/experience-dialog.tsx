import {
  Dialog,
  DialogContent,
  DialogHeader
} from "@/components/ui/dialog";
import { experience } from "@/lib/db/db-types";
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

  const {t} = useTranslation();
  const formattedDates = useMemo(() => {
    const startDate = formatDateMonthYear(experience.started_at)!;
    const endDate = formatDateMonthYear(experience.ended_at);

    return {
      started_at: startDate,
      ended_at: endDate ?? "Presente",
    };
  }, [experience]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={"min-w-1/2"}>
        <DialogHeader></DialogHeader>
        <div>
          <div className="flex">
            <Image src={experience.logo} alt="logo" width={150} height={150} />
            <div>
              <h1 className="text-3xl">{experience.title}</h1>
              <h2>
                {experience.location ?? t("misc.remote")}, {formattedDates.started_at} -{" "}
                {formattedDates.ended_at}
              </h2>
              <h2 className="mt-2">{experience.role_description["pt-BR"]}</h2>
            </div>
          </div>
          <div className="flex gap-2 mb-2 ml-2">
            {" "}
            {experience.skills.map((skill, index) => (
              <SkillBadge skill={skill} key={index} />
            ))}
          </div>
          <ul className="text-sm">
            {experience.achievements.map((item, index) => (
              <li key={index}>• {item["pt-BR"]}</li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
