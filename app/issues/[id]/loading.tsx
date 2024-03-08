import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const IssueDetailSkelton = () => {
  const skeletons = Array(4).fill(0);

  return (
    <div className="pt-10 md:pt-16 grid grid-cols-1 lg:grid-cols-5 gap-y-8 lg:gap-5">
      <div className=" lg:col-span-3 ">
        <Skeleton className="h-8" />
        <div className="mt-4 flex items-center gap-5">
          <Skeleton className="w-full max-w-[200px] h-4" />
          <Skeleton className="w-[85px] h-6 rounded-full" />
        </div>
        <Card className=" mt-7 min-h-52  p-5 ">
          <Skeleton className=" h-7 " />
          <div className="my-3 border-b"></div>
          <div className="flex flex-col gap-3">
            {skeletons.map(() => (
              <Skeleton className="h-4" />
            ))}
          </div>
        </Card>
        <div className="mt-4 justify-end flex gap-3">
          <Skeleton className="w-[120px] h-[40px]"/>
          <Skeleton className="w-[120px] h-[40px]"/>
        </div>
      </div>
      <div className=" justify-self-center ">
        <Skeleton className="w-full max-w-52 h-6"/>
      </div>
    </div>
  );
};

export default IssueDetailSkelton;
