
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
        <div className='space-y-5 mt-12 max-w-[1440px] mx-auto '>
            <div className='saria flex flex-col  justify-center items-center mb-10'>
                <h2 className='mt-10 font-bold saria text-4xl text-center  text-orange-500'>TEAM MEMBERS </h2>
                <p className='text-center text-lg w-3/4 mt-5 text-slate-600'>Services are professional offerings provided by businesses to meet specific needs or solve problems for their customers. Services can range from your budget.</p>
            </div>
            <div className=' mt-10'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
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