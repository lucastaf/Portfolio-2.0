import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import SkillBadge from "./skill-badge";

export default function ExperienceDialog(props: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { onOpenChange, open } = props;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={"min-w-1/2"}>
        <DialogHeader>
          <DialogTitle>Teste</DialogTitle>
        </DialogHeader>
        <div>
          <div className="flex">
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
          </div>
          <div className="flex gap-2 mb-2 ml-2">
            {" "}
            <SkillBadge />
            <SkillBadge />
            <SkillBadge />
          </div>
          <ul className="text-sm">
            <li>
              • Developed and maintained a CRM/ERP platform used by 20 internal
              users, covering frontend, backend, and external integrations.
            </li>
            • Implemented APIs in Node.js and Python for customer management,
            contracts, authentication, and data flow.
            <li>
              • Designed and developed business features, including user
              management, permissions, documents, and operation history.
            </li>
            <li>
              • Contributed to technical planning and platform architecture
              definition, including data modeling and application flows.
            </li>
            <li>
              • Developed a React web frontend for API consumption and end-user
              system operations.
            </li>
            <li>
              • Deployed separate development and production environments,
              ensuring isolation and stability.
            </li>
            <li>
              • Architected and maintained the application’s cloud
              infrastructure on AWS, with APIs on ECS, database on RDS, and
              frontend on S3 + CloudFront.
            </li>
            <li>
              • Implemented messaging, automation, and observability using
              RabbitMQ, N8N, and Grafana LGTM.
            </li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
