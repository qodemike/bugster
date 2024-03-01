import React from "react";
import prisma from "@/prisma/client";
import IssuesTable from "../_components/IssuesTable";
import IssueActions from "../_components/IssueActions";
import { Status } from "@prisma/client";

interface Props{
  searchParams: { status: Status }
}

const IssuesPage = async ({ searchParams }: Props) => {

  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status) ? searchParams.status : undefined;
  const issues = await prisma.issue.findMany({where: { status: status }});
  
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
