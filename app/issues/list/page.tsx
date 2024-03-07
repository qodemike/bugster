import React from "react";
import prisma from "@/prisma/client";
import IssuesTable, { IssueQuery } from "../_components/IssuesTable";
import IssueTableActions from "../_components/IssueTableActions";
import { Status } from "@prisma/client";
import Pagination from "@/app/components/Pagination";
import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import delay from "delay";
import CreateIssueButton from "./CreateIssueButton";

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
  const pageSize = 8;

  const issues = await prisma.issue.findMany({
    where: { status },
    orderBy: sortBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  const issueCount = await prisma.issue.count({ where: { status } });
  return (
    <div className="flex flex-col">
      <div className="mb-3 flex flex-col">
        <h1 className="mb-3 md:mb-0 text-2xl font-bold">Issues List</h1>
        <div className="md:hidden">
          <CreateIssueButton />
        </div>
        <div></div>
      </div>
      <Card>
        <IssueTableActions />
        <IssuesTable searchParams={searchParams} issues={issues}></IssuesTable>
      </Card>
      <div className="self-end py-5">
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
  title: "Bugster - Issue List",
  description:
    "See full list of project issues, their status and date posted. ",
};

// To force dynamic rendering of this page.
export const dynamic = "force-dynamic";

export default IssuesPage;
