import { Hamburger, Mail, MapPin, Menu, Phone } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { LiaLinkedin } from "react-icons/lia";
import { FaGithub, FaItchIo, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function ContextMenu() {
  const { t } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<div />}>
        <Menu />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-75 mt-2">
        <DropdownMenuGroup>
          <DropdownMenuLabel>{t("misc.contact")}</DropdownMenuLabel>
          <Link href="mailto:lucas.bittencourtrauch@gmail.com">
            <DropdownMenuItem>
              <Mail /> lucas.bittencourtrauch@gmail.com
            </DropdownMenuItem>
          </Link>
          <Link href="https://wa.me/5548996095391">
            <DropdownMenuItem>
              <Phone /> +55 (48) 99609-5391
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem>
            <MapPin /> Tijucas - SC
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>{t("misc.social_media")}</DropdownMenuLabel>
          <Link href="https://www.linkedin.com/in/lucas-bittencourt-rauch-b40967243">
            <DropdownMenuItem>
              <FaLinkedin /> Linkedin
            </DropdownMenuItem>
          </Link>
          <Link href="https://github.com/lucastaf">
            <DropdownMenuItem>
              <FaGithub /> Github
            </DropdownMenuItem>
          </Link>
          <Link href="https://lucastaf.itch.io/">
            <DropdownMenuItem>
              <FaItchIo /> Itch.io
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
