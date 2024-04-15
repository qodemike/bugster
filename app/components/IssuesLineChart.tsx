"use client";

import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CustomToolTip from "./CustomToolTip";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import useFetchGraphData from "../hooks/useFetchGraphData";

const IssuesLineChart = () => {
  const router = useRouter();
  const data = useFetchGraphData();
  return (
    <Card
      className="w-full px-4 pt-4 flex flex-col justify-center gap-3 "
      onClick={() => router.push("/analytics")}
    >
      <div className="flex flex-col items-center ">
        <h2 className="font-bold">Overall Activity</h2>
        <p className="text-sm dark:text-muted-foreground">
          +20.1% closed last month
        </p>
      </div>
      <div className="overflow-x-scroll md:overflow-auto">
        <ResponsiveContainer
          minWidth={600}
          height={350}
          className={"relative right-6"}
        >
          <LineChart data={data}>
            <CartesianGrid
              vertical={false}
              strokeDasharray={"5, 5"}
              className=" stroke-muted-foreground "
            />
            <XAxis dataKey={"day"} style={{ fontSize: "12px" }} />
            <YAxis />
            <Line
              type="monotone"
              dataKey="Open"
              style={{ stroke: "var(--open)" }}
            />
            <Line
              type="monotone"
              dataKey="In progress"
              style={{ stroke: " var(--in-progress) " }}
            />
            <Line
              type="monotone"
              dataKey="Closed"
              style={{ stroke: "var(--closed) " }}
            />
            <Tooltip
              content={({ active, payload, label }) => (
                <CustomToolTip
                  active={active}
                  payload={payload}
                  label={label}
                />
              )}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default IssuesLineChart;
