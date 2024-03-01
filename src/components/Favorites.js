import React, { useEffect, useState } from 'react'
import { useApi } from '../context/ApiContext'

const Favorites = () => {
  const [data, setData] = useState([])
  const api = useApi({ fav: [] })



  function handleCall() {
    setData(api.fav);
  }

  console.log(api)

  useEffect(() => {
    handleCall()
  }, [])
  return (
    <>
      <div className="flex flex-wrap  -mx-4">
        {
          data.map((item) => (

            <div className="w-full  md:w-1/2 lg:w-1/4   px-4 mb-8">

              <div className="mt-5 max-w-60  bg-white rounded overflow-hidden shadow-lg">
                <img className="w-full  h-30 object-cover" src={item.img} alt="Card" />

                <div className="px-5 py-3">
                  <p className='text-sm text-green-300 font-bold'>{item.difficulty}</p>
                  <div className="font-bold text-xl mb-2">{item.name}</div>

                </div>

                <div className="px-4  pb-2">
                  <button className="ml-1 bg-black text-white px-4 py-2 rounded">Recipe Details</button>

                </div>
              </div>





            </div>

          ))}
      </div>




    </>
  )
}

export default Favorites