import Image from 'next/image';
import React from 'react';
import logo from '../../assets/about.jpg'
const About = () => {
    return (
        <div className='md:mt-28 '>
            <h2 className='text-4xl font-semibold text-center '>About Us</h2>
            <div className='flex flex-wrap justify-center items-center lg:flex-nowrap'>
                <div className='w-1/2'>
                    <h1 className='text-4xl font-bold'>Epic Tales and Digital Triumphs: Meet the Force Behind YouthMinds Tech Revolution!</h1>
                    <p className='lg:w-1/2'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione necessitatibus sint fugiat?
                    </p>
                </div>
                <div className='lg:w-1/2'>
                    <Image alt='' src={logo} />
                </div>
            </div>
        </div>

    );
};

export default About;