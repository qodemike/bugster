import React, { Dispatch, SetStateAction } from "react";
import { DateRange } from "react-day-picker";
import { Action } from "./weeksDateRangeReducer";

    
interface DateRangeContextType {
    weeksDateRange: DateRange;
    dispatch: Dispatch<Action>
}

const WeeksDateRangeContext = React.createContext<DateRangeContextType>({} as DateRangeContextType)

export default WeeksDateRangeContext;