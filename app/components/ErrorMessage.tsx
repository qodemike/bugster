import React, { PropsWithChildren } from 'react'
import { Text } from "@radix-ui/themes";


const ErrorMessage = ({children}: PropsWithChildren) => {
    if (!children) return null;
    
  return (
    <span color='red'className='text-red-400 text-sm' >{children}</span>
  )
}

export default ErrorMessage