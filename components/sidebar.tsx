import { Building2, GraduationCap, Monitor } from "lucide-react";
import { Button } from "./ui/button";

export default function SideBar() {
  return (
    <div className="grid min-w-100 gap-16">
      <Button className="grid grid-cols-[auto_1fr_auto] items-center h-30 text-2xl px-4">
        <Monitor className="size-8" />
        <span className="text-center">Projetos</span>
        <div className="size-8 invisible" />
      </Button>

      <Button className="grid grid-cols-[auto_1fr_auto] items-center h-30 text-2xl px-4">
        <Building2 className="size-8" />
        <span className="text-center leading-tight">
          Experiências <br />
          profissionais
        </span>
        <div className="size-8 invisible" />
      </Button>

      <Button className="grid grid-cols-[auto_1fr_auto] items-center h-30 text-2xl px-4">
        <GraduationCap className="size-8" />
        <span className="text-center leading-tight">
          Formação <br />
          acadêmica
        </span>
        <div className="size-8 invisible" />
      </Button>
    </div>
  );
}
