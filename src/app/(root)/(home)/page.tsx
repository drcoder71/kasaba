
import { TopNews } from '@/components/root'
import PopularNews from '@/components/root/home/popular-news'
import StandartNews from '@/components/root/home/standart-news'
import Title from '@/components/ui/title'
import React from 'react'

const HomePage = () => {
    return (
        <div className='max-w-[1440px] w-full mx-auto'>
            <section id='top-news'>
                <TopNews />
            </section>
            <section id='news'>
                <StandartNews />
            </section>
            <section id="popular_news">
                <PopularNews />
            </section>
        </div>
    )
}

export default HomePage