import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";

const AddItems = () => {
  return (
    <div className="w-full">
      <Helmet>
        <title>Boss || AddItem</title>
      </Helmet>
      <SectionTitle
        subHeading="---What's new?---"
        heading="ADD AN ITEM"
      ></SectionTitle>

      <form>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Recipe Name*</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full "
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Category*</span>
          </label>
          <select className="select select-bordered">
            <option disabled selected>
              Pick one
            </option>
            <option>Salad</option>
            <option>Pizza</option>
            <option>Soup</option>
            <option>Deserts</option>
            <option>Drink</option>
          </select>
        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Price*</span>
          </label>
          <input
            type="number"
            placeholder="Price"
            className="input input-bordered w-full "
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Item details</span>
         
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
          ></textarea>

        </div>
      </form>
    </div>
  );
};

export default AddItems;
