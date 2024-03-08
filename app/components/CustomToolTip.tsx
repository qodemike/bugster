
interface CustomToolTipProps {
  active: any;
  payload: any;
  label: any;
}

const CustomToolTip = ({ active, payload, label }: CustomToolTipProps) => {
  if (!active || !payload.length) return;

  return (
    <div className="p-4 text-sm bg-card flex flex-col gap-4 rounded">
      <p className="text-muted-foreground">{label}</p>
      <p className="flex justify-between gap-2">
        Open:<span>{payload[0].value}</span>
      </p>
      <p className="flex justify-between gap-2">
        In Progress:<span>{payload[1].value}</span>
      </p>
      <p className="flex justify-between gap-2">
        Closed:<span>{payload[2].value}</span>
      </p>
    </div>
  );
};

export default CustomToolTip;
