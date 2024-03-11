
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
import useFetchWeeklyGraphData from "../hooks/useFetchWeeklyGraphData";
import CustomToolTip from "../components/CustomToolTip";
import { CustomLegend } from "../components/CustomLegend";


const IssuesBarGraph = () => {

const data = useFetchWeeklyGraphData()

  return (
    <Card className="w-full px-4 pt-4 flex flex-col justify-center gap-3 h-[400px] md:h-[calc(100vh-250px)] lg:h-[calc(100vh-140px)] ">
      <ResponsiveContainer
        width={"100%"}
        height={"100%"}
        className="relative right-6"
      >
        <BarChart data={data}>
          <Tooltip
            cursor={{ fill: "hsl(var(--secondary))" }}
            content={({ active, payload, label }) => (
              <CustomToolTip active={active} payload={payload} label={label} />
            )}
          />
          <CartesianGrid strokeDasharray={"5, 5"} className=" stroke-muted-foreground " />
          <XAxis dataKey={"day"}  axisLine={{ stroke: "none" }} />
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

