import React from 'react';
import svg from '../../assets/web.svg'
import svg2 from '../../assets/software devloment.svg'
import svg3 from '../../assets/cyberSecutrity.svg'
import svg4 from '../../assets/digital marketing.svg'

import Servicescard from './Servicescard';
type serviceType = {
    title: string;
    description: string;
    tags: string;
    key: number
}
const services = [
    {
        "title": "Web Solution",
        "description": "Need a website that wows? Step into the world of seamless online experiences with us. We're more than just designers and developers; we're your partners in crafting a user-friendly, visually stunning digital presence. Let's build a website that not only looks incredible but works effortlessly. Your online success story begins here! So let’s create a digital space that truly reflects your brand and engages your audience! ",
        "tags": "#WebMagic #WebSolutions",
        "svg": svg
    },
    {
        "title": "Software Solution",
        "description": "Elevate your operations with our customer-friendly software solutions. We're not just coding; we're crafting experiences tailored to your unique needs. Let’s collaborate to bring efficiency, innovation, and a touch of user-friendly magic to your software journey! So let’s build software that works for you!  ",
        "tags": "#SoftwareSimplicity #SoftwareExcellence",
        "svg": svg2,
    },
    {
        "title": "Digital Marketing",
        "description": "Ready to make a digital splash? Our customer-friendly approach means more than just services; it's a partnership dedicated to growing your brand. From strategic campaigns to engaging content, we’ve got the tools to make your brand shine. Let's boost your digital journey together. Your success story starts here! ",
        "tags": "#DigitalEmpowerment #DigitalSuccess",
        "svg": svg4
    },
    {
        "title": "Graphics Design",
        "description": "Where your vision meets our creativity! Our friendly team is here to transform your ideas into stunning visuals that truly reflect your brand. From logos to marketing materials, we've got your back. Let's make your brand look and feel amazing together! ",
        "tags": "#DesigningDreams #DesignExcellence",
        "svg": svg2

    },
    {
        "title": "Hardware Solution",
        "description": "Need a reliable partner for your hardware needs? Look no further! Our customer-friendly approach means more than just solutions; it's about creating a hardware experience that seamlessly aligns with your goals. We're not just about components and setups; we're your partners in creating a smooth and reliable hardware experience. Let’s collaborate to bring efficiency, innovation, and a touch of user-friendly magic to your technology landscape! ",
        "tags": "#HardwareSolutions #HardwareInnovation"
    },
]
const Services = () => {
    return (
        <div className='mt-10'>
            <div className='saria flex flex-col justify-center items-center '>
                <h2 className='mt-10 font-semibold saria text-4xl text-center'>SOLUTION WE OFFER</h2>
                <p className='text-center text-slate-600 w-1/4 text-lg'>Bring The Revolution With
                    The <span className='text-orange-500 '>Diligence</span> Service</p>
            </div>
            <div className='grid mt-10 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10'>
                {
                    services.map((service, indx) => <Servicescard key={indx} logo={service.svg} heading={service.title} description={service.description} />)
                }
            </div>
        </div>
    );
};

export default Services;