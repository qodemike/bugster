export interface CustomToolTipProps {
  active: any;
  payload: any;
  label: any;
}

const CustomToolTip = ({ active, payload, label }: CustomToolTipProps) => {
  if (!active || !payload.length) return;

  return (
    <div className="p-4 text-sm bg-card border shadow flex flex-col gap-2 rounded">
      <span className="text-muted-foreground">{label}</span>
      <div className="flex justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="w-[10px] h-[10px] bg-open" />
          <span>Open:</span>
        </div>
        <span>{payload[0].value}</span>
      </div>
      <div className="flex justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="w-[10px] h-[10px] bg-inProgress" />
          <span>In Progress:</span>
        </div>
        <span>{payload[1].value}</span>
      </div>
      <div className="flex justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="w-[10px] h-[10px] bg-closed" />
          <span>Closed:</span>
        </div>
        <span>{payload[2].value}</span>
      </div>
    </div>
  );
};

export default CustomToolTip;
