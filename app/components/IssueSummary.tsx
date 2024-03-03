import { Status } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
  total: number
}

const IssueSummary = ({ open, inProgress, closed, total }: Props) => {
  const containers: {
    title: string;
    value: number;
    status?: Status;
  }[] = [
    { title: "Total Issues", value: total,  },
    { title: "Closed Issues", value: closed, status: "CLOSED" },
    { title: "Open Issues", value: open, status: "OPEN" },
    { title: "In-progress Issues", value: inProgress, status: "IN_PROGRESS" },
  ];

  return (
    <div className="flex gap-3">
      {containers.map((container) => (
        <Link
          key={container.title}
          href={`/issues/list?status=${container.status}`}
          className="flex-1 flex-grow"
        >
          <Card className="p-6 flex-grow  flex flex-col gap-2">
              <CardTitle className="text-sm font-medium">{container.title}</CardTitle>
              <CardContent className="p-0 font-bold text-2xl">+{container.value}</CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default IssueSummary;
