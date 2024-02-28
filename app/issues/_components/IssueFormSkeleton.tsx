import React from 'react'
import { Box } from '@radix-ui/themes';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


const IssueFormSkeleton = () => {
  return (
    <Box className='max-w-xl'>
        <Skeleton height={"1rem"}/>
        <Skeleton height={'30rem'}/>
    </Box>
  )
}

export default IssueFormSkeleton