import React from 'react';
import FoodCard from '../../../components/FoodCard/FoodCard';

const OrderTab = ({items}) => {
    return (
        <div className="text-1xl grid  md:grid-cols-3 gap-4 mt-4">
        {
            items.map(item=> <FoodCard
            key={item._id}
            item={item}
            ></FoodCard>)
        }
    </div>
    );
};

export default OrderTab;