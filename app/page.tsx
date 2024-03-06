import { Metadata } from "next";
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
  const total = open + inProgress + closed;

  return (
    <div>
      <h1 className="mb-5 text-3xl font-bold">Dashboard</h1>
      <div className="flex flex-col gap-5">
        <IssueSummary
          open={open}
          inProgress={inProgress}
          closed={closed}
          total={total}
        />
        <div className=" grid  lg:grid-cols-2 gap-5">
          <IssueChart open={open} inProgress={inProgress} closed={closed} />
          <LatestIssues />
        </div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Bugster - Dashboard",
  description:
    "See a quick summary of issues posted on Bugster from various projects. ",
};
