"use client";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Button, Text } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  itemsCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ itemsCount, pageSize, currentPage }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pageCount = Math.ceil(itemsCount / pageSize);

  if (pageCount <= 1) return null;

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push("?" + params.toString());
  };

  return (
    <>
      <div className="flex gap-2 items-center">
        <div className="w-24">
        <Text size={"2"} >
          Page {currentPage} of {pageCount}
        </Text>
        </div>
        <Button
            title="first page"
          color={currentPage == 1 ? 'gray': "violet"}
          variant="classic"
          disabled={currentPage === 1}
          onClick={() => changePage(1)}
        >
          <DoubleArrowLeftIcon />
        </Button>
        <Button
          color="violet"
          variant="classic"
          disabled={currentPage === 1}
          onClick={() => changePage(currentPage - 1)}
        >
          <ChevronLeftIcon />
        </Button>
        <Button
          color="violet"
          variant="classic"
          disabled={currentPage === pageCount}
          onClick={() => changePage(currentPage + 1)}
        >
          <ChevronRightIcon />
        </Button>
        <Button
        title="last page"
          color={currentPage == pageCount ? 'gray': "violet"}
          variant="classic"
          disabled={currentPage === pageCount}
          onClick={() => changePage(pageCount)}
        >
          <DoubleArrowRightIcon />
        </Button>
      </div>
    </>
  );
};

export default Pagination;
