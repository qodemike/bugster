import React from "react";
import { Status } from "@prisma/client";
import { useTheme } from "next-themes";

interface Props {
  status: Status;
}

// Record is a utillity type that allow us to define types of key and value in an object

const IssueStatusBadge = ({ status }: Props) => {
  const { theme } = useTheme();
  const statusMap: Record<Status, { label: string; color: string }> = {
    OPEN: {
      label: "Open",
      color: `${theme === "light"  ? "text-red-700" : "text-red-400"} bg-red-500`,
    },
    IN_PROGRESS: {
      label: "In Progress",
      color: `${
        theme === "light" ? "text-blue-700" : "text-blue-400"
      } bg-blue-500`,
    },
    CLOSED: {
      label: "Closed",
      color: `${
        theme === "light" ? "text-green-700" : "text-green-400"
      } bg-green-500`,
    },
  };

  return (
    <div>
      <div
        className={
          "w-[100px] py-1 bg-opacity-30 rounded-full flex justify-center items-center " +
          statusMap[status].color
        }
      >
        {statusMap[status].label}
      </div>
    </div>
  );
};

export default IssueStatusBadge;
