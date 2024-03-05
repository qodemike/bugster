import { Metadata } from "next";
import IssueChart from "./components/IssueChart";
import IssueSummary from "./components/IssueSummary";
import LatestIssues from "./components/LatestIssues";
import prisma from "@/prisma/client";
import { Playground } from "./issues/_components/playground";

export default async function Home() {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closed = await prisma.issue.count({ where: { status: "CLOSED" } });
  const total = open+inProgress+closed;

  return (
    <>
    <div className="flex flex-col gap-5">
      <IssueSummary open={open} inProgress={inProgress} closed={closed} total={total}/>
      <div className=" grid  md:grid-cols-2 gap-5">
        <IssueChart open={open} inProgress={inProgress} closed={closed} />
        <LatestIssues />
      </div>
    </div>
    </>
  );
}

export const metadata: Metadata = {
  title: "Bugster - Dashboard",
  description:
    "See a quick summary of issues posted on Bugster from various projects. ",
};
