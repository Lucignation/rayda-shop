import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "../../services/shared.servies";
import { getAllProducts } from "../../store/Reducer";

import Item from "../item/item.component";

import "./featured-items.component.css";

const FeaturedItems = () => {
  const dispatch = useDispatch();

  const currentState = useSelector((state) => state);

  const { products } = currentState.products;

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getProducts();

      if (res.data.success === true) {
        dispatch(getAllProducts(res.data.data));
      }
    };

    fetchProducts();
  }, [dispatch]);

  const renderItems = products?.map((item, index) => {
    return (
      <Grid item xs={12} sm={4} md={3} key={index}>
        <Item
          key={index}
          title={item.title}
          name={item.name}
          image={item.image}
          bid={item.bid}
        />
      </Grid>
    );
  });
  return (
    <div className="featured-items">
      <div className="fi-heading">
        <div className="fi-title">Featured Items</div>
        <div className="fi-auction">View Auction</div>
      </div>
      {/* <div className="grid-items">{renderItems}</div> */}
      {products.length < 1 ? (
        <p>Loading</p>
      ) : (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {renderItems}
        </Grid>
      )}
    </div>
  );
};

export default FeaturedItems;
