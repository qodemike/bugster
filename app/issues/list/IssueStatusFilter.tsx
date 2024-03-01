"use client";

import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const statuses: { label: string; value: Status | null }[] = [
  { label: "All", value: null },
  { label: "Open", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];

const IssueStatusFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleOnChange = (status: string | null) => {
    const params = new URLSearchParams();

    if (status) params.append("status", status);

    if (searchParams.get('sortBy'))
      params.append('sortBy', searchParams.get('sortBy')!)

    const query =  params.size ? '?' + params.toString() : '';
    router.push(`/issues/list` + query);
  };

  return (
    <Select.Root onValueChange={handleOnChange}>
      <Select.Trigger
        style={{ cursor: "pointer" }}
        placeholder="Filter by status..."
      ></Select.Trigger>
      <Select.Content>
        {statuses.map((status) => (
          <Select.Item key={status.value} value={status.value!}>
            {status.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusFilter;
