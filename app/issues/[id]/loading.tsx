import { Card, Flex } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const IssueDetailSkelton = () => {
  return (
    <div className="max-w-xl">
      <Skeleton />
      <Flex className="my-3 space-x-3">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card>
        <Skeleton count={7} />
      </Card>
    </div>
  );
};

export default IssueDetailSkelton;
