"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import ExperienceDialog from "./experience-dialog";
import { experience, languages } from "@/lib/db/db-types";
import { formatDateMonthYear } from "@/lib/format-date";
import { useTranslation } from "react-i18next";

export default function ExperienceCard(props: { experience: experience }) {
  const { t, i18n } = useTranslation();
  const { experience } = props;
  const [dialogOpen, setDialogOpen] = useState(false);

  const formattedDates = useMemo(() => {
    const startDate = formatDateMonthYear(experience.started_at)!;
    const endDate = formatDateMonthYear(experience.ended_at);

    return {
      started_at: startDate,
      ended_at: endDate ?? t("misc.present"),
    };
  }, [experience, t]);

  return (
    <>
      <ExperienceDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        experience={experience}
      />
      <motion.div
        className="flex cursor-pointer"
        onClick={() => {
          setDialogOpen(true);
        }}
        whileHover={{
          scale: 1.03,
        }}
        initial={{
          opacity: 0,
          x: -50,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
      >
        <div className="relative max-lg:w-[30%] lg:w-35 shrink-0 aspect-square mr-4 rounded-xl">
            <Image
              src={experience.logo}
              alt="logo"
              className="rounded-xl"
              fill
            />
        </div>
        <div className="max-lg:w-[70%] min-w-0">
          <h1 className="text-3xl">{experience.title}</h1>
          <h2>
            {experience.location ?? t("misc.remote")},{" "}
            {formattedDates.started_at} - {formattedDates.ended_at}
          </h2>
          <h2 className="mt-2">
            {experience.role_description[i18n.language as languages]}
          </h2>
        </div>
      </motion.div>
    </>
  );
}
