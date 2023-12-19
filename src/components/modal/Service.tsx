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
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className={`flex flex-col gap-10 shadow-lg p-7 border hover:border-orange-500 rounded-3xl ${!Read ? 'h-[35rem]' : 'h-[27rem]'} relative`}>
            <Image alt='' src={logo} />
            <div className='space-y-3'>
                <h2 className='saria font-semibold text-2xl text-left'>{heading}</h2>
                <p className='text-left'>{Read ? <>{description.slice(0, 200)}......</> : <>{description}</>}<span onClick={() => setRead(!Read)} className='text-orange-400 underline cursor-pointer'>{Read ? <>Read More</> : <>    Read Less</>}<span /></span></p>
            </div>
            <button onClick={openModal} className=" saria py-4 px-6 absolute bottom-6 bg-orange-400 hover:bg-orange-500 w-1/2 border rounded-bl-3xl rounded-tr-3xl text-lg font-semibold hover:text-white ">Learn More</button>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded-lg max-w-md">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Modal Title</h2>
                            <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                                Close
                            </button>
                        </div>
                        <p>This is your modal content. You can add any content here.</p>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Servicescard;