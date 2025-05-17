import React, { useEffect, useState } from 'react'
import CarCard from '../components/CarCard'
import axios from 'axios'

export default function Cars() {
    var [cars, setCars] = useState([])
    var [company, setCompany] = useState()

    useEffect(() => {
        fetchcars()

    }, [])
    function fetchcars() {
        axios.get("http://localhost:8123/cars").then(res => {

            setCars(res.data)
        })
    }
    function fetchcarscompany() {
        axios.get("http://localhost:8123/cars/" + company).then(res => {

            setCars(res.data)
        })
    }
    function handle(e) {
        e.preventDefault()
        fetchcarscompany()
    }
    return (
        <div>
            <h1 className='text-center display-5'>Car Collection</h1>
            <div className="container">
                <form className="d-flex" role="search" onSubmit={handle}>
                    <input onChange={(e) => setCompany(e.target.value)} value={company} className="form-control me-2" type="search" placeholder="Search by company" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>

            <div className='row justify-content-evenly mt-5'>

                {
                    cars.map((c, index) => {

                        return <CarCard imgnm={c.image} model={c.model} company={c.company} color={c.color} price={c.price} />
                    })
                }


            </div>

        </div>
    )
}
