import Image from 'next/image';
import React from 'react';
import { FaPinterestP, FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import logo from '../../assets/man.jpeg'
const Membercard = () => {
    return (
        <div className='relative w-80 rounded-xl border hover:border-orange-500 p-4'>

            <div className='team-member-card'>
                <div className='relative space-y-2'>

                    <Image className='img-fluid w-full rounded-lg' src={logo} alt='' />
                    <div className=' absolute bottom-0 flex w-full overflow-hidden expert-social gap-2'>
                        <li><a href="https://www.facebook.com/"><FaFacebookF className=' text-white text-2xl font-bold' /></a></li>
                        <li><a href="https://twitter.com/"><FaTwitter className=' text-white text-2xl font-bold' /></a></li>
                        <li><a href="https://www.pinterest.com/"><FaPinterestP className=' text-white font-bold text-2xl' /></a></li>
                        <li><a href="https://www.instagram.com/"><IoLogoInstagram className='  text-2xl font-bold rounded-full text-white' /></a></li>
                    </div>
                </div>
                <div className="info-container mt-4">
                    <p className="font-bold text-xl" >Titumir Anan </p>
                    <p className="text-gray-500">Software Developer</p>

                </div>
            </div>

        </div>
    );
};

export default Membercard;