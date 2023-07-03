import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

import {
  FaBars,
  FaBook,
  FaCalendarAlt,
  FaHome,
  FaShoppingBag,
  FaShoppingCart,
  FaUserNinja,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  // const isAdmin = true;
  const [isAdmin]= useAdmin()

  const [cart] = useCart();
  return (
    <div className="max-w-[1200px] ">
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            for="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side uppercase ">
          <label for="my-drawer-2" className="drawer-overlay"></label>
          <ul class="menu p-4 w-80 h-full bg-[#D1A054] text-base-content">
            <h2 className="text-3xl px-4 font-bold">Bistro Boss Restaurant</h2>

            {isAdmin ? (
              <>
                            <li>
                  <NavLink to="/dashboard/home">
                    <FaHome></FaHome>Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addItems">
                    <FaUtensils></FaUtensils> Add an Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/payment-history">
                    < FaBars></FaBars> Menage Items
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/review">
                    < FaBook></FaBook> Menage Bookings 
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allusers">
                     < FaUsers></FaUsers> All Users
                  </NavLink>
                </li>

               </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/home">
                    <FaHome></FaHome>User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/reservation">
                    <FaCalendarAlt></FaCalendarAlt>Reservation
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/payment-history">
                    <FaWallet></FaWallet>Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/mycart">
                    <FaShoppingCart></FaShoppingCart>My Cart
                    <span className="badge badge-secondary">
                      + {cart?.length || 0}
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/review">
                    <FaUserNinja></FaUserNinja>Add review
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/booking">
                    <FaUserNinja></FaUserNinja>My Booking
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>

            <li>
              <NavLink to="/">
                <FaHome></FaHome>Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu">
                <FaBars></FaBars>Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/salad">
                <FaShoppingBag></FaShoppingBag>Order
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
