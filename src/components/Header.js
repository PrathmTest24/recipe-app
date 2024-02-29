import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useApi } from '../context/ApiContext';

function Header() {

  const [res, setRes] = useState([])
  const api = useApi({ fav: [] })

  const [user, setUser] = useState([]);

  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);


  function handleOnChange(e) {
    const query = e.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        user && user.length
          ? user.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);

    } else {
      setShowDropdown(false);
    }
  }
  function handleClick(e) {
    //  setSearchParam(e.target.innerText)
    console.log(filteredUsers)
    //  setFilteredUsers([""])
  }

  // -------------------------------------------------------------------------------------------


  // const favArrayLength = api.fav ? api.fav.length : 0;
  // setRes(favArrayLength);
  console.log(api.fav.length)
  // -------------------------------------------------------------------------------------




  async function searchData() {

    const res = await fetch(`https://dummyjson.com/recipes/search?q=${searchParam}`)
    const data = await res.json();
    //   console.log(data)  



    console.log(data.recipes.map((item) => item.name))
    setUser(data.recipes.map((item) => item.name));
  }
  useEffect(() => {
    searchData()
  }, [])

  console.log(filteredUsers)
  return (
    <>
      <header className="bg-gray-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo or site name */}
          <div className="text-2xl font-bold">Food Recipe</div>

          {/* Navigation menu */}
          <nav className="space-x-4">
            <NavLink to={'/'} className="hover:text-gray-300 font-bold">Home</NavLink>
            <NavLink to={'/favorites'} className="hover:text-gray-300 font-bold">Favorites{api.fav.length > 0 && (
              <span className="absolute rounded-full bg-black w-4 h-4 top right p-0 m-0 text-white font-mono text-sm leading-tight text-center">
                {api.fav.length}
              </span>
            )}</NavLink>

          </nav>

          {/* Search bar */}
          <div className="flex items-center">
            <input
              type="text"
              value={searchParam}
              onChange={handleOnChange}
              placeholder="Search recipes.."
              className="px-2  py-1 border border-gray-600 text-black rounded focus:outline-none"
            />
            <button onClick={handleClick} className="ml-2 bg-black text-white px-4 py-1 rounded">Search</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header