import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import "./App.css";

//importing of components
import HeaderSection from "../../components/header-section/header-section";
import BackCover from "../../components/back-cover/back-cover";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="sm"></Container>
      <HeaderSection />
      <div className="back-cover-section ">
        <BackCover />
      </div>
    </div>
  );
}

export default App;
