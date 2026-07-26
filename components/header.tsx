"use client";
import { Download } from "lucide-react";
import { Button } from "./ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="text-6xl">Lucas Rauch</h1>
      <h2 className="mt-8 ml-4 text-4xl">{t("header.title")}</h2>

      <h2 className="mt-2 ml-4 text-xl max-w-200">{t("header.body")}</h2>
      <div className="mt-8 flex items-center justify-between">
        <Button variant={"outline"} className={"h-15 px-4 min-w-45 text-xl"}>
          {t("header.curriculum_download")} <Download className="size-5" />
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
