'use client'
import { TopNewsData } from '@/data/top-news-data'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import Container from './container'

const TopNews = () => {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [, setCount] = useState(0)

    useEffect(() => {
        if (!api) {
            return
        }
        setCount(api.scrollSnapList()?.length || 0)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <Container className="relative">
            <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                    {TopNewsData.map(({ title, image, publishedAt, id }, idx) => (
                        <CarouselItem key={title + idx}>
                            <div className="relative w-full h-[650px]">
                                <Image
                                    src={image.src}
                                    alt={image.alt + idx}
                                    width={1920}
                                    height={1080}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 w-full h-[200px]">
                                    <div className="relative w-full h-full flex flex-col gap-y-2 py-[25px] px-[75px] z-10 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#000573]/60 after:blur after:-z-10">
                                        <h3 className="w-[85%] text-white text-4xl font-bold">
                                            {title}
                                        </h3>
                                        <div className="w-[266.35px] h-[32.94px] px-3.5 py-1.5 bg-white/10 rounded border border-white/10 backdrop-blur-[30px] justify-center items-center gap-2.5 inline-flex">
                                            <p className="text-white text-sm font-medium leading-[18.20px]">
                                                {publishedAt.data},
                                            </p>
                                            <p className="text-white text-sm font-medium leading-[18.20px]">
                                                {publishedAt.time}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-5 w-10 h-10" />
                <CarouselNext className="right-5 w-10 h-10" />
                <div className="absolute bottom-10 left-0 w-full z-10">
                    <div className="flex justify-center gap-x-2">
                        {TopNewsData.map((_, idx) => (
                            <span
                                key={idx}
                                className={cn(
                                    "w-3 h-3 rounded-full bg-white/25 transition-all",
                                    current === idx + 1 && "w-7 rounded-xl bg-white"
                                )}
                                onClick={() => api?.scrollTo(idx)}
                            ></span>
                        ))}
                    </div>
                </div>
            </Carousel>
        </Container>
    )
}

export default TopNews