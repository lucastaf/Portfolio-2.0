import { Button } from "@/components/ui/button";
import Image from "next/image";
import SkillCard from "./skill-card";

export default function Skills() {
  return (
    <div>
      <h1 className="mb-4 text-2xl">Técnologias utilizadas</h1>
      <h1 className="ml-16 text-xl mb-4">Backend</h1>
      <div className="grid grid-cols-4 gap-8 mx-16">
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </div>
      <h1 className="ml-16 mt-16 text-xl mb-4">Frontend</h1>
      <div className="grid grid-cols-4 gap-8 mx-16">
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </div>
      <h1 className="ml-16 mt-16 text-xl mb-4">Linguagens de programação</h1>
      <div className="grid grid-cols-4 gap-8 mx-16">
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </div>
      <h1 className="ml-16 mt-16 text-xl mb-4">Outros</h1>
      <div className="grid grid-cols-4 gap-8 mx-16">
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </div>
    </div>
  );
}
