import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function VOrders() {
    var [orders, setOrders] = useState([])
    useEffect(() => {

        fetchorders()
    }, [])

    function fetchorders() {
        axios.get("http://localhost:8123/orders").then(res => {
            console.log(res.data)
            setOrders(res.data)
        })
    }

    return (


        <div className='container'>
            <h1 > Recent Orders</h1>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Email</th>


                        <th>Company </th>


                        <th>Model</th>

                        <th>Colour</th>

                        <th>Price</th>

                        <th>Quantity</th>

                        <th>Amount</th>

                    </tr>

                </thead>
                <tbody>
                    {
                        orders.map((f, index) => {
                            return <tr key={index}>
                                <td>{f.email}</td>
                                <td>{f.company}</td>
                                <td>
                                    {f.model} </td>
                                     <td>{f.color}</td>
                                      <td>{f.price}</td>
                                       <td>{f.quantity}</td>
                                        <td>{f.amount}</td>
                            </tr>
                        })
                    }

                </tbody>
            </table>

        </div>
    )

}
