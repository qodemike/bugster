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
import { Card } from "@/components/ui/card";

const IssuesPageSkeleton = async () => {
  const issues = Array(8).fill(0);

  return (
    <div className="pt-12">
    <Card>
        <IssueActions />
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
    </Card>
    </div>
  );
};

export default IssuesPageSkeleton;
