"use client";

import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CreateIssueButton = () => {
  const { status } = useSession();
  return (
    <div>
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

export default CreateIssueButton;
