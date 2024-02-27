import { Table } from "@radix-ui/themes";
import Button from  "@/app/components/Button"
import Link from "next/link";
import React from "react";
import prisma from "@/prisma/client";
import IssuesTable from "../components/IssuesTable";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();

  return (
    <div>
      <div className="mb-5 w-fit cursor-pointer">
      <Button href="/issues/new">New Issue</Button>        
      </div>
      <IssuesTable issues={issues}></IssuesTable>
    </div>
  );
};

export default IssuesPage;
