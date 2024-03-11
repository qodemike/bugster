import DatePicker from '@/app/components/DateRangePicker'
import React from 'react'
import IssuesWeeklyBarChart from '../IssuesWeeklyBarChart'
import { CustomLegend } from '@/app/components/CustomLegend'

const page = () => {
  return (
    <>
    <div className="lg:fixed lg:z-20 mb-5 md:mb-3 flex flex-col md:flex-row md:justify-between lg:gap-7">
        <h1 className=" mb-3 md:mb-0 text-2xl font-bold ">Analysis Weekly</h1>
        <DatePicker />
    </div>
    <div className=" lg:pt-16 flex flex-col gap-5">
        <IssuesWeeklyBarChart/>
        <CustomLegend/>
    </div>

    </>
  )
}

export default page