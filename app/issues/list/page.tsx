import React from "react";
import prisma from "@/prisma/client";
import IssuesTable, { sortByType } from "../_components/IssuesTable";
import IssueActions from "../_components/IssueActions";
import { Status } from "@prisma/client";
import Pagination from "@/app/components/Pagination";

interface Props {
  searchParams: { status: Status; sortBy?: sortByType; page: string };
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

  // Validating page number
  const page = parseInt(searchParams.page) || 1
  const pageSize = 10

  const issues = await prisma.issue.findMany({
    where: { status },
    orderBy: sortBy,
    skip: (page -1) * pageSize,
    take: pageSize,

  });

  const issueCount = await prisma.issue.count({ where: { status }});

  return (
    <div>
      <IssueActions />
      <div className="mb-5">
        <IssuesTable searchParams={searchParams} issues={issues}></IssuesTable>
      </div>
      <Pagination itemsCount={issueCount} pageSize={pageSize} currentPage={page}/>
    </div>
  );
};

// To force dynamic rendering of this page.
export const dynamic = "force-dynamic";

export default IssuesPage;
