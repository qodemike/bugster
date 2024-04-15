import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import IssueTableActions from "../_components/IssueTableActions";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";

const IssuesPageSkeleton = async () => {
  const issues = Array(8).fill(0);

  return (
    <div className="">
      <h1 className="mb-3 text-2xl font-bold">Issues List</h1>
      <div className="hidden lg:block mb-5 border-t"/>
      <Card>
        <IssueTableActions />
        <Table className="border-t">
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
                  <div className="block mt-2 md:hidden">
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
      </Card>
    </div>
  );
};

export default IssuesPageSkeleton;
