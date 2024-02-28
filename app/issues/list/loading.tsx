import React from "react";
import { Table } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import IssueActions from "../_components/IssueActions";

const IssuesPageSkeleton = () => {
  const issues = Array(7).fill(0);

  return (
    <>
      <div className="mb-5 w-fit cursor-pointer">
        <IssueActions />
      </div>
      <Table.Root variant="surface">
        <Table.Header className="bg-slate-100">
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Created
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue, index) => (
            <Table.Row
              key={index}
              className="hover:bg-neutral-100 transition cursor-pointer"
            >
              <Table.Cell className="">
                <Skeleton />
                <div className="block md:hidden">
                  <Skeleton />
                </div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <Skeleton />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <Skeleton />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
};

export default IssuesPageSkeleton;
