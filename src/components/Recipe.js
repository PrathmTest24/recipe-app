import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import Data from './txt.json'
import { ApiContext, useApi } from '../context/ApiContext';

function Recipe() {
  
  const [data, setData] = useState([]);
  const rec = useApi({ fav: [] })  
  let d = rec.fav;
 

  async function handleData() {
    const res = await fetch('https://dummyjson.com/recipes');
    const result = await res.json();
    console.log(result.recipes)
    setData(result.recipes)
  }
  console.log(rec)

  function handleFav({name,difficulty,img}){
      console.log({name,difficulty,img})
      const ret =  rec.setFav([...(rec.fav || []),{name,difficulty,img}])
      return ret;
  }
  
   
 
   useEffect(() => {
    handleData();
  }, [])

  return (
    <div>
      <div className="flex flex-wrap  -mx-4">
        { 
          data.map((item) => (

          <div className="w-full  md:w-1/2 lg:w-1/4   px-4 mb-8">
            {/* md:w-1/2 lg:w-1/4 */}

            <div className="mt-5 max-w-60  bg-white rounded overflow-hidden shadow-lg">
              <img className="w-full  h-30 object-cover" src={item.image} alt="Card" />

              <div className="px-5 py-3">
                <p className='text-sm text-green-300 font-bold'>{item.difficulty}</p>
                <div className="font-bold text-xl mb-2">{item.name}</div>

              </div>

              <div className="px-4  pb-2">
                <button className="ml-1 bg-black text-white px-4 py-2 rounded">Recipe Details</button>
                <button onClick={()=>handleFav({name:item.name,difficulty:item.difficulty,img:item.image,lenght:item.lenght})} className="ml-1 bg-black text-white px-4 py-2 rounded">Add to Favorites</button>

              </div>
            </div>





          </div>
        
        ))}
      </div>




    </div>
  )
}

export default Recipe