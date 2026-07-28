import { GetExperiences } from "@/lib/db/db-getter";
import { experienceType } from "@/lib/db/db-types";
import ExperienceCard from "./experience-card";

export default function ExperienceList(props: { type: experienceType }) {
  const { type } = props;
  const experiences = GetExperiences(type);
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {experiences.map((experience,index) => (
        <ExperienceCard experience={experience} key={index} />
      ))}
    </div>
  );
}
