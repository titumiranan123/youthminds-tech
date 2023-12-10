import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
type proptype = {
    logo: string;
    heading: string;
    description: string;

}

const Servicescard: React.FC<proptype> = ({ logo, heading, description }) => {
    const [Read, setRead] = useState<boolean>(true);

    return (
        <div className={`flex flex-col gap-10 shadow-lg p-7 border hover:border-orange-500 rounded-3xl ${Read ? 'h-[28rem]' : 'h-auto'} relative`}>
            <Image alt='' src={logo} />
            <div className='space-y-3'>
                <h2 className='saria font-semibold text-xl'>{heading}</h2>
                <p>{Read ? <>{description.slice(0, 200)}......</> : <>{description}</>}<span onClick={() => setRead(!Read)} className='text-orange-400 underline cursor-pointer'>{Read ? <>Read More</> : <>    Read Less</>}<span /></span></p>
            </div>
            <button className="btn saria py-4 px-6 bg-orange-400 hover:bg-orange-500 w-1/2 border rounded-bl-3xl rounded-tr-3xl ">Learn More</button>
        </div>
    );
};

export default Servicescard;