import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import IssueActions from "../_components/IssueActions";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const IssuesPageSkeleton = async () => {
  const issues = Array(10).fill(0);

  return (
    <>
      <div className="mb-5">
        <IssueActions />
      </div>
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell>Issue</TableCell>
              <TableCell className="hidden md:table-cell">Status</TableCell>
              <TableCell className="hidden md:table-cell">Created</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {issues.map((issue) => (
              <TableRow key={issue}>
                <TableCell className="">
                  <Skeleton className="h-5" />
                  <div className="block md:hidden">
                    <Skeleton className="h-5" />
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <Skeleton className="h-5" />
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <Skeleton className="h-5" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default IssuesPageSkeleton;
