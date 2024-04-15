import { Metadata } from "next";
import IssuePieChart from "./components/IssuePieChart";
import IssueSummary from "./components/IssueSummary";
import LatestIssues from "./components/LatestIssues";
import prisma from "@/prisma/client";
import IssuesBarGraph from "./components/IssuesBarGraph";
import WeeklyDateRangePicker from "./components/WeeklyDateRangePicker";
import IssuesLineChart from "./components/IssuesLineChart";

export default async function Home() {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closed = await prisma.issue.count({ where: { status: "CLOSED" } });

  return (
    <>
      <div className="lg:fixed lg:z-20 mb-5 md:mb-3 flex flex-col md:flex-row md:justify-between lg:gap-7">
        <h1 className=" mb-3 md:mb-0 text-2xl font-bold ">Dashboard</h1>
        <WeeklyDateRangePicker />
      </div>
      <div className="lg:pt-16 flex flex-col gap-5">
        <IssueSummary open={open} inProgress={inProgress} closed={closed} />
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-5 ">
          <LatestIssues />
          <IssuePieChart open={open} inProgress={inProgress} closed={closed} />
        </div>
        <div className="grid grid-cols-1  gap-5">
          <IssuesBarGraph />
          <IssuesLineChart />
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
