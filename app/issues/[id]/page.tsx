import React, { cache } from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import IssueDetails from "./IssueDetails";
import { Pencil2Icon } from "@radix-ui/react-icons";
import dynamic from "next/dynamic";
import IssueFormSkeleton from "../_components/IssueFormSkeleton";
import DeleteIssueButton from "./DeleteIssueButton";
import SelectAssignee from "./SelectAssignee";
import Link from "next/link";
import IssueDetailsActions from "./IssueDetailsActions";

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

interface Props {
  params: { id: string };
}

const fetchIssue = cache((issueId: number) =>
  prisma.issue.findUnique({ where: { id: issueId } })
);

const IssueDetailPage = async ({ params }: Props) => {
  const issue = await fetchIssue(parseInt(params.id));

  if (!issue) notFound();

  return (
    <div className=" pt-10 grid grid-cols-1 lg:grid-cols-5 gap-y-8 lg:gap-5">
      <div className=" lg:col-span-3 flex flex-col gap-5">
        <IssueDetails issue={issue} />
        {
          <div className=" flex justify-end gap-3">
            <IssueDetailsActions issueId={issue.id} />
          </div>
        }
      </div>
      <div className=" lg:col-span-2 justify-self-end lg:justify-self-center">
        <SelectAssignee issue={issue} />
      </div>
    </div>
  );
};

export async function generateMetadata({ params }: Props) {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  return {
    title: issue?.title,
    description: "View more details about " + issue?.title + "issue",
  };
}

export default IssueDetailPage;
