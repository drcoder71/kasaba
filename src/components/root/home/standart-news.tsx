'use client'
import { Container } from '@/components/shared'
import NewsOption from '@/components/shared/news-option'
import StandartNewsCard from '@/components/shared/standart-news-card'
import { StandardNewsData } from '@/data/standart-news-data'
import { ChevronRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const StandartNews = () => {
    const [data, setData] = useState([...StandardNewsData])

    useEffect(() => {
        setData(StandardNewsData.slice(1))
    }, []);

    return (
        <Container>
            <div className='flex justify-between items-center gap-x-4 my-10'>
                <h3 className='text-[#ff8400] text-4xl font-bold'>Yangiliklar</h3>
                <div className='flex-auto h-1 bg-[#ff8400]'></div>
                <button className='flex items-center gap-x-1 text-[#ff8400] group'>
                    <span className='text-base font-bold uppercase'>Barchasi</span>
                    <ChevronRight className='group-hover:translate-x-1 transition-transform' />
                </button>
            </div>
            <div className='flex gap-x-8'>
                <div className='w-[75%] flex flex-col gap-y-7'>
                    <StandartNewsCard data={StandardNewsData[0]} variant='fit' />
                    <div className='flex mt-4 justify-start gap-7 flex-wrap'>
                        {
                            data.map((i) => (
                                <div key={i.id} className='w-[31%]'>
                                    <StandartNewsCard variant='card' data={i} key={i.id} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='w-[25%]'>
                    <NewsOption />
                </div>
            </div>
        </Container>
    )
}

export default StandartNews