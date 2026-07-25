import { Download } from "lucide-react";
import { Button } from "./ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <h1 className="text-6xl">Lucas Rauch</h1>
      <h2 className="mt-8 ml-4 text-4xl">
        Desenvolvimento Fullstack do frontend à infraestrutura.
      </h2>

      <h2 className="mt-2 ml-4 text-xl max-w-200">
        Há mais de 2 anos desenvolvendo soluções utilizando TypeScript, Node.js
        e React. Projeto arquiteturas escaláveis, APIs robustas e interfaces
        modernas, cuidando de todo o ciclo da aplicação.
      </h2>
      <div className="mt-8 flex items-center justify-between">
        <Button variant={"outline"} className={"h-15 px-4 min-w-45 text-xl"}>
          Baixe meu curriculo <Download className="size-5" />
        </Button>
        <div className="flex gap-4">
            <Link
              href="https://github.com/lucastaf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="size-10" />
            </Link>

            <Link
              href="https://linkedin.com/in/lucas-bittencourt-rauch-b40967243"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="size-10" />
            </Link>
        </div>
      </div>
    </div>
  );
}
