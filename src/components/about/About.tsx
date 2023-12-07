import Image from 'next/image';
import React from 'react';
import logo from '../../assets/about.jpg'
const About = () => {
    return (
        <div className=' p-4 lg:p-10 '>
            <h2 data-aos="fade-up" className='text-4xl font-semibold text-center '>About Us</h2>
            <div className='flex flex-wrap justify-center lg:items-center lg:flex-nowrap'>
                <div data-aos="fade-up" data-duration='1000' className='lg:w-1/2 md:mt-10 md:mb-10 space-y-2'>
                    <h1 className='text-2xl font-bold'>Here your digital dreams come to life! We're not just an IT company; we're your partners in creating a powerful online presence.</h1>
                    <p className=' text-slate-600'>
                        Here your digital dreams come to life! We're not just an IT company; we're your partners in creating a powerful online presence. <br />
                        Our design and web experts craft visually striking experiences, ensuring your brand stands out in the crowded online space. Our software solutions are tailored to enhance functionality and efficiency, adapting to the unique requirements of your enterprise. Our team of experts combines artistic flair with technical expertise, creating visually stunning designs and seamlessly functional websites. <br />
                        We engineer powerful software tailored to your unique needs, ensuring your digital footprint stands out in the competitive landscape. Through targeted digital marketing strategies, we enhance your online presence, connecting you with your audience effectively. Meanwhile, our digital marketing strategies not only elevate your online presence but also strategically position your brand for success. <br /> In the ever-evolving digital landscape, our cybersecurity measures are robust, providing a shield against potential threats. Our dedicated cybersecurity team employs the latest technologies to safeguard your digital assets, providing peace of mind in an ever-evolving threat landscape. <br />
                        Choose YouthMinds Tech as your trusted partner for an all-encompassing IT experience. Elevate your brand, streamline your operations, and fortify your digital presence with our integrated services.
                    </p>
                </div>
                <div data-aos="fade-left" className='lg:w-1/2'>
                    <Image className='image-fluid' alt='' src={logo} />
                </div>
            </div>
        </div>

    );
};

export default About;