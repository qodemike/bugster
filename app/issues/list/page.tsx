import React from "react";
import prisma from "@/prisma/client";
import IssuesTable, { IssueQuery } from "../_components/IssuesTable";
import IssueActions from "../_components/IssueActions";
import { Status } from "@prisma/client";
import Pagination from "@/app/components/Pagination";
import { Metadata } from "next";
import delay from 'delay';

interface Props {
  searchParams: IssueQuery;
}
const sortOptions = ["title", "status", "createdAt"];

const IssuesPage = async ({ searchParams }: Props) => {
  await delay(5000);
  // Make sure the status is valid before search
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  // Validating the sort option
  const sortBy = sortOptions.includes(searchParams.sortBy || "")
    ? { [searchParams.sortBy!]: "asc" }
    : undefined;

  // Validating page number
  const page = parseInt(searchParams.page) || 1;
  const pageSize = 10;

  const issues = await prisma.issue.findMany({
    where: { status },
    orderBy: sortBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  const issueCount = await prisma.issue.count({ where: { status } });

  return (
    <div className="flex flex-col gap-5 ">
      <IssueActions />
      <IssuesTable searchParams={searchParams} issues={issues}></IssuesTable>
      <div className=" self-end">
        <Pagination
          itemsCount={issueCount}
          pageSize={pageSize}
          currentPage={page}
        />
        </div>
    </div>
  );
};

export const metadata: Metadata = {
  title: 'Bugster - Issue List',
  description: "See full list of project issues, their status and date posted. "
}

// To force dynamic rendering of this page.
export const dynamic = "force-dynamic";

export default IssuesPage;
