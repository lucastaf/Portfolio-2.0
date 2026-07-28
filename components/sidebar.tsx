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
    <div className="grid xl:grid-cols-1 grid-cols-3 xl:min-w-100 max-xl:w-full xl:gap-16 gap-2">
      <SideBarButton
        text={t("sidebar.skills")}
        refObject={skillsRef}
        initialDelay={0.5}
        icon={<Code className="xl:size-8 max-xl:hidden" />}
      />
      <SideBarButton
        text={t("sidebar.experiences")}
        refObject={experiencesRef}
        icon={<Building2 className="xl:size-8 max-xl:hidden" />}
        initialDelay={0.6}
      />
      <SideBarButton
        text={t("sidebar.projects")}
        refObject={projectsRef}
        icon={<Monitor className="xl:size-8 max-xl:hidden" />}
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
        className="w-full grid max-xl:grid-cols-1 xl:grid-cols-[auto_1fr_auto] items-center xl:h-30 h-15 xl:text-2xl px-4 cursor-pointer"
      >
        {icon}
        <span className="text-center xl:leading-tight whitespace-pre-line">
          {text}
        </span>
        <div className="xl:size-8 xl:invisible hidden" />
      </Button>
    </motion.div>
  );
}
