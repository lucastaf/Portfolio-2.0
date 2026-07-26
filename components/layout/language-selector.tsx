import { Globe } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  function handleChangeLanguage(language: string | null) {
    if (!language) return;
    i18n.changeLanguage(language);
  }

  return (
    <Select value={i18n.language} onValueChange={handleChangeLanguage}>
      <SelectTrigger>
        <Globe />
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="pt-BR">Português</SelectItem>
        <SelectItem value="en-US">English</SelectItem>
      </SelectContent>
    </Select>
  );
}
