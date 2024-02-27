import React from "react";
import prisma from "@/prisma/client";
import IssuesTable from "./_components/IssuesTable";
import IssueActions from "./_components/IssueActions";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();

  return (
    <div>
      <div className="mb-5 w-fit cursor-pointer">
        <IssueActions/>
      </div>
      <IssuesTable issues={issues}></IssuesTable>
    </div>
  );
};

// To force dynamic rendering of this page. 
export const dynamic = 'force-dynamic';

export default IssuesPage;
