import React from 'react';
import project from '../../assets/Project.svg'
import customer from '../../assets/customer.svg'
import award from '../../assets/awards.svg'
import brain from '../../assets/brain2.png'
import headerImg from '../../assets/circle2.png'
import webdesing from '../../assets/web design.png'
import webdevelopment from '../../assets/web development.png'
import Image from 'next/image'
import CountUp from 'react-countup';
import cyber from '../../assets/Youthminds service name icon/cyber security.png'
import digital from '../../assets/Youthminds service name icon/social-marketing.png'
import software from '../../assets/Youthminds service name icon/software-developer.png'
import graphics from '../../assets/Youthminds service name icon/graphic-design.png'
import energy from '../../assets/Youthminds service name icon/energy-sources.png'
import web from '../../assets/Youthminds service name icon/website-codes.png'
import cpu from '../../assets/Youthminds service name icon/cpu.png'
import vector from '../../assets/Youthminds service name icon/vector.png'

import cyber1 from '../../assets/service/cyber.png'
import digital1 from '../../assets/service/Digital.png'
import graphics1 from '../../assets/service/graphics.png'
import energy1 from '../../assets/service/renewable.png'
import software1 from '../../assets/service/software.png'
import hardware from '../../assets/service/hardware.png'
import websolution from '../../assets/Youthminds service name icon/web.png'



const Header = () => {
    return (
        <div className='relative mb-48 -z-10 '>
            <div className='bg-[#000724] h-[810px]'>
                <div className=' relative  md:pt-10  pb-10 flex justify-center items-center    bg-[#000724] text-white lg:p-8 p-4'>
                    <div data-aos="zoom-in" className=' lg:w-[50%] w-full mx-auto lg:mt-0  absolute lg:-top-4 lg:left-[26%] top-10 lg:opacity-30 opacity-100'>
                        <div className='md:relative'>
                            <Image className='img-fluid  -mt-4 md:h-72 md:w-72  lg:absolute md:absolute  lg:right-[28%] md:right-[35.9%] md:top-[1rem] lg:top-[4rem] h-[15rem] w-[15rem] lg:ms-0 md:ms-0 ms-[69px]' src={brain} alt='' />
                            <Image className='img-fluid spinner absolute lg:right-[23%] md:right-[31%] md:-top-[1rem] lg:top-[2.4rem] md:h-[21rem] md:w-[21rem] -top-2 h-[17rem] w-[17rem]   right-[5rem] ' src={headerImg} alt='' />
                        </div>
                    </div>

                    <div className=' z-10 h-full  flex flex-col justify-center md:gap-5 gap-4 items-center mt-72 lg:ms-10 md:me-16'>
                        <div data-aos="fade-down  flex justify-center ">
                            <h2 className='lg:text-5xl md:text-4xl font-bold text-2xl   md:leading-10 text-center'>
                                Empowering <span className='text-orange-500 md:leading-10'>
                                    Digital Excellence ,</span> <br /> One Solution at a Time.
                            </h2>
                            <p className='lg:w-2/4 md:w-3/4 mx-auto  text-slate-400 mt-4 text-center '> Empowering success through cutting-edge IT solutions. From brand design to cybersecurity, we&apos;re your dedicated partner in the digital era, crafting tailored solutions for your triumph.</p>
                        </div>
                        <button className='py-3 px-8 lg:w-1/4 w-1/2 bg-orange-400 flex justify-center items-center hover:bg-orange-600 hover:text-white mt-4 rounded-lg text-xl font-semibold text-black'>Let&apos;s Go</button>
                    </div>
                    {/* heeho */}


                    <Image alt='' className='h-30 w-12 zoom-in-out absolute left-[10%] top-[20%]' src={cyber} />
                    <Image alt='' className='h-30 w-20 opacity-25  absolute left-[8%] top-[30%]' src={cyber1} />

                    <Image alt='' className='h-30 w-12 zoom-in-out absolute left-[18%] top-[2%]' src={cpu} />
                    <Image alt='' className='h-30 w-20  absolute left-[18%] opacity-30 top-[12%]' src={hardware} />
                    <Image alt='' className='h-30 w-12 zoom-in-out absolute top-[2%] right-[18%]' src={vector} />
                    <Image alt='' className='h-30 w-20 opacity-30 absolute top-[12%] right-[18%]' src={graphics1} />

                    <Image alt='' className='h-30 w-12  absolute left-[20%] -bottom-5 slideRighttoLeft' src={digital} />
                    <Image alt='' className='h-35 w-20  absolute left-[20%] -bottom-9 slideRighttoLeft opacity-30' src={digital1} />

                    <Image alt='' className='absolute right-[20%] left-to-right  h-30 w-12 -bottom-5' src={graphics} />
                    <Image alt='' className='absolute right-[15%] left-to-right  h-30 w-20 -bottom-10 opacity-30' src={webdesing} />

                    <Image alt='' className='h-30 w-12 zoom-in-out absolute top-[20%] right-[10%]' src={software} />
                    <Image alt='' className='h-30 w-20 opacity-30 absolute top-[30%] right-[10%]' src={software1} />
                    <Image alt='' className='absolute   h-30 w-12 top-[60%] left-[15%] uptoDown' src={web} />
                    <Image alt='' className='absolute   h-30 w-20 opacity-30 top-[68%] left-[15%] uptoDown' src={webdevelopment} />
                    <Image alt='' className='h-30 w-12 uptoDown  absolute top-[60%] right-[15%]' src={energy} />
                    <Image alt='' className='h-30 w-20 uptoDown opacity-30  absolute top-[68%] right-[14%]' src={energy1} />




                </div>

            </div>


            <div className='hidden  opacity-30'>
                <Image className='absolute opacity-30 top-[10%] right-[20%] img-fluid  w-40 h-20' src={cyber1} alt='' />
                <Image className='absolute opacity-30 top-[14%] right-[20%] img-fluid  w-40 h-20' src={cyber1} alt='' />
                <Image className='absolute opacity-30 top-[18%] right-[20%] img-fluid  w-40 h-20' src={cyber1} alt='' />
                <Image className='absolute opacity-30 top-[10%] left-[20%] img-fluid  w-40 h-20' src={cyber1} alt='' />
                <Image className='absolute opacity-30 top-[14%] left-[20%] img-fluid  w-40 h-20' src={cyber1} alt='' />
                <Image className='absolute opacity-30 top-[18%] left-[20%] img-fluid  w-40 h-20' src={cyber1} alt='' />
            </div>


            <div className='md:mt-12 lg:absolute lg:-bottom-40 lg:left-[4%] md:absolute md:-bottom-40  bg-opacity-30 -mt-36 '>
                <div className='grid    p-10 lg:grid-cols-3  md:grid-cols-3 grid-cols-1 mt-10  gap-4'>
                    <Statecard logo={project} amount={12} heading=' Porjects' title='Working With Passion' />
                    <Statecard logo={customer} amount={12} heading=' Customers' title='Working With Passion' />
                    <Statecard logo={award} amount={12} heading=' Awards' title='Working With Passion' />
                </div>
            </div>



        </div>
    );
};

export default Header;

type propType = {
    logo: string;
    heading: string;
    title: string;
    amount: number;
}
const Statecard: React.FC<propType> = ({ logo, heading, title, amount }) => {
    return (
        <div className='flex justify-center  border rounded-bl-3xl rounded-tr-3xl bg-white border-orange-500 bg-opacity-100 lg:w-96  p-5 items-center flex-col gap-5'>
            <Image src={logo} alt='' />
            <div className='flex flex-col gap-2 text-orange-500'>
                <h2 className=' font-bold text-4xl flex flex-col justify-center items-center'>
                    {
                        <CountUp end={amount} />
                    }
                    {heading}</h2>
                <p className='saria text-center'>{title}</p>
            </div>
        </div>
    );
};
