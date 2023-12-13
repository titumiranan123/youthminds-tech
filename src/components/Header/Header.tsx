import React from 'react';

import headerImg2 from '../../assets/hero-image.png'
import headerImg from '../../assets/circle2.png'
import Image from 'next/image'

const Header = () => {
    return (
        <div className='flex relative justify-between md:pt-10    lg:flex-nowrap flex-wrap  gap-6  bg-[#000724] text-white lg:p-8 p-4'>
            <div className='lg:w-[50%] h-full lg:mt-36  flex flex-col justify-center gap-5'>
                <div data-aos="fade-down">
                    <h2 className='text-5xl font-bold'>
                        Empowering <span className='text-orange-500'>
                            Digital Excellence</span>, <br /> One Solution at a Time.
                    </h2>
                    <p className='w-3/4 mt-4 text-slate-400'> Empowering success through cutting-edge IT solutions. From brand design to cybersecurity, we&apos;re your dedicated partner in the digital era, crafting tailored solutions for your triumph.</p>
                </div>
                <button data-aos="fade-right" className='py-3 px-8 lg:w-1/4 w-1/2 bg-orange-400 hover:bg-orange-600 hover:text-white mt-4 rounded-lg text-xl font-semibold text-black'>Let&apos;s Go</button>
            </div>

            <div data-aos="zoom-in" className=' lg:w-[50%] mx-auto lg:mt-0 relative  '>
                <Image className='img-fluid  ' src={headerImg2} alt='' />
                <Image className='img-fluid spinner absolute right-[22%] top-16 h-96 w-96 ' src={headerImg} alt='' />


            </div>
        </div>
    );
};

export default Header;