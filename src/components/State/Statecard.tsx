"use client"
import Image from 'next/image';
import React from 'react';
import CountUp from 'react-countup';
type propType = {
    logo: string;
    heading: string;
    title: string;
    amount: number;
}
const Statecard: React.FC<propType> = ({ logo, heading, title, amount }) => {
    return (
        <div className='flex justify-center items-center flex-col'>
            <Image src={logo} alt='' />
            <div>
                <h2 className='text-black font-bold text-4xl flex flex-col justify-center items-center'>
                    {
                        <CountUp end={amount} />
                    }
                    {heading}</h2>
                <p className='saria text-center'>{title}</p>
            </div>
        </div>
    );
};

export default Statecard;