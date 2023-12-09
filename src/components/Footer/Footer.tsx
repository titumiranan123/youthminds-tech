import React from 'react';
import logo from '../../assets/logo.png'
import Image from 'next/image'
import Link from 'next/link';
const Footer = () => {
    return (
        <div className='footer bg-orange-200 bg-opacity-50'>

            <div className='mt-20 bg-orange-500 text-slate-700  bg-opacity-20 p-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10'>
                <div>
                    <Image className='w-60 h-20 rounded-lg img-fluid' src={logo} alt='' />
                    <p>Welcome to our website Information <br /> and Technology Company</p>
                    <hr className='border-r-gray-500 h-2 ' />

                </div>
                <div className='space-y-2'>
                    <p className='text-xl font-semibold'>Explore</p>
                    <div className='flex flex-col gap-3'>
                        <Link href='/'> Home </Link>
                        <Link href='/about'> Abouts</Link>
                        <Link href='/services'> Services</Link>
                        <Link href='/contact'> Contact</Link>
                    </div>

                </div>
                <div className='space-y-4 '>
                    <h2 className='text-xl font-semibold'>Contact </h2>
                    <div className='space-y-2'>
                        <p>House - 89/A, Road - 8A New (Old 15) <br /> Dhanmondi, Dhaka, Bangladesh</p>
                        <p>+8801580305672</p>
                        <a className='text-orange-500 underline' href="mailto:youthmindstech@gmail.com">youthmindstech@gmail.com</a>
                    </div>
                </div>

                <div>
                    <h2 className='text-xl font-semibold'>Sign up for newsletter </h2>
                    <div className=''>
                        <form className='flex justify-center flex-col space-y-1 p-4'>
                            <input type="text" className='border-none px-4  inputcontact ' placeholder='Name' />
                            <input type="text" className='border-none inputcontact' placeholder='Email Address' />
                            <textarea className='px-4' name="" id="" placeholder='Message'></textarea>
                            <button className='py-4 border rounded-xl bg-orange-400 hover:bg-orange-500 '>Send</button>
                        </form>
                        <div className='h-4 rounded-xl w-full'></div>
                        <div>

                        </div>
                    </div>
                </div>

            </div>
            <div className='bg-black w-full p-10 text-center'>
                <p className='text-white'>&copy; Copyright 2023 by  <a href="#" className='hover:text-orange-500 text-slate-600 underline'>Youthminds Tech</a> </p>
            </div>
        </div>
    );
};

export default Footer;