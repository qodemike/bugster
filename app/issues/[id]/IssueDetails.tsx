import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Issue } from "@prisma/client";
import { Card } from "@/components/ui/card";
import React from "react";
import ReactMarkdown from "react-markdown";

interface Props {
  issue: Issue;
}

const IssueDetails = ({ issue }: Props) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold">{issue.title}</h1>
      <div className="mt-3 flex items-center gap-5">
        <div className="">
          <span className="text-sm">Date Created:</span>
          <span className="pl-2 text-sm text-muted-foreground">
            {issue.createdAt.toDateString()}
          </span>
        </div>
        <IssueStatusBadge status={issue.status} />
      </div>
      <Card className="prose max-w-full mt-7 min-h-52  p-5 ">
        <span className="md:text-xl font-bold "> Details about the Issue</span>
        <div className="my-3 border-b"></div>
        <ReactMarkdown className={" text-sm md:text-base text-muted-foreground"}>{issue.description}</ReactMarkdown>
      </Card>
    </div>
  );
};

export default IssueDetails;
