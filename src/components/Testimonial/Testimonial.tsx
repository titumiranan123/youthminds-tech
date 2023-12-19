"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './styles.css';
// import required modules
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import ReviewCard from './ReviewCard';

const reviews = [
    {
        name: 'John Doe',
        designation: 'Web Developer',
        image: 'https://placekitten.com/200/200', // Replace with actual image URL
        rating: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget justo sed erat imperdiet bibendum. In hac habitasse platea dictumst.',
    },
    {
        name: 'Jane Smith',
        designation: 'UX Designer',
        image: 'https://placekitten.com/200/200', // Replace with actual image URL
        rating: 4,
        review: 'Duis et consequat tellus. Etiam luctus justo at augue luctus, vel laoreet libero ultrices. Nullam vel urna vel elit efficitur tempus.',
    },
    {
        name: 'John Doe',
        designation: 'Web Developer',
        image: 'https://placekitten.com/200/200', // Replace with actual image URL
        rating: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget justo sed erat imperdiet bibendum. In hac habitasse platea dictumst.',
    },
    {
        name: 'Jane Smith',
        designation: 'UX Designer',
        image: 'https://placekitten.com/200/200', // Replace with actual image URL
        rating: 4,
        review: 'Duis et consequat tellus. Etiam luctus justo at augue luctus, vel laoreet libero ultrices. Nullam vel urna vel elit efficitur tempus.',
    },
    {
        name: 'John Doe',
        designation: 'Web Developer',
        image: 'https://placekitten.com/200/200', // Replace with actual image URL
        rating: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget justo sed erat imperdiet bibendum. In hac habitasse platea dictumst.',
    },
    {
        name: 'Jane Smith',
        designation: 'UX Designer',
        image: 'https://placekitten.com/200/200', // Replace with actual image URL
        rating: 4,
        review: 'Duis et consequat tellus. Etiam luctus justo at augue luctus, vel laoreet libero ultrices. Nullam vel urna vel elit efficitur tempus.',
    },

];
const Testimonial = () => {
    return (
        <div className='mt-12 max-w-[1440px] mx-auto p-4'>
            <div className='saria flex flex-col justify-center items-center '>
                <h2 className=' font-bold saria text-4xl text-center text-orange-500'>TESTIMONIALS</h2>
                <p className='text-center text-lg w-3/5 mt-4 text-slate-600'>Services are professional offerings provided by businesses to meet specific needs or solve problems for their customers. Services can range from your budget.</p>
            </div>
            <div className='mt-20'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
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
                    modules={[FreeMode, Pagination, Autoplay]}
                    className="mySwiper"
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                >

                    {reviews.map((review, index) => (
                        <SwiperSlide key={index}>  <ReviewCard  {...review} /> </SwiperSlide>
                    ))}


                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;