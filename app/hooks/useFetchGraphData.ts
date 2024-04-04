"use client";

import { useContext, useEffect, useMemo } from "react";
import DateRangeContext from "../context/dateRange/DateRangeContext";
import { Issue } from "@prisma/client";
import { useQuery, } from "@tanstack/react-query";

interface Data {
  day: string;
  Open: number;
  "In progress": number;
  Closed: number;
}

const useFetchGraphData = () => {
  const { dateRange } = useContext(DateRangeContext);

  const fetchData = async (date: Date) => {
    const response = await fetch(`/api/issues?date=${date}`, { method: "GET" });
    return await response.json();
  };

  const { data } = useQuery<Data[]>({
    queryKey: ["graphData", dateRange],
    queryFn: async () => {

      const result = [];

      for (
        let date = new Date(dateRange.from!);
        date <= dateRange.to!;
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
          day: date.toLocaleDateString().split("/").join('-'),
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

export default useFetchGraphData;
