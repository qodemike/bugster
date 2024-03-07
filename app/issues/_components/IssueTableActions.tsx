"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import IssueStatusFilter from "../list/IssueStatusFilter";
import { useSession } from "next-auth/react";
import { IoFilterSharp } from "react-icons/io5";
import CreateIssueButton from "../list/CreateIssueButton";

const IssueTableActions = () => {
  const { status } = useSession();
  return (
    <div className=" p-4  w-full flex justify-between items-center">
      <div className="flex items-center gap-3">
        <IssueStatusFilter />
        <IoFilterSharp size={20} />
      </div>
      <div className="hidden md:block">
      <CreateIssueButton/>

      </div>
    </div>
  );
};

export default IssueTableActions;
