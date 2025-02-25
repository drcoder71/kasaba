'use client'
import VideoNewsCard from '@/components/shared/video-news-card'
import { VideoNewsData } from '@/data/video-data'
import { VideoNewsType } from '@/types'
import { formatDate } from '@/utils'
import { ChevronRight, EllipsisVertical } from 'lucide-react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const VideoNews = () => {
    const [data, setData] = useState<VideoNewsType[]>([...VideoNewsData])
    const router = useRouter()
    const [firstVideoDate, setFirstVideoDate] = useState("")

    useEffect(() => {
        setFirstVideoDate(formatDate(VideoNewsData[0].time))
        setData(VideoNewsData.slice(1))
    }, [])

    return (
        <>
            <div className='flex justify-between items-center gap-x-4 my-10 bg-[#ff8400] py-2 px-7'>
                <h3 className='text-[#fff] text-4xl font-bold'>Video Yangiliklar</h3>
                <div className='flex-auto h-1 bg-[#ff8400]'></div>
                <button className='flex items-center gap-x-1 text-[#fff] group' onClick={() => router.push('/video-news')}>
                    <span className='text-base font-bold uppercase'>Barchasi</span>
                    <ChevronRight className='group-hover:translate-x-1 transition-transform' />
                </button>
            </div>
            <div className="grid grid-cols-2 py-10">
                <div className=" flex flex-col gap-5">
                    <ReactPlayer
                        url={VideoNewsData[0].video}
                        controls
                        width="100%"
                        height="340px"
                    />
                    <Link
                        href={VideoNewsData[0].id}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-2xl text-white duration-200 hover:text-orange-500"
                    >{VideoNewsData[0].title}</Link>
                    <div className="flex items-center gap-3">
                        <p className="py-1 px-6 rounded bg-white/15 font-medium text-sm text-white">
                            {firstVideoDate}
                        </p>
                        <p className=" py-1 px-10 rounded bg-white/15 font-medium text-sm text-white">
                            1 oy oldin {VideoNewsData[0].viewrs} ta ko‘rish
                        </p>
                        <button className="py-1 px-2 rounded bg-white/15">
                            <EllipsisVertical className=" w-5 h-5 text-white" />
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-start ">
                    <div className="h-full bg-orange-500 w-[2px] mx-10"></div>
                    <div
                        id="scrollBar"
                        className="w-full h-[480px] overflow-y-auto flex flex-col gap-5 pr-5"
                    >
                        {data.map((data) => (
                            <VideoNewsCard key={data.id} data={data} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoNews