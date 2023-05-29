import React, { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import orderImg from "../../../assets/shop/banner2.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseMenu from "../../../hooks/UseMenu";
import { Helmet } from "react-helmet-async";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
 
  const [menu] = UseMenu();
  const categories = ["Salad", "Pizza", "Soup", "Dessert", "Drink"]
  const {category}= useParams();
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const drink = menu.filter((item) => item.category === "drink");

  return (
    <div>
      <Helmet>
        <title>Boss || Order</title>
      </Helmet>
      <Cover img={orderImg} title={"Our Food"}></Cover>

      <div >
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="text-center mt-3 font-bold text-2xl text-yellow-500">
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drink</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={salad}></OrderTab>
 
          </TabPanel>
          <TabPanel>
          <OrderTab items={pizza}></OrderTab>

          </TabPanel>
          <TabPanel>
          <OrderTab items={soup}></OrderTab>

          </TabPanel>
          <TabPanel>
          <OrderTab items={dessert}></OrderTab>

          </TabPanel>
          <TabPanel>
          <OrderTab items={drink}></OrderTab>

          </TabPanel>
          <TabPanel>
          <OrderTab items={offered}></OrderTab>

          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
