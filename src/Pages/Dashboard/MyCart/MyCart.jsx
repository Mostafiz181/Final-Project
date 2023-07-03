import React from "react";
import useCart from "../../../hooks/useCart";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";

import Swal from "sweetalert2";

const MyCart = () => {
  const [cart,refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  const handleDelete = item =>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {

            fetch(`http://localhost:5000/carts/${item._id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount > 0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your food item has been deleted.',
                        'success'
                      )
                }
            })

        }
      })
  }
  return (
    <>
      <SectionTitle
        subHeading="... My Cart  ..."
        heading="Wanna add more"
      ></SectionTitle>
      <div className="w-full">
        <Helmet>
          <title>Boss || My Cart</title>
        </Helmet>

        <div className="flex text-sm font-bold uppercase justify-evenly">
          <h3 className="text-3xl">Total orders :{cart.length}</h3>
          <h3 className="text-3xl">Total Price :${total}</h3>
          <button className="btn btn-warning btn-sm">PAY</button>
        </div>

        <div class="overflow-x-auto">
          <table class="table w-full ">
            <thead>
              <tr>
                <th> # </th>
               
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>

                {
                    cart.map((item,index)=>  <tr
                    key={item._id}
                    >
                        <td>{index + 1}</td>
                        <td>
                         <div class="flex items-center space-x-3">
                           <div class="avatar">
                             <div class="mask mask-squircle w-12 h-12">
                               <img
                                 src={item.image}
                                 alt="Avatar Tailwind CSS Component"
                               />
                             </div>
                           </div>
               
                        </div>
                        </td>
                        <td>
                            {item.name}
                        </td>
                        <td >
                           ${item.price}
       
                        </td>
                        <td>
                         <button onClick={()=>handleDelete(item)} className="btn btn-ghost  bg-red-800 text-white"><FaTrashAlt></FaTrashAlt></button>
                        </td>
                      </tr>)
                }

                



      

            </tbody>

          </table>
        </div>
      </div>
    </>
  );
};

export default MyCart;
