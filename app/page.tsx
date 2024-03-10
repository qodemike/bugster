import { Metadata } from "next";
import IssueBarChart from "./components/IssueBarChart";
import IssueSummary from "./components/IssueSummary";
import LatestIssues from "./components/LatestIssues";
import prisma from "@/prisma/client";
import { Card } from "@/components/ui/card";
import IssuesBarGraph from "./components/IssuesBarGraph";
import DatePicker from "./components/DateRangePicker";

export default async function Home() {
  
  return (
    <>
    <div className="lg:fixed lg:z-20 mb-5 md:mb-3 flex flex-col md:flex-row md:justify-between lg:gap-7">
      <h1 className=" mb-3 md:mb-0 text-2xl font-bold ">Dashboard</h1>
      <DatePicker/>
    </div>
      <div className="lg:pt-16 flex flex-col gap-5">
        <IssueSummary/>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-5 ">
          <IssuesBarGraph />
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
