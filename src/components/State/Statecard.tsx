import Image from 'next/image';
import React from 'react';

type propType = {
    logo: string;
    heading: string;
    title: string;
}
const Statecard: React.FC<propType> = ({ logo, heading, title }) => {
    return (
        <div className='flex justify-center items-center flex-col'>
            <Image src={logo} alt='' />
            <div>
                <h2 className='text-black font-bold text-4xl'>{heading}</h2>
                <p className='saria'>{title}</p>
            </div>
        </div>
    );
};

export default Statecard;