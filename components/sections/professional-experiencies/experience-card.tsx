"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";
import ExperienceDialog from "./experience-dialog";

export default function ExperienceCard() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <ExperienceDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      <motion.div
        className="flex p-4 cursor-pointer"
        onClick={() => {
          setDialogOpen(true);
        }}
        whileHover={{
          scale: 1.03,
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
        <Image
          src={"/icons/companies/Logo_SP_Texto.svg"}
          alt="logo"
          width={150}
          height={150}
        />
        <div>
          <h1 className="text-3xl">SP Capital</h1>
          <h2>Itapema-SC, Março 2025 - Presente</h2>
          <h2 className="mt-2">Desenvolvedor Pleno Fullstack</h2>
        </div>
      </motion.div>
    </>
  );
}
