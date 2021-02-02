import React, { useState, createContext } from "react";

export const SidebarContext = createContext();

const SidebarContextProvider = (props) => {
  const [show, setShow] = useState(false);

  const changeState = (cur) => {
    setShow(cur);
  };
  return (
    <SidebarContext.Provider value={{ changeState, show }}>
      {props.children}
    </SidebarContext.Provider>
  );
};
export default SidebarContextProvider;
