import { Status } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueSummary = ({ open, inProgress, closed }: Props) => {
  const containers: {
    title: string;
    value: number;
    status: Status;
  }[] = [
    { title: "Open Issues", value: open, status: "OPEN" },
    { title: "In-progress Issues", value: inProgress, status: "IN_PROGRESS" },
    { title: "Closed Issues", value: closed, status: "CLOSED" },
  ];

  return (
    <div className="flex gap-3">
      {containers.map((container) => (
        <Link
          key={container.title}
          href={`/issues/list?status=${container.status}`}
        >
          <Card>
            <CardHeader>
              <CardTitle> {container.title}</CardTitle>
              <CardContent>{container.value}</CardContent>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default IssueSummary;
