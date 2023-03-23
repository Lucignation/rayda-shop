import React from "react";

import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";

import { useGetPostsQuery } from "../../features/api/apiSlice";

import Item from "../item/item.component";

import "./featured-items.component.css";

const FeaturedItems = () => {
  const { data: _products, isLoading } = useGetPostsQuery();

  return (
    <div className="featured-items">
      <div className="fi-heading">
        <div className="fi-title">Featured Items</div>
        <div className="fi-auction">View Auction</div>
      </div>
      {isLoading ? (
        <CircularProgress disableShrink />
      ) : (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {_products?.data.map((item, index) => {
            return (
              <Grid item xs={12} sm={4} md={3} key={index}>
                <Item
                  title={item.title}
                  name={item.name}
                  image={item.image}
                  bid={item.bid}
                />
              </Grid>
            );
          })}
        </Grid>
      )}
    </div>
  );
};

export default FeaturedItems;
