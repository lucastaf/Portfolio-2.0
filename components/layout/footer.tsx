import { Mail, Phone, User } from "lucide-react";

export default function Footer() {
  return (
    <div className="h-15 bg-accent flex items-center justify-center">
      <div className="flex gap-16">
        <div className="flex gap-2">
          <User />
          Lucas Bittencourt Rauch
        </div>
        <div className="flex gap-2">
          <Mail />
          lucas.bittencourtrauch@gmail.com
        </div>
        <div className="flex gap-2">
          <Phone />
          +55 (48) 99609-5391
        </div>
      </div>
    </div>
  );
}
