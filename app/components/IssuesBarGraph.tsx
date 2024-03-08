"use client";

import React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianAxis,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card } from "@/components/ui/card";
import { useTheme } from "next-themes";

interface Props {
  data: { day: string; Open: number; "In progress": number; Closed: number }[];
}

const IssuesBarGraph = ({ data }: Props) => {
  const {theme} = useTheme()
  return (
    <Card className="w-full p-5 flex flex-col justify-center ">
      <ResponsiveContainer width={"100%"} height={350} className="relative right-6">
        <BarChart  data={data}>
          <Tooltip cursor={{ fill: "hsl(var(--secondary))"}} />
        <CartesianGrid strokeDasharray={"5, 5"} />
          <XAxis dataKey={"day"} axisLine={{stroke: 'none'}}/>
          <YAxis  axisLine={{stroke: 'none'}} />
          <Bar barSize={20} radius={[10, 10, 10, 10]}  dataKey={"Open"} className=" fill-secondary-foreground " />
          <Bar barSize={20} radius={[10, 10, 10, 10]}  dataKey={"In progress"} className="fill-blue-600 "/>
          <Bar barSize={20} radius={[10, 10, 10, 10]}  dataKey={"Closed"} className="fill-emerald-500 "/>
          <Legend />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default IssuesBarGraph;
