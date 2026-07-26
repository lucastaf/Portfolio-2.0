import Image from "next/image";
import ExperienceCard from "./experience-card";
import ExperienceList from "./experience-list";

export default function ProfessionalExperiences() {
  return (
    <div>
      <h1 className="mb-4 text-2xl">Experiências profissionais</h1>
      <div className="flex flex-col gap-4">
        <ExperienceList type="job" />
      </div>
    </div>
  );
}
