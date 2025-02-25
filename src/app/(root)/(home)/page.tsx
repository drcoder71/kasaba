
import { TopNews } from '@/components/root'
import MediaNews from '@/components/root/home/media-news'
import PopularNews from '@/components/root/home/popular-news'
import StandartNews from '@/components/root/home/standart-news'
import VideoNews from '@/components/root/home/video-news'
import { Container } from '@/components/shared'
import Ads from '@/components/shared/ads'
import Title from '@/components/ui/title'
import React from 'react'

const HomePage = () => {
    return (
        <div className=''>
            <section id='top-news' className='max-w-[1440px] w-full mx-auto'>
                <TopNews />
            </section>
            <section id='news' className='max-w-[1440px] w-full mx-auto'>
                <StandartNews />
            </section>
            <section id="popular_news" className='max-w-[1440px] w-full mx-auto'>
                <PopularNews />
                <Container className='py-10'>
                    <Ads src='/img/xalq_bank.png' />
                </Container>
            </section>
            <section id='media' className='bg-[#000573]/75 backdrop-blur-[9.30px]'>
                <section id='vide-news' className='max-w-[1440px] w-full mx-auto'>
                    <MediaNews />
                </section>
            </section>
        </div>
    )
}

export default HomePage