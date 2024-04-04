'use client'

import { toast } from "@/components/ui/use-toast";
import { DateRange } from "react-day-picker";


interface UPDATEWEEKTO{
    day: Date
    type: "UPDATE WEEK TO"
}

interface UPDATEWEEKFROM{
    day: Date
    type: "UPDATE WEEK FROM"
}

export type  Action =  UPDATEWEEKTO | UPDATEWEEKFROM

const dateRangeReducer = (dateRange: DateRange, action: Action): DateRange => {
    const showToast = () => toast({
        variant: "destructive",
        title: "Exceeding Selection Range!",
        description: "Select a range of upto 7 Days",
      });

        if (action.type === 'UPDATE WEEK TO'){
            const numberOfDays = Math.ceil( (action.day.getTime() - dateRange.from!.getTime()) / (1000 * 60 * 60 * 24) )

            if ( numberOfDays > 7 ){
                    showToast();
                  return dateRange;
            }
             return {...dateRange, to: action.day }
        }

        if (action.type === 'UPDATE WEEK FROM'){
            const numberOfDays = Math.ceil( (dateRange.to!.getTime() - action.day.getTime()) / (1000 * 60 * 60 * 24) )

            if ( numberOfDays >= 7){
                showToast();
                return dateRange;
            }
            return {...dateRange, from: action.day}
        }
        
        return dateRange
}

export default dateRangeReducer;