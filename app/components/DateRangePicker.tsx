"use client";

import React, { useContext} from "react";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import DateRangeContext from "../context/dateRange/DateContext";

const DatePicker = () => {

  const { dateRange, dispatch} = useContext(DateRangeContext)

  const handleOnSelectDayFrom = (day: Date) => {
    dispatch( { day , type: "UPDATE FROM"} )
  };
  const handleOnSelectDayTo = (day: Date) => {
    dispatch( { day , type: "UPDATE TO"} )
  };

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex items-center gap-2">
        <span className=" basis-[38px] md:basis-0 text-xs">FROM:</span>
        <Popover>
          <PopoverTrigger>
            <Button
              variant="outline"
              className="w-48 h-[35px] bg-card flex justify-between "
            >
              {(
                <span className=" text-sm lg:text-xs">
                    {dateRange?.from?.toDateString()}
                </span>
              ) || <span className=" text-sm lg:text-xs">Pick a date</span>}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={dateRange.from}
              onDayClick={(day) => handleOnSelectDayFrom(day)}
              disabled={(date) =>
                date > new Date() || date < new Date("1970-01-01")
              }
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex items-center gap-2">
        <span className=" basis-[38px] md:basis-0 text-xs">TO:</span>
        <Popover>
          <PopoverTrigger>
            <Button
              variant="outline"
              className="w-48 h-[35px] bg-card flex justify-between "
            >
              {<span className="text-sm lg:text-xs">{dateRange?.to?.toDateString()}</span> || (
                <span className="text-sm lg:text-xs">Pick a date</span>
              )}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={dateRange.to}
              onDayClick={(day) => handleOnSelectDayTo(day)}
              disabled={(date) =>
                date > new Date() || date < dateRange.from!
              }
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default DatePicker;
