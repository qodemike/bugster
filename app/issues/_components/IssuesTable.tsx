"use client";

import React from "react";
import IssueStatusBadge from "../../components/IssueStatusBadge";
import { useRouter } from "next/navigation";
import { Issue, Status } from "@prisma/client";
import Link from "next/link";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { Table, TableHeader, TableRow, TableHead, TableBody , TableCell} from '@/components/ui/table'
import { Button } from "@/components/ui/button";

export type sortByType = "title" | "status" | "createdAt";

export interface IssueQuery {
  status: Status; 
  sortBy?: sortByType;
  page: string
}
interface Props {
  searchParams: IssueQuery;
  issues: Issue[];
}

export const columnHeaderData: { label: string; value: sortByType; className?: string }[] = [
  { label: "Issue", value: "title" },
  { label: "Status", value: "status", className: "hidden md:table-cell" },
  {
    label: "Date Created",
    value: "createdAt",
    className: "hidden md:table-cell",
  },
];

const IssuesTable = ({ issues, searchParams }: Props) => {
  const router = useRouter();

  return (
    <div className="bg-card rounded-lg border">
    <Table >
      <TableHeader>
        <TableRow>
          {columnHeaderData.map((column) => (
            <TableHead key={column.value} className={column.className || ''}>
              <div className="flex items-center gap-1">
                <Link
                  href={{
                    query: { ...searchParams, sortBy: column.value },
                  }}
                >
                  {column.label}
                </Link>
                {column.value === searchParams.sortBy && (
                  <CaretSortIcon/>
                )}
              </div>
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {issues.map((issue) => (
          <TableRow
            key={issue.id}
          >
            <TableCell className="">
              <Button variant='link' className="h-2 p-0">
                <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
              </Button>
              <div className="block mt-2 md:hidden">
                <IssueStatusBadge status={issue.status} />
              </div>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              <IssueStatusBadge status={issue.status} />
            </TableCell>
            <TableCell className=" dark:text-muted-foreground hidden md:table-cell">
              {issue.createdAt.toDateString()}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  );
};

export default IssuesTable;
