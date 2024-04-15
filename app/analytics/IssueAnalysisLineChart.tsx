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
import { Card } from "@/components/ui/card";
import CustomToolTip from "../components/CustomToolTip";
import useFetchGraphData from "../hooks/useFetchGraphData";

const IssuesAnalysisLineChart = () => {
  const data = useFetchGraphData();
  return (
    <Card className="w-full px-4 pt-4 flex flex-col justify-center gap-3  h-[400px] md:h-[calc(100vh-250px)] lg:h-[calc(100vh-140px)]">
      <ResponsiveContainer minWidth={600} height={"100%"} className={"relative right-6"}>
        <LineChart data={data}>
          <CartesianGrid
          vertical={false}
           strokeDasharray={"5, 5"} className=" stroke-muted-foreground " />
          <XAxis dataKey={"day"} style={{fontSize: "14px"}} />
          <YAxis />
          <Line type="monotone" dataKey="Open" style={{stroke: "var(--open)" }} />
          <Line type="monotone" dataKey="In progress" style={{stroke: " var(--in-progress) " }} />
          <Line type="monotone" dataKey="Closed" style={{stroke: "var(--closed) " }} />
          <Tooltip
            content={({ active, payload, label }) => (
              <CustomToolTip active={active} payload={payload} label={label} />
            )}
          />
        </LineChart>
      </ResponsiveContainer>

    </Card>
  );
};

export default IssuesAnalysisLineChart;
