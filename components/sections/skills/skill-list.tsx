import { GetSkills } from "@/lib/db/db-getter";
import { skillType } from "@/lib/db/db-types";
import SkillCard from "./skill-card";

export default function SkillsList(props: { type: skillType }) {
  const { type } = props;
  const skills = GetSkills(type);
  return (
    <>
      {skills.map((skill) => (
        <SkillCard key={skill.id} skill={skill} />
      ))}
    </>
  );
}
