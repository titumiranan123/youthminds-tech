import React from 'react';
import Statecard from './Statecard';
import years from '../../assets/Years.svg'
import project from '../../assets/Project.svg'
import customer from '../../assets/customer.svg'
import award from '../../assets/awards.svg'
const State = () => {
    return (
        <div className='mt-10 flex  bg-orange-500 bg-opacity-30 p-10'>

            <div className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1  gap-4'>
                <div>
                    <h1 className='text-4xl saria'>Our States</h1>
                    <p className=''>Maecenas euismod viverra purus, volutpat posuere mauris tristique quisokaft.</p>
                </div>
                <Statecard logo={years} heading='1 Years' title='Working With Passion' />
                <Statecard logo={project} heading='1 Years' title='Working With Passion' />
                <Statecard logo={customer} heading='1 Years' title='Working With Passion' />
                <Statecard logo={award} heading='1 Years' title='Working With Passion' />
            </div>
        </div>
    );
};

export default State;