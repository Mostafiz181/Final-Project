import React from 'react';
import img from '../../../assets/home/chef-service.jpg'

const Boss = () => {
    return (
        <div className='relative'>
           <img  src={img} alt="" />
            <div className="box py-10 px-10 bg-white sm:md:bottom-[50%] left-[50%] translate-x-[-50%] translate-y-[50%]    absolute rounded-lg">

                <h3 className='text-4xl text-black text-center'>Bistro Boss</h3>
                <p className='text-black text-1xl text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! 
                </p>
            </div>
           
        
            
        </div>
    );
};

export default Boss;