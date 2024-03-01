import React, { useState } from 'react'
import { useApi } from '../context/ApiContext'

const RecipeDetails = () => {
  const [data, setData] = useState([])

  const ingr = useApi({  details: [] })
  const a = ingr.details.map(recipe => recipe.ingredients).flat();
  const instructions = ingr.details.map(recipe => recipe.instructions).flat();
  console.log(a)
 console.log(instructions)
  console.log(ingr)


  return (
    <>

      <div className="flex ">
        {
          ingr.details.map((item) => (

            <div className="w-1/2  p-4">

              <div className="mt-5 max-w-sm mx-auto  bg-white rounded overflow-hidden shadow-lg">
                <img className="m-6 w-80  h-30 object-cover" src={item.img} alt="Card" />

                <div className="px-5 py-3">
                  <p className='text-sm text-green-300 font-bold'>{item.difficulty}</p>
                  <div className="font-bold text-xl mb-2">{item.name}</div>

                </div>

                <div className="px-4  pb-2">
                  <button className="ml-1 bg-black text-white px-4 py-2 rounded">Recipe Details</button>
                  <button className="ml-1 bg-black text-white px-4 py-2 rounded">Add to Favorites</button>

                </div>
              </div>




            </div>


          ))}

        <div>
          <div className=' grid w-1/2  p-5'>
            <h2 className='font-bold text-xl mt-5'>Ingredients:</h2>
            <ul className='mt-5'>
              {a.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>

            <h2 className='font-bold text-xl mt-5'>Instructions:</h2>
            <ul className='mt-5'>
              {instructions.map((instructions, index) => (
                <li key={index}>{instructions}</li>
              ))}
            </ul>

          </div>

        </div>



      </div>








    </>
  )
}

export default RecipeDetails