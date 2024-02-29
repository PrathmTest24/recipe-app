import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import Recipe from './components/Recipe';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Favorites from './components/Favorites';
import RecipeDetails from './components/RecipeDetails';


function App() {
 
  const[data,SetData] = useState([]);


  return (
    <>
    <BrowserRouter> 
       <Header/>
       {/* <Recipe/> */}
       {/* <RecipeDetails/> */}

      
   <Routes>
        <Route path='/' element={<Recipe/>}></Route>
        <Route path='/favorites' element={<Favorites/>}></Route>
        <Route path='/recipedetails' element={<RecipeDetails/>}></Route>
       </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;
