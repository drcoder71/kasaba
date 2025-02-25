import { Container } from '@/components/shared'
import React from 'react'
import VideoNews from './video-news'

const MediaNews = () => {
    return (
        <Container>
            <div className='flex justify-between items-center gap-x-4 my-10 py-7'>
                <h3 className='text-[#ff8400] text-4xl font-bold'>Media Yangiliklar</h3>
                <div className='flex-auto h-1 bg-[#ff8400]'></div>
            </div>
            <VideoNews />
        </Container>
    )
}

export default MediaNews