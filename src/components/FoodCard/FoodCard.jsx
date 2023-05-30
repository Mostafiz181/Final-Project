import React from "react";
import { useContext } from "react";
import { AwesomeButton } from "react-awesome-button";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const FoodCard = ({item}) => {
    const {image,name,recipe,price,_id}=item;

    const {user}=useContext(AuthContext)
    

    const navigate =useNavigate()
    const location=useLocation()

    const handleAddToCart = item =>{
      console.log(item)
      if(user){

        const cartItem ={image,name,price,email:user.email,menuId:_id}

        fetch('http://localhost:5000/carts',
            {method:"POST",
            headers:{
              "content-type" : "application/json"
            },
            body:JSON.stringify(cartItem)
          }
        )
        .then(res=>res.json())
        .then(data=>{
          if(data.insertedId){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Your food added in cart successfully.',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
      }
      else{
        Swal.fire({
          title: 'please login to add your food',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Please Login!'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login", {state: {from:location}} )
          }
        })
      }
    }
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
                  <button onClick={()=>handleAddToCart(item)}>Add To Cart</button>
          </AwesomeButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
