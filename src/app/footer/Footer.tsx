import React from 'react'
import Link from 'next/link'
import { dataNav } from "../../components/dataNav"
import Image from 'next/image'
import LogoF from "../../assets/logoF.png"
type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className=' bg-neutral-900 min-h-[5rem] mg-20 mt-10'>
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href={"/"} className=' flex z-50 font-title items-center text-2xl uppercase'> <Image alt='logo' className=' w-20 h-20 invert' src={LogoF}></Image> <p><span className='text-red-600'>Boxin</span> <span className='text-blue-600'>Club</span></p> </Link>
                    <ul className="flex gap-5 flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 pt-5 md:pt-0">
                        {
                            dataNav.map(nav =>
                            (
                                <li key={nav}><Link href={nav}>{nav}</Link></li>
                            ))
                        }
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            </div>
        </footer>
    )
}

export default Footer