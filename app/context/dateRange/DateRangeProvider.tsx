"use client";

import React, { PropsWithChildren, useEffect, useReducer, useState } from "react";
import DateRangeContext from "./DateRangeContext";
import dateRangeReducer from "./DateRangeReducer";

const DateRangeProvider = ({ children }: PropsWithChildren) => {

  const [ dateRange, dispatch ] = useReducer( dateRangeReducer, {
    from: new Date("2024-02-15"),
    to: new Date("2024-03-01"),
  })

  return (
    <DateRangeContext.Provider value={{ dateRange, dispatch }}>
      {children}
    </DateRangeContext.Provider>
  );
};

export default DateRangeProvider;
