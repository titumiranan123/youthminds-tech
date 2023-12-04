import Image from 'next/image';
import React from 'react';
import logo from '../../assets/about.jpg'
const About = () => {
    return (
        <div className='mt-10 md:mt-28'>
            <h2 className='text-2xl font-semibold'>About Us</h2>
            <div className='flex flex-wrap justify-center items-center lg:flex-nowrap'>
                <div className='w-1/2'>

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