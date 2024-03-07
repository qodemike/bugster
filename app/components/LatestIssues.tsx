import React from "react";
import prisma from "@/prisma/client";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import IssueStatusBadge from "./IssueStatusBadge";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const LatestIssues = async () => {
  const issues = await prisma.issue.findMany({
    orderBy: { createdAt: "desc" },
    take: 4,
    include: {
      assignedToUser: true,
    },
  });

  return (
    <Card className="py-6 px-3  md:p-6 overflow-x-scroll md:overflow-x-auto">
      <div className="mb-3 ml-3">
        <h2 className="text-base font-bold">Most Recent Issues</h2>
        <span className="text-sm text-muted-foreground">
          A Quick view of recently updated issues
        </span>
      </div>
      <Table className=" ">
        <TableBody>
          {issues.map((issue) => (
            <TableRow key={issue.id} className="">
              <TableCell className="flex justify-between items-center gap-6 md:gap-0">
                <div className=" flex flex-col items-start gap-2 ">
                  <Link href={`/issues/${issue.id}`}>
                    <Button variant="link" className={"h-2 p-0 transition"}>
                      {issue.title}
                    </Button>
                  </Link>
                  <div className="">
                    <IssueStatusBadge status={issue.status} />
                  </div>
                </div>
                {issue.assignedToUser && (
                  <Avatar>
                    <AvatarImage src={issue.assignedToUser.image!} />
                    <AvatarFallback>?</AvatarFallback>
                  </Avatar>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default LatestIssues;
