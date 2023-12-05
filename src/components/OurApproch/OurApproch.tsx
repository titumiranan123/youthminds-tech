import Image from 'next/image';
import React from 'react';
import approch from '../../assets/approch.jpg'
const OurApproch = () => {
    return (
        <div>
            <div className='saria flex flex-col justify-center items-center '>
                <h2 className='mt-10 font-bold saria text-4xl text-center'>Our Approach</h2>
                <p className='text-center text-xl'>Services are the artisans of business, crafting bespoke solutions to  <br />
                    The <span className='text-orange-500 '>unravel specific needs and conquer </span> challenges</p>
            </div>
            <div className='mt-10 flex justify-center gap-10 lg:flex-nowrap flex-wrap items-center '>
                <Image className=' h-[500px] w-[550px]' src={approch} alt='' />
                <div className='flex flex-col justify-center  gap-5'>
                    <h1 className='text-4xl font-bold saria'>Unlock The Potential Of Your Business.</h1>
                    <p>We believe in delivering tailored solutions that are designed to address your unique requirements. We take the time to understand your business and provide personalized services that align with your goals.</p>
                    <ul className='list-disc ul '>
                        <li className='flex justify-center flex-col '>
                            <h2 className='font-semibold text-lg'>Customized Solutions</h2>
                            <p>Services are professional we offerings provided.</p>

                        </li>
                        <li className='flex justify-center flex-col '>
                            <h2 className='font-semibold text-lg'>Quality Reliability</h2>
                            <p>Services are professional we offerings provided.</p>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default OurApproch;