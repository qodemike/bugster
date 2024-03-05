"use client";

import React from "react";
import { ResponsiveContainer,Tooltip, Legend, BarChart, XAxis, YAxis, Bar } from "recharts";
import { Card } from "@/components/ui/card";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueChart = ({ open, inProgress, closed }: Props) => {
  const data = [
    { label: "Open", issues: open },
    { label: "In Progress", issues: inProgress },
    { label: "Closed", issues: closed },
  ];

  return (
    <Card className="overflow-hidden flex flex-col justify-center items-center gap-5 ">
      <div className="flex flex-col items-center">
      <h2 className="font-bold">Total Issue Overview</h2>
      <p className="text-sm dark:text-muted-foreground">+20.1% from last month</p>
      </div>
      <ResponsiveContainer width="100%" height={400} className="relative right-4">
        <BarChart data={data}>
          <XAxis dataKey="label" tickLine={false} />
          <YAxis />
          <Tooltip/>
          <Bar dataKey="issues" barSize={60} className="fill-primary" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default IssueChart;
