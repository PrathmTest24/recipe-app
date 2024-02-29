// ApiContext.js
import { createContext, useContext, useState,useEffect } from 'react';

export const ApiContext = createContext([]);

export const ApiProvider = ({ children }) => {
 const [fav , setFav] =useState([])
 
  return (
    <ApiContext.Provider value={{ fav,setFav }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => useContext(ApiContext);
