'use client';

import React from "react";
import { Table } from "@radix-ui/themes";
import IssueStatusBadge from "../components/IssueStatusBadge";
import { useRouter } from "next/navigation";


interface Issue{
    id: number;
    title: string;
    description: string;
    status: "OPEN" | "IN_PROGRESS" | "CLOSED";
    createdAt: Date;
    updatedAt: Date;
}

interface Props{
    issues: Issue[];
}

const IssuesTable = ({issues}: Props) => {
  const router = useRouter();

  return (
    <Table.Root variant="surface">
      <Table.Header className="bg-slate-100">
        <Table.Row>
          <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className="hidden md:table-cell">
            Status
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className="hidden md:table-cell">
            Created
          </Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {issues.map((issue) => (
          <Table.Row
            key={issue.id}
            className="hover:bg-neutral-100 transition cursor-pointer"
            onClick={() => router.push(`/issues/${issue.id}`)}
          >
            <Table.Cell className="">
              {issue.title}
              <div className="block md:hidden">
                <IssueStatusBadge status={issue.status} />
              </div>
            </Table.Cell>
            <Table.Cell className="hidden md:table-cell">
              <IssueStatusBadge status={issue.status} />
            </Table.Cell>
            <Table.Cell className="hidden md:table-cell">
              {issue.createdAt.toDateString()}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default IssuesTable;
