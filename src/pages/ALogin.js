import axios from 'axios'
import React, { useState } from 'react'

export default function Login() {
    var [email, setEmail] = useState()
    var [password, setPassword] = useState()
    function handleSubmit(e) {
        e.preventDefault()
        axios.get("http://localhost:8123/alogin/" + email + "/" + password).then(res => {
            if (res.data.length > 0) {
                alert("Admin login successful")
                localStorage.setItem("aemailid", email)

                window.location = "/"
            }
            else {
                alert("Invalid email or password")
            }
        })
    }
    return (
        <div className='container'>
            <h1 className='text-center display-5'>Admin Login</h1>
            <form onSubmit={handleSubmit} className='mt-4' style={{ border: 'solid 1px grey', padding: '25px', borderRadius: '5px' }}>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Enter email id here' name="em" value={email} onChange={(e) => { setEmail(e.target.value) }} />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter password here' name="ps" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>

                <button type="submit" className="btn btn-primary">Login</button> &nbsp;
                <button type="reset" className="btn btn-danger">Reset</button>
            </form>

        </div>
    )
}
