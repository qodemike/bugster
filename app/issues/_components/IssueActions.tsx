import Button from "@/app/components/Button";
import React from "react";
import IssueStatusFilter from "../list/IssueStatusFilter";

const IssueActions = () => {
  return (
    <div className=" w-full flex justify-between items-center">
      <IssueStatusFilter></IssueStatusFilter>
      <Button href="/issues/new">New Issue</Button>
    </div>
  );
};

export default IssueActions;
