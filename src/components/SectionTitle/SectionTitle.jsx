import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='md:w-4/12 mx-auto text-center z-20'>
            <p className='text-yellow-600 mb-2'>{subHeading}</p>
            <h3 className='text-3xl border-y-4 uppercase py-5 mb-3 font-bold'>{heading}</h3>
            
        </div>
    );
};

export default SectionTitle;