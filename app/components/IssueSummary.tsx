import { Status } from "@prisma/client";
import { Card, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueSummary = ({ open, inProgress, closed }: Props) => {
  const containers: {
    label: string;
    value: number;
    status: Status;
  }[] = [
    { label: "Open Issues", value: open, status: "OPEN" },
    { label: "In-progress Issues", value: inProgress, status: "IN_PROGRESS" },
    { label: "Closed Issues", value: closed, status: "CLOSED" },
  ];

  return (
    <div className="flex gap-3">
      {containers.map((container) => (
        <Card key={container.label}>
          <div className="flex flex-col gap-2">
            <Link className="text-sm font-medium" href={`/issues/list?status=${container.status}`}>{container.label}</Link>
            <Text size={"5"} className="font-bold ">{container.value}</Text>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default IssueSummary;
