"use client";

import React from "react";
import {
  ResponsiveContainer,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Bar,
} from "recharts";
import { Card } from "@/components/ui/card";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueBarChart = ({ open, inProgress, closed }: Props) => {
  const data = [
    { label: "Open", issues: open },
    { label: "In Progress", issues: inProgress },
    { label: "Closed", issues: closed },
  ];

  return (
    <Card className="py-4 h-full   flex flex-col justify-center items-center gap-5 ">
      <div className="flex flex-col items-center ">
        <h2 className="font-bold">Quick Issues Overview</h2>
        <p className="text-sm dark:text-muted-foreground">
          +20.1% from last month
        </p>
      </div>

      <ResponsiveContainer
        width="100%"
        height={350}
        className="relative right-4"
      >
        <BarChart data={data}>
          <XAxis
            dataKey="label"
            tickLine={{ stroke: "none" }}
            axisLine={{ stroke: "none" }}
          />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: 0,
              color: "hsl(var(--foreground))",
              borderRadius: "5px",
            }}
            cursor={{ fill: "hsl(var(--secondary))" }}
          />
          <Bar
            barSize={45}
            dataKey="issues"
            radius={[0, 0, 0, 0]}
            className="fill-primary"
          />
        </BarChart>
      </ResponsiveContainer>

    </Card>
  );
};

export default IssueBarChart;
