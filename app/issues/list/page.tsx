import React from "react";
import prisma from "@/prisma/client";
import IssuesTable, { sortByType } from "../_components/IssuesTable";
import IssueActions from "../_components/IssueActions";
import { Status } from "@prisma/client";

interface Props {
  searchParams: { status: Status; sortBy?: sortByType };
}
const sortOptions = ["title", "status", "createdAt"]

const IssuesPage = async ({ searchParams }: Props) => {

  // Make sure the status is valid before search
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  // Validating the sort option
  const sortBy = sortOptions.includes(searchParams.sortBy || '') ? { [ searchParams.sortBy! ]: 'asc'} : undefined
  
  const issues = await prisma.issue.findMany({
    where: { status: status },
    orderBy: sortBy ,
  });

  return (
    <div>
      <IssueActions />
      <IssuesTable searchParams={searchParams} issues={issues}></IssuesTable>
    </div>
  );
};

// To force dynamic rendering of this page.
export const dynamic = "force-dynamic";

export default IssuesPage;
