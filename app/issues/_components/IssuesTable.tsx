"use client";

import React from "react";
import { Table, Text } from "@radix-ui/themes";
import IssueStatusBadge from "../../components/IssueStatusBadge";
import { useRouter } from "next/navigation";
import { Issue, Status } from "@prisma/client";
import Link from "next/link";
import { ArrowUpIcon } from "@radix-ui/react-icons";

interface Props {
  searchParams: {status: Status, sortBy?: string};
  issues: Issue[];
}

  const columns: { label: string; value: keyof Issue; className?: string }[] = [
    { label: "Issue", value: "title" },
    { label: "Status", value: "status", className: "hidden md:table-cell" },
    { label: "Date Created", value: "createdAt", className: "hidden md:table-cell" },
  ];

const IssuesTable = ({ issues, searchParams }: Props) => {
  const router = useRouter();

  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          {columns.map((column) => (
            <Table.ColumnHeaderCell  key={column.value}>
              <div className="flex items-center gap-1">
              <Link href={{
                query: {...searchParams, sortBy: column.value }
              }
              }>{column.label}</Link>
              {column.value === searchParams.sortBy && <ArrowUpIcon></ArrowUpIcon>}
              </div>
            </Table.ColumnHeaderCell>
          ))}
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
              <Text color="violet">{issue.title}</Text>
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
