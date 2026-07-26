"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { skill } from "@/lib/db/db-types";

export default function SkillCard(props: { skill: skill }) {
  const { skill } = props;
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
      <div className={`p-2 bg-[${skill.bg_color}]/30 rounded-lg`}>
        <Image src={skill.logo} width={30} height={30} alt="logo" />
      </div>
      <h1 className="text-xl">{skill.name}</h1>
    </motion.div>
  );
}
