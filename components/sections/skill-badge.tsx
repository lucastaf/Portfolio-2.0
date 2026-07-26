import { GetSkillById } from "@/lib/db/db-getter";
import Image from "next/image";

export default function SkillBadge(props: { skill: string }) {
  const { skill: skillId } = props;
  const skill = GetSkillById(skillId);
  return (
    <div
      className={`p-2 rounded-xl`}
      style={{
        backgroundColor: `${skill.bg_color}`, // 30% de opacidade
      }}
    >
      <Image src={skill.logo} width={15} height={15} alt="logo" />
    </div>
  );
}
