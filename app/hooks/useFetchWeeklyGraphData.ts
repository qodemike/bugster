"use client";

import { useContext, useEffect, useMemo } from "react";
import { Issue } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import WeeksDateRangeContext from "../context/weeksDateRange/WeeksDateRangeContext";

interface WeeksData {
  day: string;
  Open: number;
  "In progress": number;
  Closed: number;
}

const useFetchWeeklyGraphData = () => {
  const {  weeksDateRange } = useContext(WeeksDateRangeContext);

  const fetchData = async (date: Date) => {
    const response = await fetch(`/api/issues?date=${date}`, { method: "GET" });
    return await response.json();
  };

  const { data } = useQuery<WeeksData[]>({
    queryKey: ["graphData", weeksDateRange],
    queryFn: async () => {

      const result = [];

      for (
        let date = new Date(weeksDateRange.from!);
        date <= weeksDateRange.to!;
        date.setDate(date.getDate() + 1)
      ) {
        const issues: Issue[] = await fetchData(date);

        const openCount = issues.filter(
          (issue) => issue.status === "OPEN"
        ).length;
        const inProgressCount = issues.filter(
          (issue) => issue.status === "IN_PROGRESS"
        ).length;
        const closedCount = issues.filter(
          (issue) => issue.status === "CLOSED"
        ).length;

        result.push({
          day: date.toDateString().split(" ")[0],
          Open: openCount,
          "In progress": inProgressCount,
          Closed: closedCount,
        });
      }
      return result;
    },
    refetchOnWindowFocus: false,
  });

  return data;
};

export default useFetchWeeklyGraphData;
