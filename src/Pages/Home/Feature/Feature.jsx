import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featureImg from "../../../assets/home/featured.jpg";
import "./Feature.css";

const Feature = () => {
  return (
    <div className="featureItem mt-5 bg-fixed">
      <div className="overlay text-white pt-10">
        <SectionTitle 
          subHeading="---Check it out---"
          heading="FROM OUR MENU"
        ></SectionTitle>
      </div>

      <div className="md:flex sm:flex">
        <div className="w-1/2 pl-20 pb-20 pt-20 pr-20 z-10">
          <img src={featureImg} alt="" />
        </div>

        <div className="w-1/2 ml-4  pt-28  z-10 text-white">
          <h4 className="text-2xl">March 20, 2023</h4>
          <h3 className="text-3xl">WHERE CAN I GET SOME?</h3>
          <p className="text-1xl pr-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-5 text-white">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
