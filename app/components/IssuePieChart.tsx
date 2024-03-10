"use client";

import React from "react";
import { ResponsiveContainer, Tooltip, PieChart, Pie, Cell } from "recharts";
import { Card } from "@/components/ui/card";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssuePieChart = ({ open, inProgress, closed }: Props) => {
  const data = [
    { label: "Open", issues: open, color: " fill-open" },
    { label: "In Progress", issues: inProgress, color: " fill-inProgress " },
    { label: "Closed", issues: closed, color: " fill-closed" },
  ];

  const COLORS = ["#222831"];
  return (
    <Card className="py-4 h-full   flex flex-col justify-center items-center gap-5 ">
      <div className="flex flex-col items-center ">
        <h2 className="font-bold">Quick Issues Overview</h2>
        <p className="text-sm dark:text-muted-foreground">
          +20.1% from last month
        </p>
      </div>

      <ResponsiveContainer width="100%" height={"100%"}>
        <PieChart>
          <Pie
            data={data}
            dataKey={"issues"}
            nameKey="label"
            outerRadius={120}
            innerRadius={80}
            className="stroke-0 fill-none "
            cornerRadius={"100%"}
            paddingAngle={-18}
          >
            {data.map((record) => (
              <Cell className={record.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default IssuePieChart;
