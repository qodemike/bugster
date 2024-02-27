import { Box } from '@radix-ui/themes';
import React from 'react'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingIssuePage = () => {
  return (
    <Box className='max-w-xl'>
        <Skeleton />
        <Skeleton height={'30rem'}/>
    </Box>
  )
}

export default LoadingIssuePage