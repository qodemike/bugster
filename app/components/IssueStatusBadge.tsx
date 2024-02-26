import React from "react";
import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";

interface Props {
  status: Status;
}

// Record is a utillity type that allow us to define types of key and value in an object
const statusMap: Record<
  Status,
  { label: string; color: "red" | "violet" | "green" }
> = {
  OPEN: { label: "Open", color: "red" },
  IN_PROGRESS: { label: "In Progress", color: "violet" },
  CLOSED: { label: "Closed", color: "green" },
};

const IssueStatusBadge = ({ status }: Props) => {
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  );
};

export default IssueStatusBadge;
