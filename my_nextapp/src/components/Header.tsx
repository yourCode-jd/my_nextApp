import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { navLinks } from '../../constants'
import Button from './Button'

export default function Header() {
    return (
        <nav className='flex bg-blue-600 p-5 items-center justify-between'>
            <Link href="/" className=''>
                <Image src="/next.svg" alt="logo" width={100} height={50} />
            </Link>
            <ul className='list  w-full gap-5 justify-end items-center mr-5 hidden md:flex'>
                {navLinks.map((link) => (
                    <Link href={link.href} key={link.key} className='text-md text-white font-medium transition-all hover:text-black inline-block'>
                        {link.label}
                    </Link>
                )
                )}
            </ul>
            <div className='md:block hidden '>
                <Button
                    type="button"
                    title="Login"
                    icon="/menu.png"
                    variant="whiteBtn"
                />
            </div>
            <Image className='md:hidden'
                src="/menu.png"
                alt="logoMobile"
                width={30}
                height={20}
            />
        </nav>
    )
}
