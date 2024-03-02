import React from "react";
import prisma from "@/prisma/client";
import { Avatar, Card, Heading, Table } from "@radix-ui/themes";
import IssueStatusBadge from "./IssueStatusBadge";
import Link from 'next/link';

const LatestIssues = async () => {
  const issues = await prisma.issue.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
    include: {
      assignedToUser: true,
    },
  });

  return (
    <Card>
      <Heading mb={"2"} ml={"2"} size={"6"} >Recent Issues</Heading>
      <Table.Root>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell >
                <div className=" flex">
                  <div className="flex flex-col items-start gap-2 ">
                    <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                    <IssueStatusBadge status={issue.status} />
                  </div>
                  {issue.assignedToUser && (
                    <Avatar
                      fallback="?"
                      src={issue.assignedToUser.image!}
                      size={"2"}
                      radius="full"
                    />
                  )}
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Card>
  );
};

export default LatestIssues;
