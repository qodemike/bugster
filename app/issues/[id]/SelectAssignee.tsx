"use client";

import { Issue, User } from "@prisma/client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/components/ui/use-toast";

interface Props {
  issue: Issue;
}

const SelectAssignee = ({ issue }: Props) => {
  
  const { toast } = useToast();
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

  if (isLoading) return <Skeleton className="h-9"></Skeleton>;

  if (error) return null;

  const handleOnChange =  (userId: string) => {
    axios
      .patch("/api/issues/" + issue.id, {
        assignedToUserId: userId === "0" ? null : userId,
      }).then()
      .catch((err) => {
        toast({
          variant: "destructive",
          title: "Failed to Assign Issue!",
          description: "Operation failed to assign Issue. Try Again!",
        });
      });
  };

  return (
    <div className="flex  items-center gap-4">
      <span  className=" text-sm  font-bold whitespace-nowrap ">Issue Assigned to:</span>
      <Select
        onValueChange={handleOnChange}
        defaultValue={issue.assignedToUserId || ""}
      >
        <SelectTrigger className=" flex gap-7">
          <SelectValue  placeholder="Select to assign issue... " />
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
    </div>
  );
};

export default SelectAssignee;
