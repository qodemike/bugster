import { Metadata } from "next";
import IssueBarChart from "./components/IssueBarChart";
import IssueSummary from "./components/IssueSummary";
import LatestIssues from "./components/LatestIssues";
import prisma from "@/prisma/client";
import { Card } from "@/components/ui/card";
import IssuesBarGraph from "./components/IssuesBarGraph";

export default async function Home() {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closed = await prisma.issue.count({ where: { status: "CLOSED" } });
  const total = open + inProgress + closed;

  const startDate = new Date("2024-02-26");
  const endDate = new Date("2024-03-01");

  const weeksData = [];

  for (
    let date = new Date(startDate);
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    const issues = await prisma.issue.findMany({
      where: {
        createdAt: {
          gte: new Date(date),
          lt: new Date(new Date(date).setDate(date.getDate() + 1)),
        },
      },
    });

    const openCount = issues.filter((issue) => issue.status === "OPEN").length;
    const inProgressCount = issues.filter(
      (issue) => issue.status === "IN_PROGRESS"
    ).length;
    const closedCount = issues.filter(
      (issue) => issue.status === "CLOSED"
    ).length;

    weeksData.push({
      day: date.toDateString().split(" ")[0],
      Open: openCount,
      "In progress": inProgressCount,
      Closed: closedCount,
    });
  }

  return (
    <>
      <h1 className=" mb-3 text-2xl font-bold ">Dashboard</h1>
      <div className=" hidden lg:block mb-5 border-t " />
      <div className=" flex flex-col gap-5">
        <IssueSummary
          open={open}
          inProgress={inProgress}
          closed={closed}
          total={total}
        />
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-5 ">
          <IssuesBarGraph data={weeksData} />
          <Card/>
      </div>
          <LatestIssues />
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: "Bugster - Dashboard",
  description:
    "See a quick summary of issues posted on Bugster from various projects. ",
};
