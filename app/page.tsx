import { Metadata } from "next";
import IssueChart from "./components/IssueChart";
import IssueSummary from "./components/IssueSummary";
import LatestIssues from "./components/LatestIssues";
import prisma from "@/prisma/client";
import { Card } from "@/components/ui/card";

export default async function Home() {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closed = await prisma.issue.count({ where: { status: "CLOSED" } });
  const total = open + inProgress + closed;

  return (
    <div>
      <h1 className="mb-3 text-2xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-[2fr_1.1fr] gap-5 ">
        <div className="flex flex-col gap-5">
          <IssueSummary
            open={open}
            inProgress={inProgress}
            closed={closed}
            total={total}
          />
          <LatestIssues/>
        </div>
          <IssueChart open={open} inProgress={inProgress} closed={closed} />
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Bugster - Dashboard",
  description:
    "See a quick summary of issues posted on Bugster from various projects. ",
};
