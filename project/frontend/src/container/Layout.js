import React from "react";
import { Header, Footer, Sidebar, Content } from "./index";
import SearchContextProvider from "./../contexts/SearchContext";
const Layout = (props) => {
  return (
    <div>
      <SearchContextProvider>
        <Header {...props} />
        <Sidebar />
        <Content />
        <Footer />
      </SearchContextProvider>
    </div>
  );
};

export default Layout;
