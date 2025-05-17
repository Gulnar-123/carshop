import React from 'react'

export default function AccCard(props) {
    var em = localStorage.getItem("emailid")
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={"http://localhost:8123/" + props.imgnm} className="card-img-top" alt="..." style={{ height: '200px' }} />
            <div className="card-body">
                <h5 className="card-title">{props.company}</h5>
                <p className="card-text">{props.features}<br />{props.price}<br />{props.warrenty} warrenty </p>
                {em && <a href="#" className="btn btn-primary">Buy Now</a>}
            </div>
        </div>

    )
}
