import { Card} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const IssueDetailSkelton = () => {
  const skeletons = Array(10).fill(0);

  return (
    <div className="max-w-xl">
      <Skeleton className="h-12"/>
      <div className="my-3 space-x-3">
        <Skeleton className="h-5" />
        <Skeleton className=" h-5" />
      </div>
      <Card className="p-5 flex gap-1" >
        {skeletons.map(skeleton => 
          <Skeleton className="h-5"  />
          )}
      </Card>
    </div>
  );
};

export default IssueDetailSkelton;
