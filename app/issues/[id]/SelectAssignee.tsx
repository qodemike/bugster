"use client";

import { Issue, User } from "@prisma/client";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Skeleton from "react-loading-skeleton";

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
      .patch("/api/issues/" + userId, {
        assignedToUserId: userId === "0" ? null : userId,
      })
      .catch((err) => {
        toast.error("Failed to assign issue");
      });
  };

  return (
    <>
      <Select
        onValueChange={handleOnChange}
        defaultValue={issue.assignedToUserId || ""}
      >
        <SelectTrigger >
        <SelectValue placeholder="Select to assign..." />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Suggestions</SelectLabel>
            <SelectItem value="0">Unassigned</SelectItem>
            {users?.map((user) => (
              <SelectItem key={user.id} value={user.id}>
                {user.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Toaster></Toaster>
    </>
  );
};

export default SelectAssignee;
