import React from "react";
// @mui
import { styled } from "@mui/material/styles";
import Header from "../Header";
import Footer from "../Footer";

const Main = styled("h1")(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const MainLayout = () => {
  return (
    <>
      <Header />
      <Main>Main Layout</Main>
      <Footer />
    </>
  );
};

export default MainLayout;
