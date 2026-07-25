import Image from "next/image";

export default function SkillBadge() {
  return (
    <div className="p-2 bg-[#007ACC]/30 rounded-xl">
      <Image
        src={"icons/languages/typescript/typescript-original.svg"}
        width={15}
        height={15}
        alt="logo"
      />
    </div>
  );
}
