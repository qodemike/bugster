import { Button } from "@/components/ui/button";
import React from "react";
import IssueStatusFilter from "../list/IssueStatusFilter";
import Link from "next/link";


const IssueActions = () => {
  return (
    <div className=" w-full flex justify-between items-center">
      <IssueStatusFilter></IssueStatusFilter>
      <Link href={'/issues/new'}><Button>Create New Issue</Button></Link> 
    </div>
  );
};

export default IssueActions;
