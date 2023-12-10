'use client'
import Image from 'next/image';
import approch from '../../assets/why-you-choose-img.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';


const OurApproch = () => {
    return (
        <div className='lg:p-10 p-4 bg-orange-200 bg-opacity-50'>
            <div className='saria flex flex-col  justify-center items-center '>
                <h2 className='mt-10 font-bold saria text-4xl text-center'>Why  Chosse us</h2>
                <p className='text-center text-lg text-slate-600 w-4/5'>Picture this – captivating designs that speak volumes, websites that are as user-friendly as they are stunning, software solutions that simplify your operations, and marketing strategies that put your brand in the spotlight.</p>
            </div>
            <div className='mt-10 flex flex-row-reverse  justify-center items-center  gap-10 lg:flex-nowrap flex-wrap  '>
                <Image className='img-fluid lg:h-[500px] lg:w-[550px]' src={approch} alt='' />

                <section className="py-12 w-72  lg:w-[40rem] flex justify-center items-center">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}

                        modules={[Pagination]}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                        }}
                        className="mySwiper"
                    >
                        {features.map((feature, index) => (
                            <SwiperSlide key={index}>
                                <div className="lg:p-8 h-96 p-4 rounded shadow-md">
                                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                                    <p className="text-gray-700">{feature.description}</p>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </section>
            </div>
        </div >
    );
};
const features = [
    {
        "title": "Personalized Solutions",
        "description": "At Youthminds TECH, we understand that every business is unique. By offering a wide range of services, including design, web, software, digital marketing, and cybersecurity, we tailor our solutions to match your specific needs, ensuring a personalized and customer-friendly experience."
    },
    {
        "title": "User-Focused Designs",
        "description": "Our design and web services prioritize creating experiences that resonate with your audience. We put your users at the center, ensuring that the digital journey is not only visually appealing but also user-friendly and intuitive."
    },
    {
        "title": "Transparent Communication",
        "description": "Communication is key. We believe in keeping you informed at every step. Our transparent communication ensures that you are part of the process, providing insights and updates to make informed decisions about your digital strategy."
    },
    {
        "title": "Accessible Support",
        "description": "Need assistance? Our customer support is always ready to help. Whether it's a question about design elements, website functionality, software features, or cybersecurity concerns, our friendly support team is just a message or call away."
    },
    {
        "title": "Educational Resources",
        "description": "We believe in empowering our clients. That's why we provide educational resources and insights into the world of digital technology. Understanding the 'why' and 'how' behind our services allows you to actively engage in shaping your digital journey."
    },
    {
        "title": "Flexible Packages",
        "description": "Our services are designed to fit your business, not the other way around. Choose from flexible packages that cater to your immediate needs while allowing room for scalability as your business grows. No hidden fees, just straightforward solutions."
    },
    {
        "title": "Quick Turnaround",
        "description": "We know time is of the essence. Our efficient processes ensure quick turnaround times without compromising quality. From design concepts to software deployment, we work diligently to meet your timelines and exceed expectations."
    },
    {
        "title": "User Training",
        "description": "Transitioning to new digital solutions can be seamless with our user training programs. We provide hands-on training sessions to ensure that you and your team are comfortable and confident in utilizing the full potential of our services."
    },
    {
        "title": "Feedback Integration",
        "description": "Your feedback matters. We actively seek and integrate your input throughout the process. Your insights guide our design iterations, software updates, and overall approach to ensure the end result aligns perfectly with your expectations."
    }
];

export default OurApproch;