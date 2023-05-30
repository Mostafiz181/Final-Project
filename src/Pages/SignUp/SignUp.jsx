import React from "react";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const {createUser,updateUserProfile}=useContext(AuthContext)
  const navigate=useNavigate()

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email,data.password)
    .then(result=>{
      const loggedUser= result.user;
      console.log(loggedUser)
      updateUserProfile(data.name,data.photo)
      .then(()=>{
        console.log("user update successful")
        reset();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'User update successful',
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/');

      })
      .catch(error=>console.log(error))
      
    })
  };
  return (
    <>
      <Helmet>
        <title>Boss || Signup</title>
      </Helmet>

      <div className="hero min-h-screen bg-base-200">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="hero-content flex-col lg:flex-row-reverse"
        >
          <div className="text-center lg:text-left w-1/2">
            <h1 className="text-5xl font-bold">Sign Up</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  {...register("name", { required: true })}
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  {...register("photo Url", { required: true })}
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  className="input input-bordered"
                />

                {errors.password?.type === "minLength" && (
                  <p className="text-red-500">Password must be 6 characters</p>
                )}
                {errors.password?.type === "required" && (
                  <p className="text-red-500">Password is required</p>
                )}

                {errors.password?.type === "maxLength" && (
                  <p className="text-red-500">
                    Password is less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500">
                    Password must be a uppercase ,lowercase a number and a
                    special characters
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                
                <input className="btn btn-primary" type="submit" value="Sign Up" />
              </div>

              <p><small>Already have an account? <Link to="/login">Login</Link></small></p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
