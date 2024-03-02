import IssueChart from "./components/IssueChart";
import IssueSummary from "./components/IssueSummary";
import LatestIssues from "./components/LatestIssues";
import prisma from "@/prisma/client";

export default async function Home() {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closed = await prisma.issue.count({ where: { status: "CLOSED" } });

  return (
    <>
      <IssueChart open={open} inProgress={inProgress} closed={closed} />
    </>
  );
}
