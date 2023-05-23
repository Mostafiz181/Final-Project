import React from 'react';

const MenuItem = ({item}) => {

    const {image,name,recipe,price}=item;
    return (
        <div className='flex space-x-2'>
            <img style={{height:'100px', width:'108px', borderRadius: '0px 200px 200px 200px'}} src={image} alt="" />

            <div>
                <h3 className='uppercase font-bold'>{name}..........</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>${price}</p>
            
        </div>
    );
};

export default MenuItem;