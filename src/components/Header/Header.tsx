import React from 'react';
import headerImg from '../../assets/header.png'
import Image from 'next/image'
const Header = () => {
    return (
        <div className='flex justify-center md:mt-10 items-center lg:flex-nowrap flex-wrap  gap-5 bg-[#6eef22] bg-opacity-10 lg:p-8 p-4'>
            <div className='lg:w-[50%]  flex flex-col gap-5'>
                <div data-aos="fade-down">
                    <h2 className='text-5xl font-bold'>
                        Empowering <span className='text-orange-500'>
                            Digital Excellence</span>, <br /> One Solution at a Time.
                    </h2>
                    <p className='w-3/4 mt-4 text-slate-600'> Empowering success through cutting-edge IT solutions. From brand design to cybersecurity, we&apos;re your dedicated partner in the digital era, crafting tailored solutions for your triumph.</p>
                </div>
                <button data-aos="fade-right" className='py-3 px-8 w-1/4 bg-[#6eef22] mt-4 rounded-lg text-xl font-semibold '>Let&apos;s Go</button>
            </div>
            <div data-aos="zoom-in" className=' lg:w-[50%] '>
                <Image className='img-fluid' src={headerImg} alt='' />
            </div>
        </div>
    );
};

export default Header;