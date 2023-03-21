import React from "react";

import Item from "../item/item";

import "./featured-items.css";

import data from "../../db/data.json";

const FeaturedItems = () => {
  const renderItems = data.map((item, index) => <Item key={index} title={item.title} name={item.name} image={item.image} bid={item.bid} />);
  return (
    <div className="featured-items">
      <div className="fi-heading">
        <div className="fi-title">Featured Items</div>
        <div className="fi-auction">View Auction</div>
      </div>
      <div className="grid-items">{renderItems}</div>
    </div>
  );
};

export default FeaturedItems;
