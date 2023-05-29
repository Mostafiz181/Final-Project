import React from "react";
import { AwesomeButton } from "react-awesome-button";

const FoodCard = ({item}) => {
    const {image,name,recipe,price}=item;
  return (
    <div>
      <div className="card w-[424px] h-[541px] bg-base-100 shadow-xl">
        <figure>
          <img className="w-[424px] h-[300px]" src={image} alt="img" />
             
            
          
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="absolute right-5 top-4 px-2 py-3 rounded-md bg-black text-white font-bold">$ {price}</p>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
          <AwesomeButton className="secondary uppercase ">
                  Add to cart
          </AwesomeButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
