import React, { Dispatch, SetStateAction } from "react";
import { DateRange } from "react-day-picker";

    
interface DateRangeContextType {
    dateRange: DateRange;
    setDateRange: Dispatch<SetStateAction<DateRange>>
}

const DateRangeContext = React.createContext<DateRangeContextType>({} as DateRangeContextType)

export default DateRangeContext;