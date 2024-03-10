"use client";

import React from "react";
import { ResponsiveContainer, Tooltip, PieChart, Pie, Cell, Legend } from "recharts";
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
    <Card className="py-4 h-full   flex flex-col justify-center items-center  ">
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
            outerRadius={110}
            innerRadius={70}
            className="stroke-0 fill-none "
            cornerRadius={"100%"}
            paddingAngle={-20}
          >
            {data.map((record) => (
              <Cell className={record.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend content={() => <CustomLegend/> }/>
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default IssuePieChart;

const CustomLegend  = () => {
  return (
    <div className="flex justify-center gap-4">
      <div className="flex items-center gap-2">
      <div className=" w-[10px]  h-[10px] bg-open rounded-full "/> <span className="text-sm">Open</span>
      </div>
      <div className="flex items-center gap-2">
      <div className=" w-[10px]  h-[10px] bg-inProgress rounded-full "/> <span className="text-sm">In Progress</span>
      </div>
      <div className="flex items-center gap-2">
      <div className=" w-[10px]  h-[10px] bg-closed rounded-full "/> <span className="text-sm">Closed</span>
      </div>
    </div>
  )
}