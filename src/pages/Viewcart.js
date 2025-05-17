import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Viewcart() {
  function confirm() {
    items.forEach((item) => {
      axios.post("http://localhost:8123/order", {
        email: em, company: item.company, color: item.color, model: item.model, price: item.price, quantity: item.quantity, amount: item.amount
      }).then(res => {

      })
    })

    axios.delete("http://localhost:8123/ccart/" + em).then(res => {

    })
    alert("Order placed")
    window.location = "/"
  }


  var [items, setItems] = useState([])
  var em = localStorage.getItem("emailid")
  useEffect(() => {
    fetchitems()
  }, [])
  function fetchitems() {
    axios.get("http://localhost:8123/viewcart/" + em).then(rec => {
      console.log(rec.data)
      setItems(rec.data)
    })
  }

  return (
    <div className='container'>
      <h1 className='text-center display-5'>Items In Cart</h1>
      <hr></hr>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Color</th>


            <th>Company </th>


            <th>Model</th>
            <th>Price</th>

            <th>Quantity</th>

            <th>Amount</th>

          </tr>

        </thead>
        <tbody>
          {
            items.map((item, index) => {
              return <tr>
                <td>{item.color}</td>
                <td>{item.company}</td>
                <td>{item.model}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.amount}</td>

              </tr>
            })
          }
        </tbody>
      </table>
      <input type='button' value={"Confirm order"} className='btn btn-primary' onClick={() => confirm()}></input>
    </div>
  )
}
