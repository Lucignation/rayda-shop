import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

import "./item.component.css";

const Item = ({ name, title, image, bid }) => {
  const BootstrapButton = styled(Button)({
    background: "#004ccc",
    boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
    borderRadius: "8px",
    width: "100%",
    padding: "10px 16px",
    color: "#fff",
    fontFamily: "IBM Plex Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "20px",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#0069d9",
      borderColor: "#0062cc",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  });

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
        {/* <img src={image} alt="featured avatar" />  This was commented because the image link wasn't displaying images accordning to what we have on FIGMA  */}
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
      <BootstrapButton>Add to wishlist</BootstrapButton>
    </div>
  );
};

export default Item;
