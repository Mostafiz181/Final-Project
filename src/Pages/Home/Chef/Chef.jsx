import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import chef1 from "../../../assets/chef/chef1.jpg";
import chef2 from "../../../assets/chef/chef2.jpg";
import chef3 from "../../../assets/chef/chef3.jpg";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

const Chef = () => {
  return (
    <section className="mt-5">
      <SectionTitle
        subHeading="---Should Try---"
        heading="CHEF RECOMMENDS"
      ></SectionTitle>

      <div className="px-4 grid md:grid-cols-3 gap-3 sm:grid grid-col-1 ">
        <div className="card w-100 bg-base-100 shadow-xl rounded-none mb-3">
          <figure className="w-full">
            <img
              src={chef1}
              alt="food"
              //   className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center bg-[#F3F3F3]">
            <h2 className="text-2xl font-bold ">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              {/* <button className="btn btn-primary">Add to cart</button> */}

              <button>
                <AwesomeButton className="secondary uppercase ">
                  Add to cart
                </AwesomeButton>
              </button>
            </div>
          </div>
        </div>

        <div className="card w-100 bg-base-100 shadow-xl rounded-none mb-3">
          <figure className="w-full">
            <img
              src={chef2}
              alt="food"
              //   className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center bg-[#F3F3F3]">
            <h2 className="text-2xl font-bold ">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              {/* <button className="btn btn-primary">Add to cart</button> */}

              <button>
                <AwesomeButton className="secondary uppercase ">
                  Add to cart
                </AwesomeButton>
              </button>
            </div>
          </div>
        </div>

        <div className="card w-100 bg-base-100 shadow-xl rounded-none mb-3">
          <figure className="w-full">
            <img
              src={chef3}
              alt="food"
              //   className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center bg-[#F3F3F3]">
            <h2 className="text-2xl font-bold ">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              {/* <button className="btn btn-primary">Add to cart</button> */}

              <button>
                <AwesomeButton className="secondary uppercase ">
                  Add to cart
                </AwesomeButton>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chef;
