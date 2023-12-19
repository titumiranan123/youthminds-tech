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
        <div className={`flex flex-col gap-10 shadow-lg p-7 border hover:border-orange-500 rounded-3xl ${!Read ? 'h-[35rem]' : 'h-[27rem]'} relative`}>
            <Image alt='' src={logo} />
            <div className='space-y-3'>
                <h2 className='saria font-semibold text-2xl text-left'>{heading}</h2>
                <p className='text-left'>{Read ? <>{description.slice(0, 200)}......</> : <>{description}</>}<span onClick={() => setRead(!Read)} className='text-orange-400 underline cursor-pointer'>{Read ? <>Read More</> : <>    Read Less</>}<span /></span></p>
            </div>
            <button onClick={() => document.getElementById('my_modal_5').showModal()} className=" saria py-4 px-6 absolute bottom-6 bg-orange-400 hover:bg-orange-500 w-1/2 border rounded-bl-3xl rounded-tr-3xl text-lg font-semibold hover:text-white ">Learn More</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Servicescard;