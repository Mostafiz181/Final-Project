import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/menu-bg.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"
import UseMenu from "../../hooks/UseMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = UseMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Boss || menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our menu"></Cover>
      {/* <SectionTitle subHeading= "...Don't Miss ..." heading= "To days Offered"></SectionTitle> */}
      <SectionTitle
        subHeading="... Don't miss ..."
        heading="Today's offered"
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory items={dessert} title={"Dessert"} coverImg={dessertImg}></MenuCategory>
      <MenuCategory items={pizza} title={"Pizza"} coverImg={pizzaImg}></MenuCategory>
      <MenuCategory items={salad} title={"Salad" } coverImg={saladImg}></MenuCategory>
      <MenuCategory items={soup} title={"Soup"} coverImg={soupImg}></MenuCategory>

    </div>
  );
};

export default Menu;
