import { Status } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import IssueStatusBadge from "./IssueStatusBadge";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
  total: number;
}

const IssueSummary = ({ open, inProgress, closed, total }: Props) => {
  const containers: {
    title: string;
    value: number;
    status: Status;
  }[] = [
    { title: "Closed Issues", value: closed, status: "CLOSED" },
    { title: "Open Issues", value: open, status: "OPEN" },
    { title: "In-progress Issues", value: inProgress, status: "IN_PROGRESS" },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-3">
      {containers.map((container) => (
        <Link
          key={container.title}
          href={`/issues/list?status=${container.status}`}
          className="   flex-1 "
        >
          <Card className="p-4 md:p-5  flex justify-between items-center  md:flex-col  md:items-start md:gap-1" >
              <CardTitle className="text-sm font-medium">
                {container.title}
              </CardTitle>
                <CardContent className=" p-0 font-bold text-2xl">
                  +{container.value}
                </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default IssueSummary;
