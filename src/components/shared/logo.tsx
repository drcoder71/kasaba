import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <Link href={'/'}>
            <Image width={100} height={100} src="/img/logo.svg" alt="" className='w-full h-full object-contain' />
        </Link>
    )
}

export default Logo