
import project from '../../assets/Project.svg'
import customer from '../../assets/customer.svg'
import award from '../../assets/awards.svg'
const State = () => {
    return (
        <div className='mt-12  bg-opacity-30  '>
            <div className='grid bg-[#F4AC6E]   bg-opacity-30 p-10 lg:grid-cols-3  md:grid-cols-2 grid-cols-1 mt-10  gap-4'>

                {/* <Statecard logo={years} amount={12} heading=' Years' title='Working With Passion' /> */}
                <Statecard logo={project} amount={12} heading=' Porjects' title='Working With Passion' />
                <Statecard logo={customer} amount={12} heading=' Customers' title='Working With Passion' />
                <Statecard logo={award} amount={12} heading=' Awards' title='Working With Passion' />
            </div>
        </div>
    );
};

export default State;