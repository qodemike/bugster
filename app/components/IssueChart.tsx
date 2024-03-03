"use client";

import React from "react";
import { ResponsiveContainer,Tooltip, Legend, BarChart, XAxis, YAxis, CartesianGrid, Bar } from "recharts";
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
    <Card>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <XAxis dataKey="label" />
          <YAxis />
          <CartesianGrid strokeDasharray="5 5" />
          <Tooltip/>
          <Legend/>
          <Bar dataKey="issues" barSize={60} fill=""/>
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default IssueChart;
