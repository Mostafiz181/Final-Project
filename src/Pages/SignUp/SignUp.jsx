import React from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => 
    {console.log(data)};
  return (
    <div className="hero min-h-screen bg-base-200">
      <form onSubmit={handleSubmit(onSubmit)} className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-1/2">
          <h1 className="text-5xl font-bold">Sign Up</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
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
                {...register("name",{ required: true })} 
                className="input input-bordered"
              />
               {errors.name && <span className="text-red-600">Name is required</span>}
               
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                {...register("email",{required:true})} 
                className="input input-bordered"
              />
              {errors.email && <span className="text-red-600">Email is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                {...register("password",{required:true,minLength:6, maxLength: 20})} 
                className="input input-bordered"
              />
              {errors.password && <span className="text-red-600">Password is at least 6 characters</span>}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
