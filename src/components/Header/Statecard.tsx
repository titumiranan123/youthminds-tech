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
        <div className='flex justify-center  border rounded-bl-3xl rounded-tr-3xl bg-orange-200 bg-opacity-100 w-96  p-5 items-center flex-col gap-5'>
            <Image src={logo} alt='' />
            <div className='flex flex-col gap-2'>
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