import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/menu-bg.jpg"
import menuImg2 from "../../assets/home/chef-service.jpg"
import PopularMenu from "../Home/PopularMenu/PopularMenu";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Boss || menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our menu" ></Cover>

    </div>
  );
};

export default Menu;
