import React, { cache } from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import {Button} from "@/components/ui/button";
import IssueDetails from "./IssueDetails";
import { Pencil2Icon } from "@radix-ui/react-icons";
import dynamic from "next/dynamic";
import IssueFormSkeleton from "../_components/IssueFormSkeleton";
import DeleteIssueButton from "../_components/DeleteIssueButton";
import SelectAssignee from "./SelectAssignee";
import Link from "next/link";
import delay from 'delay';

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

  await delay(5000)

  const issue = await fetchIssue(parseInt(params.id));

  if (!issue) notFound();

  return (
    <div className=" grid grid-cols-1 lg:grid-cols-5 gap-y-8 lg:gap-5" >
      <div className=" md:col-span-3 flex flex-col gap-5">
        <IssueDetails issue={issue} />
        <div className=" flex justify-end gap-3">
        <Link 
          href={`/issues/edit/${issue.id}`}
        >
        <Button
          className=" flex justify-center items-center gap-2"
        >
          <Pencil2Icon /> Edit Issue
        </Button>
        </Link>
        <DeleteIssueButton issueId={issue.id} />
        </div>
      </div>
      <div className=" col-span-2 justify-self-end lg:justify-self-center">
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
