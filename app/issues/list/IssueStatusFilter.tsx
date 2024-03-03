"use client";

import { Status } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { Select,SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

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
    <Select onValueChange={handleOnChange}>
      <SelectTrigger
        style={{ cursor: "pointer" }}
        >
        <SelectValue
        placeholder="Filter by status..."
        />
      </SelectTrigger>
      <SelectContent>
        {statuses.map((status) => (
          <SelectItem key={status.value} value={status.value!}>
            {status.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default IssueStatusFilter;
