import { Building2, Code, GraduationCap, Monitor } from "lucide-react";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

export default function SideBar() {
  const { t } = useTranslation();
  return (
    <div className="grid min-w-100 gap-16">
      <Button className="grid grid-cols-[auto_1fr_auto] items-center h-30 text-2xl px-4">
        <Code className="size-8" />
        <span className="text-center leading-tight whitespace-pre-line">
          {t("sidebar.skills")}
        </span>
        <div className="size-8 invisible" />
      </Button>

      <Button className="grid grid-cols-[auto_1fr_auto] items-center h-30 text-2xl px-4">
        <Building2 className="size-8" />
        <span className="text-center leading-tight whitespace-pre-line">
          {t("sidebar.experiences")}
        </span>
        <div className="size-8 invisible" />
      </Button>

      <Button className="grid grid-cols-[auto_1fr_auto] items-center h-30 text-2xl px-4">
        <Monitor className="size-8" />
        <span className="text-center whitespace-pre-line">
          {t("sidebar.projects")}
        </span>
        <div className="size-8 invisible" />
      </Button>
    </div>
  );
}
