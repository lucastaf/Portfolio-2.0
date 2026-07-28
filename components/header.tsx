"use client";
import { Download } from "lucide-react";
import { Button } from "./ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

export default function Header() {
  const { t } = useTranslation();
  return (
    <div>
      <motion.div
        transition={{
          type: "keyframes",
        }}
        initial={{
          opacity: 0,
          x: -50,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
      >
        <h1 className="text-4xl md:text-6xl">Lucas Rauch</h1>
      </motion.div>
      <motion.div
        transition={{
          type: "keyframes",
          delay: 0.1,
        }}
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
      >
        <h2 className="mt-8 text-xl md:text-4xl">{t("header.title")}</h2>
        <h2 className="mt-2 text-justify md:text-xl max-w-200">{t("header.body")}</h2>
      </motion.div>

      <motion.div
        transition={{
          type: "keyframes",
          delay: 0.3,
        }}
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="mt-8 flex items-center justify-between"
      >
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
      </motion.div>
    </div>
  );
}
