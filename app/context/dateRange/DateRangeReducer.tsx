'use client'

import { toast } from "@/components/ui/use-toast";
import { DateRange } from "react-day-picker";

interface UPDATETO {
    day: Date
    type: "UPDATE TO"
}

interface UPDATEFROM{
 day: Date
 type: "UPDATE FROM"
}


export type  Action = UPDATETO | UPDATEFROM 

const dateRangeReducer = (dateRange: DateRange, action: Action): DateRange => {

        if (action.type === 'UPDATE TO'){

            return {...dateRange, to: action.day}
        }

        if (action.type === 'UPDATE FROM'){

            return {...dateRange, from: action.day}
        }
        
        return dateRange
}

export default dateRangeReducer;