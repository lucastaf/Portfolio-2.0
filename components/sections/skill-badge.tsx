import { GetSkillById } from "@/lib/db/db-getter";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export default function SkillBadge(props: { skill: string }) {
  const { skill: skillId } = props;
  const skill = GetSkillById(skillId);
  return (
    <Tooltip>
      <TooltipTrigger tabIndex={-1}>
        <div
          className={`p-2 rounded-xl`}
          style={{
            backgroundColor: `${skill.bg_color}`, // 30% de opacidade
          }}
        >
          <Image src={skill.logo} width={15} height={15} alt="logo" />
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{skill.name}</p>
      </TooltipContent>
    </Tooltip>
  );
}
