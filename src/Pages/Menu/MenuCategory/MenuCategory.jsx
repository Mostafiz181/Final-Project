import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";

const MenuCategory = ({ items,title,coverImg }) => {
  return (
    <div className="py-10">
       {title && <Cover img={coverImg} title={title} ></Cover>}
      <div className="md:grid grid-cols-2 gap-4 mt-16">
        {
            items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center ">
        <button className="px-4 py-3  rounded-lg border-cyan-950 border-b-4 uppercase font-bold ">Order Your favourite food</button>
      </div>
    </div>
  );
};

export default MenuCategory;
