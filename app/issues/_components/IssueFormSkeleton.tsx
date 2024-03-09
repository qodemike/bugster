import React from "react";
import { Box } from "@radix-ui/themes";
import { Skeleton } from "@/components/ui/skeleton";

const IssueFormSkeleton = () => {
  return (
    <div className="md:pt-16">
      <h1 className="mb-3 text-2xl font-bold">Fill the Form Below</h1>
      <Box className=" flex flex-col gap-6 ">
        <Skeleton className="h-10" />
        <Skeleton className="h-[405px]" />
      </Box>
    </div>
  );
};

export default IssueFormSkeleton;
