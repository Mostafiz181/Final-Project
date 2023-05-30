import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {

  const {user,logOut}=useContext(AuthContext)

  const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.log(error))

  }

    const navInfo= <>
              <li><Link className="uppercase" to='/'>Home</Link> </li>
              <li><Link className="uppercase" to='/menu'>Our Menu</Link></li>
              <li><Link className="uppercase" to='/order/salad'>Order</Link></li>
              <li><Link className="uppercase" to='/secret'>Our Secret</Link></li>
              

              {
                user ? <>
                <button onClick={handleLogOut} className="btn btn-ghost">Logout</button>
                </> :
                 <>
                  <li><Link className="uppercase" to='/login'>Login</Link></li>

                </>
              }
    </>
  return (
    <div>
      <div className="navbar bg-black bg-opacity-30   text-white fixed z-10 max-w-screen-xl ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >

                {navInfo}

            </ul>
          </div>
          <a className=" text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">

            {navInfo}

          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
