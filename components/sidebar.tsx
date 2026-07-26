import { Building2, Code, Monitor } from "lucide-react";
import { motion } from "motion/react";
import { ReactElement, RefObject } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";

export default function SideBar(props: {
  projectsRef: RefObject<HTMLDivElement | null>;
  experiencesRef: RefObject<HTMLDivElement | null>;
  skillsRef: RefObject<HTMLDivElement | null>;
}) {
  const { experiencesRef, projectsRef, skillsRef } = props;
  const { t } = useTranslation();
  return (
    <div className="grid min-w-100 gap-16">
      <SideBarButton
        text={t("sidebar.skills")}
        refObject={skillsRef}
        initialDelay={0.5}
        icon={<Code className="size-8" />}
      />
      <SideBarButton
        text={t("sidebar.experiences")}
        refObject={experiencesRef}
        icon={<Building2 className="size-8" />}
        initialDelay={0.6}
      />
      <SideBarButton
        text={t("sidebar.projects")}
        refObject={projectsRef}
        icon={<Monitor className="size-8" />}
        initialDelay={0.7}
      />
    </div>
  );
}

function SideBarButton(props: {
  text: string;
  icon: ReactElement;
  initialDelay: number;
  refObject: RefObject<HTMLDivElement | null>;
}) {
  const { icon, initialDelay, refObject, text } = props;
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 50,
      }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { delay: initialDelay },
      }}
      whileHover={{
        scale: 1.1,
        transition: { delay: 0 },
      }}
    >
      <Button
        onClick={() => {
          refObject?.current?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="w-full grid grid-cols-[auto_1fr_auto] items-center h-30 text-2xl px-4 cursor-pointer"
      >
        {icon}
        <span className="text-center leading-tight whitespace-pre-line">
          {text}
        </span>
        <div className="size-8 invisible" />
      </Button>
    </motion.div>
  );
}
