"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import IssueStatusFilter from "../list/IssueStatusFilter";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { IoFilterSharp } from "react-icons/io5";

const IssueActions = () => {
  const { status } = useSession();
  return (
    <div className=" p-4  w-full flex justify-between items-center">
      <div className="flex items-center gap-3">
        <IssueStatusFilter />
        <IoFilterSharp size={20} />
      </div>
      {status === "authenticated" ? (
        <Link href={"/issues/new"}>
          <Button>Create New Issue</Button>
        </Link>
      ) : (
        <Button variant="outline" className="bg-foreground text-background">
          Sign in to Create Issue
        </Button>
      )}
    </div>
  );
};

export default IssueActions;
