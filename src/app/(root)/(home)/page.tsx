
import { TopNews } from '@/components/root'
import React from 'react'

const HomePage = () => {
    return (
        <div className='max-w-[1440px] w-full mx-auto'>
            <section id='top-news'>
                <TopNews />
            </section>
        </div>
    )
}

export default HomePage