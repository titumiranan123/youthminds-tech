import React from 'react';
import svg from '../../assets/web.svg'
import svg2 from '../../assets/software devloment.svg'
import svg3 from '../../assets/cyberSecutrity.svg'
import svg4 from '../../assets/digital marketing.svg'
import Image from 'next/image';
import Servicescard from './Servicescard';
const Services = () => {
    return (
        <div className='mt-10'>
            <div className='saria flex flex-col justify-center items-center '>
                <h2 className='mt-10 font-semibold saria text-4xl text-center'>SOLUTION WE OFFER</h2>
                <p className='text-center text-xl'>Bring The Revolution With <br />
                    The <span className='text-orange-500 '>Diligence</span> Service</p>
            </div>
            <div className='grid mt-10 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10'>
                <div className=''>
                    <Servicescard logo={svg} heading={'Web Development'} description='Design and develop responsive and user-friendly websites tailored to your business needs, using the latest web technologies.' />
                </div>

                <div>
                    <Servicescard logo={svg2} heading={'Web Development'} description='Design and develop responsive and user-friendly websites tailored to your business needs, using the latest web technologies.' />
                </div>
                <div>
                    <Servicescard logo={svg3} heading={'Web Development'} description='Design and develop responsive and user-friendly websites tailored to your business needs, using the latest web technologies.' />
                </div>
                <div>
                    <Servicescard logo={svg4} heading={'Web Development'} description='Design and develop responsive and user-friendly websites tailored to your business needs, using the latest web technologies.' />
                </div>

            </div>
        </div>
    );
};

export default Services;