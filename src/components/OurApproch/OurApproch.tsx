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
        <div className='mt-12 lg:p-10 p-4 bg-orange-200 bg-opacity-50'>
            <div className='saria flex flex-col  justify-center items-center '>
                <h2 className=' font-bold saria text-4xl text-center text-orange-500 uppercase'>Why  Chosse us</h2>
                <p className='text-center text-lg w-3/4 mt-5 text-slate-600'>Picture this – captivating designs that speak volumes, websites that are as user-friendly as they are stunning, software solutions that simplify your operations, and marketing strategies that put your brand in the spotlight.</p>
            </div>
            <div className='mt-10 grid grid-cols-2   justify-around items-center   lg:flex-nowrap flex-wrap  '>
                <Image className='img-fluid flex justify-center items-center ms-10 lg:h-[500px] lg:w-[550px]' src={approch} alt='' />

                <section className="-mt-10 me-16 ">

                    <ul className='grid grid-cols-2 lg:grid-cols-2 gap-2'>
                        {
                            features.map((feature, index) => (
                                <li
                                    className="list-none btn saria py-4 px-6 bg-orange-400 hover:bg-orange-500 border rounded-bl-3xl rounded-tr-3xl text-lg font-semibold hover:text-white text-center"
                                    key={index}
                                >
                                    {feature.title} {/* Sort the title */}
                                </li>
                            ))
                        }
                    </ul>
                </section>
            </div>
        </div >
    );
};
const features = [
    {
        "title": "Accessible Support",
        "description": "Need assistance? Our customer support is always ready to help. Whether it's a question about design elements, website functionality, software features, or cybersecurity concerns, our friendly support team is just a message or call away."
    },
    {
        "title": "Celebrating Success Together",
        "description": " Your success is our success. We celebrate milestones and achievements with you, fostering a collaborative partnership that goes beyond transactions. Your journey with Youthminds TECH is not just about services; it's about shared victories and growth."
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
        "title": "Feedback Integration",
        "description": "Your feedback matters. We actively seek and integrate your input throughout the process. Your insights guide our design iterations, software updates, and overall approach to ensure the end result aligns perfectly with your expectations."
    }
    ,
    {
        "title": "Personalized Solutions",
        "description": "At Youthminds TECH, we understand that every business is unique. By offering a wide range of services, including design, web, software, digital marketing, and cybersecurity, we tailor our solutions to match your specific needs, ensuring a personalized and customer-friendly experience."
    },
    {
        "title": "Quick Turnaround",
        "description": "We know time is of the essence. Our efficient processes ensure quick turnaround times without compromising quality. From design concepts to software deployment, we work diligently to meet your timelines and exceed expectations."
    },
    {
        "title": "Transparent Communication",
        "description": "Communication is key. We believe in keeping you informed at every step. Our transparent communication ensures that you are part of the process, providing insights and updates to make informed decisions about your digital strategy."
    },

    {
        "title": "User-Focused Designs",
        "description": "Our design and web services prioritize creating experiences that resonate with your audience. We put your users at the center, ensuring that the digital journey is not only visually appealing but also user-friendly and intuitive."
    },
    {
        "title": "User Training",
        "description": "Transitioning to new digital solutions can be seamless with our user training programs. We provide hands-on training sessions to ensure that you and your team are comfortable and confident in utilizing the full potential of our services."
    }
];

export default OurApproch;