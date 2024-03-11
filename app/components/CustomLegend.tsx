

export const CustomLegend = () => {
  return (
    <div className="flex justify-center gap-4">
      <div className="flex items-center gap-2">
        <div className=" w-[10px]  h-[10px] bg-open rounded-full " />{" "}
        <span className="text-sm">Open</span>
      </div>
      <div className="flex items-center gap-2">
        <div className=" w-[10px]  h-[10px] bg-inProgress rounded-full " />{" "}
        <span className="text-sm">In Progress</span>
      </div>
      <div className="flex items-center gap-2">
        <div className=" w-[10px]  h-[10px] bg-closed rounded-full " />{" "}
        <span className="text-sm">Closed</span>
      </div>
    </div>
  );
};

