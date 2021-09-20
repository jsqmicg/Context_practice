import React, { createContext } from "react";
import Albums from "../components/mock/Albums";

const AlbumsContext = createContext();

const AlbumsProvider = ({ children }) => {
  const data = { Albums };
  return (
    <AlbumsContext.Provider value={data}>{children}</AlbumsContext.Provider>
  );
};

export { AlbumsProvider };
export default AlbumsContext;
