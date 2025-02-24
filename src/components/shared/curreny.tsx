'use client'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const Curreny = () => {
    const [trade] = useState<string>("down")

    return (
        <div className='inline-flex items-center gap-x-2'>
            <div className=''>
                <Image width={100} height={100} src="/img/aqsh.svg" alt="" className='w-full h-full object-contain' />
            </div>
            <div>
                <p className="text-[#9e9e9e] text-sm font-bold leading-[18.20px]">12 135.9</p>
                {
                    trade === 'up' && (
                        <p className='text-xs font-medium leading-none flex items-center gap-x-1 text-[#16cc53]'>
                            <ChevronUp />
                            <span>71.00</span>
                        </p>
                    )
                }
                {
                    trade === 'down' && (
                        <p className='text-xs font-medium leading-none flex items-center gap-x-1 text-[#dd3333]'>
                            <ChevronDown />
                            <span>71.00</span>
                        </p>
                    )
                }
            </div>
        </div>
    )
}

export default Curreny