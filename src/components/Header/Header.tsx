import React from 'react';
import headerImg from '../../assets/newbg-1.png'
import headerImg2 from '../../assets/newbg-2.png'
import Image from 'next/image'
import brain from '../../assets/brain2.png'
const Header = () => {
    return (
        <div className='flex relative justify-between md:mt-10    lg:flex-nowrap flex-wrap  gap-6  bg-opacity-10 lg:p-8 p-4'>
            <div className='lg:w-[50%] h-full lg:mt-24  flex flex-col justify-center gap-5'>
                <div data-aos="fade-down">
                    <h2 className='text-5xl font-bold'>
                        Empowering <span className='text-orange-500'>
                            Digital Excellence</span>, <br /> One Solution at a Time.
                    </h2>
                    <p className='w-3/4 mt-4 text-slate-600'> Empowering success through cutting-edge IT solutions. From brand design to cybersecurity, we&apos;re your dedicated partner in the digital era, crafting tailored solutions for your triumph.</p>
                </div>
                <button data-aos="fade-right" className='py-3 px-8 lg:w-1/4 w-1/2 bg-orange-400 hover:bg-orange-600 hover:text-white mt-4 rounded-lg text-xl font-semibold '>Let&apos;s Go</button>
            </div>

            <div data-aos="zoom-in" className=' lg:w-[50%] mx-auto lg:mt-0 relative mt-16 '>
                <Image className='img-fluid h-[33rem] w-[33rem]' src={headerImg} alt='' />
                <Image className='img-fluid absolute lg:-top-[3.2rem]   -top-[0rem]  lg:right-[8%] ' src={brain} alt='' />
                <Image className='img-fluid spinner   absolute md:-top-[4rem]  h-[33rem] w-[33rem] left-1 -top-8 md:left-[4%]' src={headerImg2} alt='' />

            </div>
        </div>
    );
};

export default Header;