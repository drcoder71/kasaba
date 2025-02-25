'use client'
import PhotoNewsCard from '@/components/shared/photo-news-card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { PhotoNewsData } from '@/data/photo-news-data'
import { ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const PhotoNews = () => {
    const router = useRouter()
    const [data, setData] = useState([...PhotoNewsData])

    useEffect(() => {
        setData(PhotoNewsData.slice(2))
    }, [])

    return (
        <>
            <div className='flex justify-between items-center gap-x-4 my-10 bg-[#ff8400] py-2 px-7'>
                <h3 className='text-[#fff] text-4xl font-bold'>Foto Yangiliklar</h3>
                <div className='flex-auto h-1 bg-[#ff8400]'></div>
                <button className='flex items-center gap-x-1 text-[#fff] group' onClick={() => router.push('/news/photo')}>
                    <span className='text-base font-bold uppercase'>Barchasi</span>
                    <ChevronRight className='group-hover:translate-x-1 transition-transform' />
                </button>
            </div>
            <div className='flex flex-col gap-y-10'>
                <div className='flex items-center justify-between gap-x-10'>
                    <PhotoNewsCard data={PhotoNewsData[0]} />
                    <PhotoNewsCard data={PhotoNewsData[1]} />
                </div>
                <div className=''>
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-full"
                    >
                        <CarouselContent className='pb-4'>
                            {data.map((data, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <PhotoNewsCard data={data} variant='small' />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className='left-2 bg-[#01075ce7] text-white hover:bg-[#01075c] hover:text-white border-[#01075c]' />
                        <CarouselNext className='right-2 bg-[#01075ce7] text-white hover:bg-[#01075c] hover:text-white border-[#01075c]' />
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default PhotoNews