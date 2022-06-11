import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./constants/theme";
import PageContainer from "./components/PageContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// PAGES
import Home from "./pages/Home";
import Shop from "./pages/Shop";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boutique" element={<Shop />} />
        </Routes>
        <Footer />
      </PageContainer>
    </ThemeProvider>
  );
};

export default App;
