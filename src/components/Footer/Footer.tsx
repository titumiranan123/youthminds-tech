import React from 'react';
import logo from '../../assets/logo.png'
import Image from 'next/image'
import Link from 'next/link';
import { GrLinkedin } from 'react-icons/gr';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { motion } from 'framer-motion'
import { BsFacebook } from 'react-icons/bs';
const Footer = () => {
    return (
        <div className='bg-orange-500 bg-opacity-50'>
            <div className='footer   mt-12 max-w-[1440px] mx-auto'>
            <div className=' text-slate-700  bg-opacity-20 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 pt-6'>
                <div className='lg:w-96  '>
                <div>
                    <Image className='w-60 h-20 rounded-lg img-fluid' src={logo} alt='' />
                    <p className='mt-2'>Welcome to our website Information <br /> and Technology Company</p>
                    <hr className='border-r-gray-500 lg:w-3/4 h-2 mt-2' />
                    <div className='flex  items-center gap-4'>
                        <motion.li className='list-none duration-100 text-black mt-2'
                            whileHover={{ scale: 1.1, y: -3 }}
                            whileTap={{ scale: 0.8, y: 0 }}
                        >
                            <BsFacebook className='text-2xl' />
                        </motion.li>
                        <motion.li className='list-none duration-100'
                            whileHover={{ scale: 1.1, y: -3 }}
                            whileTap={{ scale: 0.8 }}
                        >
                            <AiFillTwitterCircle className='text-3xl text-black mt-2' />
                        </motion.li>
                        <motion.li className='list-none duration-100'
                            whileHover={{ scale: 1.1, y: -3 }}
                            whileTap={{ scale: 0.8 }}
                        >
                            <GrLinkedin className='text-2xl text-black mt-2' />
                        </motion.li>
                    </div>

                </div>
                </div>
                <div className='lg:w-96  '>
                <div className='space-y-2 '>
                    <p className='text-xl font-semibold'>Explore</p>
                    <div className='flex flex-col gap-3 '>
                        <motion.li className='list-none '
                            whileTap={{ scale: 1.1 }}
                        ><Link href='/'> Home </Link></motion.li>
                        <Link href='/about'> Abouts</Link>
                        <Link href='/services'> Services</Link>
                        <Link href='/contact'> Contact</Link>
                    </div>
                </div>
                </div>
                <div className='lg:w-96  '>
                <div className='space-y-4 '>
                    <h2 className='text-xl font-semibold'>Contact </h2>
                    <div className='space-y-2'>
                        <p>House - 89/A, Road - 8A New (Old 15) <br /> Dhanmondi, Dhaka, Bangladesh</p>
                        <p>+8801580305672</p>
                        <a className='text-orange-500 underline' href="mailto:youthmindstech@gmail.com">youthmindstech@gmail.com</a>
                    </div>
                </div>
                </div>
                <div className='lg:w-96 '>

                <div>
                    <h2 className='text-xl font-semibold'>Sign up for newsletter </h2>
                    <div className=''>
                        <form className='flex justify-center flex-col space-y-1 p-4'>
                            <input type="text" className='border-none px-4  inputcontact ' placeholder='Name' />
                            <input type="text" className='border-none inputcontact' placeholder='Email Address' />
                            <textarea className='px-4' name="" id="" placeholder='Message'></textarea>
                            <button className='py-2 border rounded-xl bg-orange-400 hover:bg-orange-500 font-semibold hover:text-white '>Send</button>
                        </form>
                    </div>
                </div>
                </div>
            </div>
            
        </div>
        <div className='bg-orange-500 w-full p-2 text-center flex justify-center items-center'>
                <p className='text-white text-center'>&copy; Copyright 2023 by  <a href="#" className='hover:text-slate-600  underline'>Youthminds Tech</a> </p>
            </div>
        </div>
    );
};

export default Footer;