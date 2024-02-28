import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { Box, Grid } from "@radix-ui/themes";
import Button from "@/app/components/Button";
import IssueDetails from "./IssueDetails";
import { Pencil2Icon } from "@radix-ui/react-icons";
import dynamic from "next/dynamic";
import IssueFormSkeleton from "../_components/IssueFormSkeleton";

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap={"5"} >
      <Box className=" md:col-span-3">
        <IssueDetails issue={issue} />
      </Box>
      <Box className="col-span-2 flex flex-col gap-5">
        <Button
          href={`/issues/${issue.id}/edit`}
          className=" flex justify-center items-center gap-2"
        >
          <Pencil2Icon /> Edit Issue
        </Button>
        <Button 
          href={''}
          className=" bg-red-500 hover:bg-red-600  flex justify-center items-center gap-2"
        >Delete Issue</Button>
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
