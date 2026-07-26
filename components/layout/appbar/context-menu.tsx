import { Mail, MapPin, Menu, Phone } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FaGithub, FaItchIo, FaLinkedin } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";

export default function ContextMenu() {
  const { t } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<button />}>
        <Menu />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-75 mt-2">
        <DropdownMenuGroup>
          <DropdownMenuLabel>{t("misc.contact")}</DropdownMenuLabel>
          <Link href="mailto:lucas.bittencourtrauch@gmail.com">
            <DropdownMenuItem className="cursor-pointer">
              <Mail /> lucas.bittencourtrauch@gmail.com
            </DropdownMenuItem>
          </Link>
          <Link href="https://wa.me/5548996095391">
            <DropdownMenuItem className="cursor-pointer">
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
            <DropdownMenuItem className="cursor-pointer">
              <FaLinkedin /> Linkedin
            </DropdownMenuItem>
          </Link>
          <Link href="https://github.com/lucastaf">
            <DropdownMenuItem className="cursor-pointer">
              <FaGithub /> Github
            </DropdownMenuItem>
          </Link>
          <Link href="https://lucastaf.itch.io/">
            <DropdownMenuItem className="cursor-pointer">
              <FaItchIo /> Itch.io
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
