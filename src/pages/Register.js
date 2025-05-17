import axios from 'axios'
import React, { useState } from 'react'

export default function Register() {
  var [name, setName] = useState('')
  var [contact, setContact] = useState('')
  var [email, setEmail] = useState('')
  var [password, setPassword] = useState('')
  var [errors, setErrors] = useState({})
  function handleSubmit(e) {
    e.preventDefault()
    var er = validate()

    if (Object.keys(er).length > 0) {
      setErrors(er)
      alert("Please provide valid data")
    }
    else {
      axios.post("http://localhost:8123/register", {
        name: name,
        contact: contact,
        email: email,
        password: password
      }).then((res) => {
        alert(res.data["message"])
        setName('')
        setContact('')
        setEmail('')
        setPassword('')
      })
    }
  }
  function validate() {
    var er = {}
    var dm = ""
    if (name === "") {
      er.name = "Name is required"
    }
    else if (!name.match(/^[a-zA-Z]+$/)) {
      er.name = "Name can contain alphabets only"

    }

    if (contact === "") {
      er.contact = "Contact is required"

    }
    else if (!contact.match(/^[6-9][0-9]{9}$/)) {
      er.contact = "Contact can contain only 10 digits"
    }
    if (email === "") {
      er.email = "Email is required"

    }
    if (password === "") {
      er.password = "password is required"
    }
    else if (!password.match(/^[a-zA-Z0-9!@#$%^&*]{8,15}$/)) {
      er.password = "password must contain 8-15 characters"
    }

    return er

  }

  return (
    <div className='container'>
      <h1 className='text-center display-5'>Register Here</h1>
      <form className='mt-4' onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nm" className="form-label">Name</label>
          <input type="text" className="form-control" id="nm" placeholder='Enter name here' name="nm" value={name} onChange={(e) => { setName(e.target.value) }} />
          {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="cn" className="form-label">Contact</label>
          <input type="number" className="form-control" id="cn" placeholder='Enter contact here' name="cn" value={contact} onChange={(e) => { setContact(e.target.value) }} />
          {errors.contact && <span style={{ color: 'red' }}>{errors.contact}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Enter email id here' name="em" value={email} onChange={(e) => { setEmail(e.target.value) }} />
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter password here' name='ps' value={password} onChange={(e) => { setPassword(e.target.value) }} />
          {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
        </div>

        <button type="submit" className="btn btn-primary">Submit</button> &nbsp;
        <button type="reset" className="btn btn-danger">Reset</button>
      </form>

    </div>
  )
}
