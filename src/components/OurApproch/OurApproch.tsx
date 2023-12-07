import Image from 'next/image';
import React from 'react';
import approch from '../../assets/approch.jpg'
const OurApproch = () => {
    return (
        <div className='lg:p-10 p-4'>
            <div className='saria flex flex-col  justify-center items-center '>
                <h2 className='mt-10 font-bold saria text-4xl text-center'>Why We Chosse us</h2>
                <p className='text-center text-lg text-slate-600 w-4/5'>Picture this – captivating designs that speak volumes, websites that are as user-friendly as they are stunning, software solutions that simplify your operations, and marketing strategies that put your brand in the spotlight.</p>
            </div>
            <div className='mt-10 flex justify-center gap-10 lg:flex-nowrap flex-wrap items-center '>
                <Image className='img-fluid lg:h-[500px] lg:w-[550px]' src={approch} alt='' />
                <div className='flex flex-col justify-center   gap-5'>
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