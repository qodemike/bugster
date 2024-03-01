"use client";

import { Issue, User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Skeleton from "react-loading-skeleton";
import toast, { Toaster } from "react-hot-toast";

interface Props {
  issue: Issue;
}

const SelectAssignee = ({ issue }: Props) => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () =>
      axios
        .get("/api/users")
        .then((res) => res.data)
        .catch((err) => console.log(err)),
    staleTime: 60 * 1000,
  });

  if (isLoading) return <Skeleton height={"32px"}></Skeleton>;

  if (error) return null;

  const handleOnChange = (userId: string) => {
    axios
      .patch("/xapi/issues/" + userId, {
        assignedToUserId: userId === "0" ? null : userId,
      })
      .catch((err) => {
        toast.error("Failed to assign issue");
      });
  };

  return (
    <>
      <Select.Root
        onValueChange={handleOnChange}
        defaultValue={issue.assignedToUserId || ""}
      >
        <Select.Trigger placeholder="Assign to ..." />
        <Select.Content>
          <Select.Group>
            <Select.Label>Suggestions</Select.Label>
            <Select.Item value="0">Unassigned</Select.Item>
            {users?.map((user) => (
              <Select.Item key={user.id} value={user.id}>
                {user.name}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <Toaster></Toaster>
    </>
  );
};

export default SelectAssignee;
