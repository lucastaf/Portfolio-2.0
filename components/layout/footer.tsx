import { Mail } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FaGithub, FaItchIo, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div className="bg-accent py-8 lg:px-32 px-4 mt-16">
      <h1 className="text-2xl text-center mb-8">Entre em contato 👋</h1>
      <div className="grid md:grid-cols-2">
        <div className="grid gap-4">
          <div className="flex items-center gap-2 ">
            <Mail size={30} />
            <span className="max-sm:hidden">{t("misc.email")}</span>
            <h1>lucas.bittencourtrauch@gmail.com</h1>
          </div>
          <div className="flex items-center gap-2">
            <FaWhatsapp size={30} />
            <span className="max-sm:hidden">{t("misc.phone")}</span>
            <h1>+55 (48) 99609-5391</h1>
          </div>
          <div />
        </div>
        <div className="grid gap-4">
          <Link
            href={
              "https://www.linkedin.com/in/lucas-bittencourt-rauch-b40967243"
            }
          >
            <h1 className="flex items-center gap-2">
              <FaLinkedin size={30} />
              Linkedin
            </h1>
          </Link>

          <Link href={"https://github.com/lucastaf"}>
            <h1 className="flex items-center gap-2">
              <FaGithub size={30} />
              Github
            </h1>
          </Link>
          <Link href={"https://lucastaf.itch.io"}>
            <h1 className="flex items-center gap-2">
              <FaItchIo size={30} />
              Itch.io
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
