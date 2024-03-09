'use client'

import React, { PropsWithChildren, useState } from 'react'
import DateRangeContext from './DateContext'
import { DateRange } from 'react-day-picker';


const DateRangeProvider = ({children}: PropsWithChildren) => {

    const [dateRange, setDateRange] = useState<DateRange>({
        from: new Date("2024-02-26"),
        to: new Date("2024-03-01"), 
    });

  return (
    <DateRangeContext.Provider value={{ dateRange: dateRange, setDateRange }}>{children}</DateRangeContext.Provider>
  )
}

export default DateRangeProvider