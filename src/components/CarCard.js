import axios from 'axios'
import React, { useState } from 'react'

export default function CarCard(props) {
    var em = localStorage.getItem("emailid")
    var [qty, setQty] = useState(1)
    function add(model, company, color, qty, price, amount) {
        axios.post("http://localhost:8123/ccart", {
            email: em,
            company: company,
            color: color,
            model: model,
            price: price,
            quantity: qty,
            amount: amount
        }).then(rec => {
            alert("Car added to cart")
        })
    }
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={"http://localhost:8123/" + props.imgnm} className="card-img-top" alt="..." style={{ height: '200px' }} />
            <div className="card-body">
                <h5 className="card-title">{props.model}</h5>
                <p className="card-text">{props.company}<br />{props.color}<br />Price:{props.price} </p>
                Quantity
                <select onChange={(e) => { setQty(e.target.value) }}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <h5>Amount: {qty * props.price} </h5>

                {em && <a href="#" className="btn btn-primary" onClick={() => { add(props.model, props.company, props.color, qty, props.price, qty * props.price) }}>Add to Cart</a>}
            </div>
        </div>

    )
}
