import { Button } from "@/components/ui/button";
import Image from "next/image";
import SkillCard from "./skill-card";
import { GetSkills } from "@/lib/db/db-getter";
import SkillsList from "./skill-list";

export default function Skills() {
  const skills = GetSkills("language");
  return (
    <div>
      <h1 className="mb-4 text-2xl">Técnologias utilizadas</h1>
      <h1 className="ml-16 text-xl mb-4">Backend</h1>
      <div className="grid grid-cols-4 gap-8 mx-16">
        <SkillsList type="backend" />
      </div>
      <h1 className="ml-16 mt-16 text-xl mb-4">Frontend</h1>
      <div className="grid grid-cols-4 gap-8 mx-16">
        <SkillsList type="frontend" />
      </div>
      <h1 className="ml-16 mt-16 text-xl mb-4">Linguagens de programação</h1>
      <div className="grid grid-cols-4 gap-8 mx-16">
        <SkillsList type="language" />
      </div>
      <h1 className="ml-16 mt-16 text-xl mb-4">Outros</h1>
      <div className="grid grid-cols-4 gap-8 mx-16">
        <SkillsList type="other" />
      </div>
    </div>
  );
}
