import SideBar from "@/components/sidebar";
import Header from "@/components/header";
import Skills from "@/components/sections/skills/skills";
import { ChevronDown } from "lucide-react";

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
    </div>
  );
}
