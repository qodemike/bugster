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
      <h2 className="font-bold">Overview</h2>
      <ResponsiveContainer width="100%" height={400} className="relative right-4">
        <BarChart data={data}>
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip/>
          <Legend/>
          <Bar dataKey="issues" barSize={60} fill=""/>
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default IssueChart;
