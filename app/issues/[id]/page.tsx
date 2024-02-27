import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { Box, Grid } from "@radix-ui/themes";
import Button from "@/app/components/Button";
import IssueDetails from "./IssueDetails";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return (
    <Grid columns={{initial: "1", md: "2"}} gap={"5"}>
      <Box>
        <IssueDetails issue={issue}/>
      </Box>
      <Box>
        <Button href={`/issues/${issue.id}/edit`}>Edit Issue</Button>
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
