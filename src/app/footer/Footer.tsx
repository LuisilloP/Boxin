"use client"
import React from 'react'
import Link from 'next/link'
import { dataNav } from "../../components/dataNav"
import Image from 'next/image'
//images
import LogoF from "../../assets/logoF.png"
import LogoFacebook from "../../../public/FLogo.svg"
import LogoInstagram from "../../../public/IgLogo.svg"
type Props = {}

const Footer = (props: Props) => {

    const ScrollToView = (nav: string) => {

        document.querySelector(`#${nav}`)?.scrollIntoView({ behavior: 'smooth', block: "start" })
    }

    return (
        <footer className=' bg-neutral-900 min-h-[5rem] mg-20 mt-10'>
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href={"/"} className=' flex z-50 font-title items-center text-2xl uppercase'> <Image alt='logo' className=' w-20 h-20 invert' src={LogoF}></Image> <p><span className='text-red-600'>Boxing</span> <span className='text-blue-600'>Club</span></p> </Link>
                    <div>
                        <ul className="flex gap-5 flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 pt-5 md:pt-0">
                            {
                                dataNav.map(nav =>
                                (
                                    <li key={nav}>
                                        <a className='duration-special ease-out hover:ease-in lg:px-0 transition cursor-pointer hover:text-blue-600'
                                            onClick={() => ScrollToView(nav)}
                                        >{nav}</a>
                                    </li>

                                ))
                            }
                        </ul>
                        <div className='pt-3 flex gap-3 items-center'>
                            <p className='  font-title text-white font-bold uppercase'>Síguenos en redes sociales</p>
                            <Link href={"https://www.instagram.com/boxingovalle/?hl=es"} target='_blank'><Image src={LogoInstagram} width={27} height={27} alt='Logo Instagram' ></Image></Link>
                            <Link href={"https://www.facebook.com/pages/Boxing-Club-Ovalle/1405876562981262"} target='_blank'><Image src={LogoFacebook} width={27} height={27} alt='Logo Facebook' ></Image></Link>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            </div>
        </footer>
    )
}

export default Footer