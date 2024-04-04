"use client";

import React, { PropsWithChildren, useEffect, useReducer, useState } from "react";
import WeeksDateRangeContext from "./WeeksDateRangeContext";
import dateRangeReducer from "./weeksDateRangeReducer";

const WeeksDateRangeProvider = ({ children }: PropsWithChildren) => {

  const [ weeksDateRange, dispatch ] = useReducer( dateRangeReducer, {
    from: new Date("2024-02-26"),
    to: new Date("2024-03-01"),
  })

  return (
    <WeeksDateRangeContext.Provider value={{ weeksDateRange, dispatch }}>
      {children}
    </WeeksDateRangeContext.Provider>
  );
};

export default WeeksDateRangeProvider;
