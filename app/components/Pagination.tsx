import { ChevronLeftIcon, ChevronRightIcon, DoubleArrowDownIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from "@radix-ui/react-icons";
import { Button, Text } from "@radix-ui/themes";

interface Props {
  itemsCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ itemsCount, pageSize, currentPage }: Props) => {
  const pageCount = Math.ceil(itemsCount / pageSize);

  if (pageCount <= 1) return null;

  return (
    <>
      <div className="flex gap-2 items-center">
        <Text size={'2'}>Page {currentPage} of {pageCount}</Text>
        <Button color="gray" variant="soft" disabled={currentPage === 1}> <DoubleArrowLeftIcon/></Button>
        <Button color="gray" variant="soft" disabled={currentPage === 1}> <ChevronLeftIcon/></Button>
        <Button color="gray" variant="soft" disabled={currentPage === pageCount}> <ChevronRightIcon/></Button>
        <Button color="gray" variant="soft" disabled={currentPage === pageCount}> <DoubleArrowRightIcon/></Button>
      </div>
    </>
  );
};

export default Pagination;
