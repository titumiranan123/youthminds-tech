
"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

import Membercard from './Membercard';

const teamMembers = [
    {
        name: 'John Doe',
        designation: 'Software Engineer',
        image: 'john-doe.jpg', // Replace with the actual image path
    },

];

const Teammembers = () => {

    return (
        <div className='space-y-5'>
            <div className='saria flex flex-col  justify-center items-center '>
                <h2 className='mt-10 font-bold saria text-4xl text-center'>Team Members </h2>
                <p className='text-center text-lg w-3/4 text-slate-600'>Services are professional offerings provided by businesses to meet specific needs or solve problems for their customers. Services can range from your budget.</p>
            </div>
            <div className=' mt-10'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >

                    <SwiperSlide><Membercard /></SwiperSlide>
                    <SwiperSlide><Membercard /></SwiperSlide>
                    <SwiperSlide><Membercard /></SwiperSlide>
                    <SwiperSlide><Membercard /></SwiperSlide>
                    <SwiperSlide><Membercard /></SwiperSlide>
                    <SwiperSlide><Membercard /></SwiperSlide>


                </Swiper>

            </div>


        </div>
    );
};

export default Teammembers;