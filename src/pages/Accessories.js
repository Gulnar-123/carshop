import React, { useEffect, useState } from 'react'
import CarCard from '../components/CarCard'
import AccCard from '../components/AccCard'
import axios from 'axios'

export default function Accessories() {
  var [accs, setAccs] = useState([])


  useEffect(() => {
    fetchacc()

  }, [])
  function fetchacc() {
    axios.get("http://localhost:8123/accessories").then(res => {

      setAccs(res.data)
    })
  }


  return (
    <div>
      <h1 className='text-center display-5'>Accessories Collection</h1>


      <div className='row justify-content-evenly mt-5'>

        {
          accs.map((c, index) => {

            return <AccCard imgnm={c.image} features={c.features} company={c.company} warrenty={c.warrenty} price={c.price} />
          })
        }


      </div>

    </div>
  )
}
