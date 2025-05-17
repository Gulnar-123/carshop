import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { Radio, Rating } from '../components/RatingStyle'


export default function VFeedback() {
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

  return (


    <div className='container'>
      <h1 > Valuable Feedback</h1>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Email</th>


            <th>Message </th>


            <th>Rating</th>

          </tr>

        </thead>
        <tbody>
          {
            feedback.map((f, index) => {
              return <tr key={index}>
                <td>{f.email}</td>
                <td>{f.message}</td>
                <td>
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

                </td>
              </tr>
            })
          }

        </tbody>
      </table>

    </div>
  )
}
