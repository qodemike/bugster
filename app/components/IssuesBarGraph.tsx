"use client";

import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card } from "@/components/ui/card";
import CustomToolTip from "./CustomToolTip";
import useFetchWeeklyGraphData from "../hooks/useFetchWeeklyGraphData";
import { useRouter } from "next/navigation";

const IssuesBarGraph = () => {
  const router = useRouter();

  const data = useFetchWeeklyGraphData();

  return (
    <Card
      onClick={() => router.push("/analytics/weekly")}
      className="w-full md:px-4 pt-4 flex flex-col justify-center gap-3  cursor-pointer"
    >
      <div className="flex flex-col items-center ">
        <h2 className="font-bold">Weekly Overview</h2>
        <p className="text-sm dark:text-muted-foreground">
          A week of Issues activity
        </p>
      </div>
      <ResponsiveContainer
        width={"100%"}
        height={350}
        className="relative right-6"
      >
        <BarChart data={data}>
          <Tooltip
            cursor={{ fill: "hsl(var(--secondary))" }}
            content={({ active, payload, label }) => (
              <CustomToolTip active={active} payload={payload} label={label} />
            )}
          />
          <CartesianGrid
            strokeDasharray={"5, 5"}
            className=" stroke-muted-foreground "
          />
          <XAxis dataKey={"day"} axisLine={{ stroke: "none" }} />
          <YAxis axisLine={{ stroke: "none" }} />
          <Bar
            barSize={10}
            radius={[10, 10, 10, 10]}
            dataKey={"Open"}
            className=" fill-secondary-foreground "
          />
          <Bar
            barSize={10}
            radius={[10, 10, 10, 10]}
            dataKey={"In progress"}
            className="fill-inProgress "
          />
          <Bar
            barSize={10}
            radius={[10, 10, 10, 10]}
            dataKey={"Closed"}
            className="fill-closed "
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default IssuesBarGraph;
