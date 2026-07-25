import { Download } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div>
      <h1 className="text-6xl">Lucas Rauch</h1>
      <h2 className="ml-4 text-2xl">
        Desenvolvedor fullstack, focado em typescript e nodeJS.
      </h2>
      <div className="mt-4">
        <Button size={"lg"}>
          Curriculo <Download />
        </Button>
      </div>
    </div>
  );
}
