// ApiContext.js
import { createContext, useContext, useState,useEffect } from 'react';

export const ApiContext = createContext([]);

export const ApiProvider = ({ children }) => {
 const [fav , setFav] =useState([])
 const [details, setDetails] =useState([]);
 
  return (
    <ApiContext.Provider value={{ fav,setFav,details, setDetails  }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => useContext(ApiContext);
