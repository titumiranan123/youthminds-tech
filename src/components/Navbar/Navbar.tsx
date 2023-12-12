"use client"
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import './Navbar.css'
import { FaBars } from 'react-icons/fa'
import logo from '../../assets/logo.png'
import Image from 'next/image'
import { useState } from 'react'
import { ImCross } from "react-icons/im";
import { usePathname } from 'next/navigation'
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    interface CustomLinkProps {
        navItem: React.ReactNode;
        href: string;
        className?: string;
    }
    const router = usePathname()

    const CustomLink: React.FC<CustomLinkProps> = ({ navItem, href, className }) => {
        return (
            <Link href={href} >
                <span className={`${className} text-[16px] font-['Open Sans'] navfont animationNav`}>
                    {navItem}
                </span>
            </Link>
        )
    }
    return (
        <div>
            <nav className='flex justify-between items-center py-8 px-5 shadow'>
                <motion.div
                    whileTap={{ scale: 0.98 }}
                    whileHover={{ scale: 1.02 }}
                >
                    <Link href={'/'}>
                        <Image
                            src={logo}
                            width={150}
                            height={100}
                            className='rounded-lg img-fluid'
                            alt="Picture of the author"
                        />
                    </Link>
                </motion.div>
                <div className='lg:flex gap-4 hidden'>
                    <CustomLink href='/' navItem='Home' className={`${router == '/' && 'text-[#EC7D21] text-[18px] font-bold'}`} />
                    <CustomLink className={`${router == 'about-us' && 'text-[#EC7D21] text-[18px] font-bold'}`} href='/about-us' navItem='About Us' />
                    <CustomLink className={`${router == 'Services' && 'text-[#EC7D21] text-[18px] font-bold'}`} href='/services' navItem='Services' />
                    <CustomLink href='/contact-us' navItem='Contact Us' className={`${router == 'contact-us' && 'text-[#EC7D21] text-[18px] font-bold'}`} />
                </div>
                <div className='lg:flex justify-center items-center gap-4 hidden'>
                    <motion.li className='list-none duration-100 text-orange-500'
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.8, y: 0 }}
                    >
                        <BsFacebook className='text-2xl' />
                    </motion.li>
                    <motion.li className='list-none duration-100'
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <AiFillTwitterCircle className='text-3xl text-orange-500' />
                    </motion.li>
                    <motion.li className='list-none duration-100'
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <GrLinkedin className='text-2xl text-orange-500' />
                    </motion.li>


                </div>

                <motion.div onClick={() => setOpen(!open)}
                    whileTap={{ scale: 0.8 }}
                    whileHover={{ scale: 1.2 }}
                    className='text-xl lg:hidden'>
                    {
                        !open ? <FaBars /> : <ImCross />
                    }
                </motion.div>
            </nav>
            {
                open && <motion.div
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}

                    className='absolute top-0 w-full bg-orange-400  h-screen'>
                    <motion.div onClick={() => setOpen(!open)}
                        whileTap={{ scale: 0.8 }}
                        whileHover={{ scale: 1.2 }}
                        className='absolute top-2 left-5'>
                        {
                            !open ? <FaBars /> : <ImCross className='text-[#1C1F85]' />
                        }
                    </motion.div>
                    <div className='justify-center items-center   flex  flex-col gap-5 lg:hidden z-50 mt-20  text-[#1C1F85]'>
                        <CustomLink href='/' navItem='Home' className={`${router == '/' && 'text-black text-[18px] font-bold'}`} />
                        <CustomLink className={`${router == 'about-us' && 'text-black text-[18px] font-bold'}`} href='/about-us' navItem='About Us' />
                        <CustomLink className={`${router == 'Services' && 'text-black text-[18px] font-bold'}`} href='/services' navItem='Services' />
                        <CustomLink href='/contact-us' navItem='Contact Us' className={`${router == 'contact-us' && 'text-black text-[18px] font-bold'}`} />
                        <br />

                        <div className='flex justify-center items-center gap-4'>
                            <motion.li className='list-none duration-100 text-black'
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.8, y: 0 }}
                            >
                                <BsFacebook className='text-2xl' />
                            </motion.li>
                            <motion.li className='list-none duration-100'
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.8 }}
                            >
                                <AiFillTwitterCircle className='text-3xl text-black' />
                            </motion.li>
                            <motion.li className='list-none duration-100'
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.8 }}
                            >
                                <GrLinkedin className='text-2xl text-black' />
                            </motion.li>


                        </div>
                    </div>

                </motion.div>
            }
        </div>
    );
};

export default Navbar;