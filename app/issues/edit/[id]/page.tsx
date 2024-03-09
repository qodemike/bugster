import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueForm from "../../_components/IssueForm";

interface Props {
  params: { id: string };
}

const EditIssuePage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return (
    <div className="md:pt-16">
      <h1 className="mb-3 text-2xl font-bold">Fill the Form Below</h1>
      <IssueForm issue={issue}/>
    </div>
  )
};

export default EditIssuePage;
