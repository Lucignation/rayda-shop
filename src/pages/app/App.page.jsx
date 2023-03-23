import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";

import "./App.page.css";

import { useGetPostsQuery } from "../../features/api/apiSlice";

//importing of components
import HeaderSection from "../../components/home-top-section/header-section/header-section.component";
import BackCover from "../../components/home-top-section/back-cover/back-cover.component";
import FeaturedItems from "../../components/featured-items/featured-items.component";

const App = () => {
  const { isError } = useGetPostsQuery();

  return (
    <div className="App">
      {isError && (
        <Alert variant="filled" severity="error">
          There seems to be error while fetching products, please check your
          network and try again.
        </Alert>
      )}
      <CssBaseline />
      <Container maxWidth="sm"></Container>
      <HeaderSection />
      <div className="back-cover-section ">
        <BackCover />
      </div>
      <div className="featured-items-section">
        <FeaturedItems />
      </div>
    </div>
  );
};

export default App;
