import React from "react";
import "./item.component.css";

const Item = ({ name, title, image, bid }) => {
  const nickNameArr = name?.split(" ");
  const nickname = nickNameArr
    ? `${nickNameArr[0][0]}${nickNameArr[1][0]}`
    : null; //getting the nickname from the first letters in both first name and last name

  return (
    <div className="item-section">
      <div className="item-featured-image">
        <img
          src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/category/brand-compare/cat-page-brand-compare-xps-13-9320-sl-front-800x550.png?fmt=png-alpha&wid=800&hei=550"
          alt="featured avatar"
        />
      </div>
      <div className="item-bidder">
        <h3 className="item-bidder-nickname">{nickname}</h3>
        <h4 className="item-bidder-name">
          {name} <span className="item-highest-bidder">(Highest Bidder)</span>
        </h4>
      </div>
      <div className="item-title">{title}</div>
      <div className="item-price">
        <span className="item-price-title">Current Bid:</span>
        {bid}
      </div>
      <div className="item-btn">Add to wishlist</div>
    </div>
  );
};

export default Item;
