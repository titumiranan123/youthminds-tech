"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './styles.css';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
const Testimonial = () => {
    return (
        <div>
            <div className='saria flex flex-col justify-center items-center '>
                <h2 className='mt-10 font-bold saria text-4xl text-center'>Happy Customers</h2>
                <p className='text-center text-lg w-3/5 mt-4 text-slate-600'>Services are professional offerings provided by businesses to meet specific needs or solve problems for their customers. Services can range from your budget.</p>
            </div>
            <div className='mt-10'>
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
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;