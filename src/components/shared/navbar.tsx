import React from 'react'
import Container from './container'
import Link from 'next/link'
import { NabarLinkData } from '@/data/navbar-link-data'

const Navbar = () => {
    return (
        <nav className='shadow-[0px_5px_23.899999618530273px_1px_rgba(0,6,116,0.25)]'>
            <div className='max-w-[1440px] w-full mx-auto'>
                <Container className='text-white flex items-center justify-center gap-x-4'>
                    <ul className="flex gap-x-6 justify-center">
                        <li className="relative group py-4">
                            <Link
                                href="/"
                                className="flex items-center space-x-2 text-[#141348] text-base font-semibold group-hover:text-[#ff7a00]"
                            >
                                <span className="uppercase">Asosiy</span>
                            </Link>
                        </li>

                        {NabarLinkData.map(({ title, submenu }, index) => (
                            <li key={index} className="relative group py-4" role='button'>
                                <p
                                    className="flex items-center space-x-2 text-[#141348] text-base font-semibold group-hover:text-[#ff7a00]"
                                >
                                    <span className='uppercase'>{title}</span>
                                </p>
                                {submenu && (
                                    <ul className="absolute min-w-[250px] top-[56px] left-0 bg-[#ff8400]/70 backdrop-blur-[6px] first-letter:rounded shadow-lg hidden group-hover:block z-30">
                                        {submenu.map((sub: any, subIndex: number) => (
                                            <li key={subIndex}>
                                                <Link
                                                    href={sub.path}
                                                    className="block px-4 py-2 hover:bg-white/15 text-sm"
                                                >
                                                    {sub.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </Container>
            </div>
        </nav>
    )
}

export default Navbar