import React from 'react';
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
        <div className='flex justify-center items-center flex-col'>
            <div className='saria flex flex-col  justify-center items-center '>
                <h2 className='mt-10 font-bold saria text-4xl text-center'>Team Members </h2>
                <p className='text-center text-lg w-3/4 text-slate-600'>Services are professional offerings provided by businesses to meet specific needs or solve problems for their customers. Services can range from your budget.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-10'>

                <Membercard />
                <Membercard />
                <Membercard />
                <Membercard />

            </div>


        </div>
    );
};

export default Teammembers;