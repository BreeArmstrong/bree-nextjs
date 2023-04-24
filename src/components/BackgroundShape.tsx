import React from 'react'
import {motion} from 'framer-motion';

type Props = {}

export default function BackgroundShape({}: Props) {
  return (
    <div className='relative flex justify-center items-center'>
        <div className='absolute border border-[#fad2e3] h-[450px] w-[450px] mt-52 animate-pulse opacity-20 rotate-45'/>
        <div className='absolute border border-[#fff] h-[550px] w-[550px] mt-52 animate-spin-slow'/>
    </div>
  )
}