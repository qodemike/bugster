import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Box, Text, Flex, Heading, Card,  Grid } from "@radix-ui/themes";
import Button from "@/app/components/Button";

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
        <Heading>{issue.title}</Heading>
        <Flex className="my-3 space-x-3">
          <IssueStatusBadge status={issue.status} />
          <Text>{issue.createdAt.toDateString()}</Text>
        </Flex>
        <Card>
          <p>{issue.description}</p>
        </Card>
      </Box>
      <Box>
        <Button href={`/issues/${issue.id}/edit`}>Edit Issue</Button>
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
