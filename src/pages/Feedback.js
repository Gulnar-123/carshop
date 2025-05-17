import React, { useEffect, useState } from 'react'

import Rate from '../components/Rating'
import axios from 'axios'
import { Radio, Rating } from '../components/RatingStyle'
import { FaStar } from 'react-icons/fa'

export default function Feedback() {
  var [msg, setMsg] = useState()
  var em = localStorage.getItem("emailid")
  var [feedback, setFeedback] = useState([])
  useEffect(() => {

    fetchfeedback()
  }, [])

  function fetchfeedback() {
    axios.get("http://localhost:8123/feedback").then(res => {
      console.log(res.data)
      setFeedback(res.data)
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    axios.post("http://localhost:8123/feedback", {
      email: localStorage.getItem("emailid"),
      message: msg,
      rating: localStorage.getItem("rating")
    }).then((res) => {

      alert("Thank you for feedback")
    })
  }
  return (
    <div className='container'>
      <h1 className='text-center display-5'>Valuable Feedback</h1>

      {
        feedback.map((f, index) => {
          return <div style={{ borderBottom: 'solid grey 2px' }} key={index}>
            <p>{f.email}</p>
            <p>{f.message}</p>
            <p>


              {[...Array(5)].map((item, index) => {
                const givenRating = index + 1;
                return (
                  <label>
                    <Radio
                      type="radio"
                      value={givenRating}

                    />
                    <Rating>
                      <FaStar
                        color={
                          givenRating < f.rating || givenRating === f.rating
                            ? "rgb(245, 201, 78)"
                            : "rgb(192, 192, 192)"
                        }
                      />
                    </Rating>
                  </label>
                );

              })}
            </p>

          </div>
        })
      }


      {em && <form onSubmit={handleSubmit}>
        <div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" value={msg} rows={3} defaultValue={""} onChange={(e) => setMsg(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Ratings</label>
            <Rate />
          </div>
        </div>
        <input type='submit' value={"submit"} className='btn btn-primary'></input>
      </form>
      }

    </div >
  )
}
