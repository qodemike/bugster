import React, { Dispatch, SetStateAction } from "react";
import { DateRange } from "react-day-picker";
import { Action } from "./DateRangeReducer";

    
interface DateRangeContextType {
    dateRange: DateRange;
    dispatch: Dispatch<Action>
}

const DateRangeContext = React.createContext<DateRangeContextType>({} as DateRangeContextType)

export default DateRangeContext;