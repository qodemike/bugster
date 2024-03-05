"use client";

import { Button } from "@/components/ui/button";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { useSession } from "next-auth/react";
import Link from "next/link";
import DeleteIssueButton from "./DeleteIssueButton";

interface Props {
  issueId: number;
}

const IssueDetailsActions = ({ issueId }: Props) => {
  const { status } = useSession();

  return (
    <>
      {status === "authenticated" ? (
        <>
          <Link href={`/issues/edit/${issueId}`}>
            <Button className=" flex justify-center items-center gap-2">
              <Pencil2Icon /> Edit Issue
            </Button>
          </Link>
          <DeleteIssueButton issueId={issueId} />
        </>
      ) : (
        <Link href={"/api/auth/signin"}>
          <Button variant={"outline"} className="px-10">
            Sign in to Edit Issue
          </Button>
        </Link>
      )}
    </>
  );
};

export default IssueDetailsActions;
