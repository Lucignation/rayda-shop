import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import "./App.page.css";

//importing of components
import HeaderSection from "../../components/header-section/header-section.component";
import BackCover from "../../components/back-cover/back-cover.component";
import FeaturedItems from "../../components/featured-items/featured-items.component";

function App() {
  return (
    <div className="App">
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
}

export default App;
