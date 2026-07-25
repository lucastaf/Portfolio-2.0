'use client';

import Image from "next/image";
import { motion } from "motion/react";

export default function SkillCard() {
  return (
    <motion.div
      className="border-2 p-4 flex items-center gap-4 rounded-xl"
      whileHover={{
        scale: 1.1,
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
      <div className="p-2 bg-[#007ACC]/30 rounded-lg">
        <Image
          src={"icons/languages/typescript/typescript-original.svg"}
          width={30}
          height={30}
          alt="logo"
        />
      </div>
      <h1 className="text-xl">Typescript</h1>
    </motion.div>
  );
}
