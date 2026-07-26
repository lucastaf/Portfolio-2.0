"use client";
import Header from "@/components/header";
import Footer from "@/components/layout/footer";
import ProfessionalExperiences from "@/components/sections/professional-experiencies/professional-experiences";
import Projects from "@/components/sections/projects/projects";
import Skills from "@/components/sections/skills/skills";
import SideBar from "@/components/sidebar";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import "../i18n";

export default function Home() {
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experiencesRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="m-16 mt-32">
        <div className="relative min-h-[calc(100vh-8rem)]">
          <div className="flex flex-wrap justify-between">
            <Header />
            <SideBar
              skillsRef={skillsRef}
              experiencesRef={experiencesRef}
              projectsRef={projectsRef}
            />
          </div>
          <ChevronDown className="absolute bottom-8 left-1/2 -translate-x-1/2" />
        </div>
        <Skills ref={skillsRef} />
        <div className="my-16" />
        <ProfessionalExperiences ref={experiencesRef} />
        <div className="my-16" />
        <Projects ref={projectsRef} />
      </div>
      <Footer />
    </>
  );
}
