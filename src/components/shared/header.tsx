'use client'
import React from 'react'
import Container from './container'
import Logo from './logo'
import Curreny from './curreny'
import dynamic from 'next/dynamic'
import LanguageSwitcher from './language'
import { useRouter } from 'next/navigation'

const Clock = dynamic(() => import('./clock'), { ssr: false })

const Header = () => {
    const router = useRouter()

    return (
        <section className='w-full bg-[url(/img/BG.png)] bg-cover bg-no-repeat py-[20px] overflow-hidden relative z-10 after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-gradient-to-r after:from-[#141348] after:to-[#030239] after:blur-[40px] after:-z-10'>
            <Container className='flex items-center justify-between'>
                <div className="w-[30%]">
                    <Logo />
                </div>
                <div className="flex items-center gap-x-[20px]">
                    <Curreny />
                    <Curreny />
                    <Clock />
                    <LanguageSwitcher />
                    <button onClick={() => router.push('/contact')} className='py-[6px] px-[14px] bg-[#ff8400]/80 backdrop-blur-[15.60px] text-white rounded-sm'>Bog'lanish</button>
                </div>
            </Container>
        </section>
    )
}

export default Header