'use client'
import { Container } from '@/components/shared'
import StandartNewsCard from '@/components/shared/standart-news-card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { StandardNewsData } from '@/data/standart-news-data'
import { ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const PopularNews = () => {
    const router = useRouter()

    return (
        <Container>
            <div className='flex justify-between items-center gap-x-4 my-10'>
                <h3 className='text-[#ff8400] text-4xl font-bold'>Ommabop Yangiliklar</h3>
                <div className='flex-auto h-1 bg-[#ff8400]'></div>
                <button className='flex items-center gap-x-1 text-[#ff8400] group' onClick={() => router.push('/news')}>
                    <span className='text-base font-bold uppercase'>Barchasi</span>
                    <ChevronRight className='group-hover:translate-x-1 transition-transform' />
                </button>
            </div>
            <div className=''>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent className='pb-4'>
                        {StandardNewsData.map((data, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                                <StandartNewsCard data={data} variant='card' />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className='left-2 bg-[#01075ce7] text-white hover:bg-[#01075c] hover:text-white' />
                    <CarouselNext className='right-2 bg-[#01075ce7] text-white hover:bg-[#01075c] hover:text-white' />
                </Carousel>
            </div>
        </Container>
    )
}

export default PopularNews