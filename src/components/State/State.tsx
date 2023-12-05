import React from 'react';
import Statecard from './Statecard';
import years from '../../assets/Years.svg'
import project from '../../assets/Project.svg'
import customer from '../../assets/customer.svg'
import award from '../../assets/awards.svg'
const State = () => {
    return (
        <div className='mt-20 flex  bg-orange-500 bg-opacity-30 p-10 justify-center  items-center'>

            <div className='grid lg:grid-cols-4  md:grid-cols-2 grid-cols-1  gap-4'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-4xl font-semibold saria'>Our States</h1>
                    <p className='w-2/3'>Maecenas euismod viverra purus, volutpat posuere mauris tristique quisokaft.</p>
                </div>
                {/* <Statecard logo={years} amount={12} heading=' Years' title='Working With Passion' /> */}
                <Statecard logo={project} amount={12} heading=' Porjects' title='Working With Passion' />
                <Statecard logo={customer} amount={12} heading=' Customers' title='Working With Passion' />
                <Statecard logo={award} amount={12} heading=' Awards' title='Working With Passion' />
            </div>
            {/* <div className='mt-10 rounded-xl'>
                <div>
                    <h1>We Take Care Of More Than 1.5k Trusted Allies</h1>
                </div>
            </div> */}
        </div>
    );
};

export default State;