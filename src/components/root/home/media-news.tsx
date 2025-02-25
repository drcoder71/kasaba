import { Container } from '@/components/shared'
import React from 'react'
import VideoNews from './video-news'
import PhotoNews from './photo-news'

const MediaNews = () => {
    return (
        <Container className='py-12 relative'>
            <div className='flex justify-between items-center gap-x-4'>
                <h3 className='text-[#ff8400] text-4xl font-bold'>Media Yangiliklar</h3>
                <div className='flex-auto h-1 bg-[#ff8400]'></div>
            </div>
            <VideoNews />
            <PhotoNews />
        </Container>
    )
}

export default MediaNews