"use client";
import SideBar from "@/components/sidebar";
import Header from "@/components/header";
import Skills from "@/components/sections/skills/skills";
import { ChevronDown } from "lucide-react";
import ProfessionalExperiences from "@/components/sections/professional-experiencies/professional-experiences";
import Projects from "@/components/sections/projects/projects";
import "../i18n";
import AppBar from "@/components/layout/appbar";

export default function Home() {
  return (
    <div className="m-16 mt-32">
      <div className="relative min-h-[calc(100vh-8rem)]">
        <div className="flex flex-wrap justify-between">
          <Header />
          <SideBar />
        </div>
        <ChevronDown className="absolute bottom-8 left-1/2 -translate-x-1/2" />
      </div>
      <Skills />
      <div className="my-16" />
      <ProfessionalExperiences />
      <div className="my-16" />
      <Projects />
    </div>
  );
}
