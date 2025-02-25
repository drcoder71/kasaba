
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
            <section id='media' className='relative before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[#1e1e1e]/90 before:backdrop-blur-[9.30px] before:-z-10 after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-[#000573]/75 after:backdrop-blur-[9.30px] after:-z-10'>
                <section id='vide-news' className='max-w-[1440px] w-full mx-auto'>
                    <MediaNews />
                </section>
            </section>
        </div>
    )
}

export default HomePage