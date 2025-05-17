import axios from 'axios'
import React, { useState } from 'react'

export default function MAccessories() {
  var [image, setImage] = useState({})
  var [features, setFeatures] = useState()

  var [company, setCompany] = useState()
  var [price, setPrice] = useState()
  var [warranty, setWarranty] = useState()
  function handleSubmit(e) {
    e.preventDefault()
    const fd = new FormData()
    fd.append("file", image)
    fd.append("features", features)
    fd.append("company", company)
    fd.append("price", price)
    fd.append("warrenty", warranty)

    axios.post('http://localhost:8123/addacc', fd, { headers: { 'Content-Type': 'multipart/form-data' } }).then((response) => {
      alert(response.data["message"])
    })
  }
  return (
    <div>
      <h1 className='text-center display-5'>Manage Accessories</h1>
      <form className='mt-4' method='post' onSubmit={handleSubmit} encType='multipart/form-data'>
        <div className="mb-3">
          <label htmlFor="cn" className="form-label">Select Image</label>
          <input type="file" className="form-control" id="cn" name="myfile" onChange={(e) => { setImage(e.target.files[0]) }} />
        </div>
        <div className="mb-3">
          <label htmlFor="color" className="form-label">Features</label>
          <input type="text" className="form-control" id="company" placeholder='Enter Features here' name="features" value={features} onChange={(e) => { setFeatures(e.target.value) }}></input>
        </div>
        <div className="mb-3">
          <label htmlFor="color" className="form-label">Company</label>
          <input type="text" className="form-control" id="features" placeholder='Enter Company here' name="company" value={company} onChange={(e) => { setCompany(e.target.value) }}></input>
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input type="number" className="form-control" id="warranty" placeholder='Enter Price' name='price' value={price} onChange={(e) => { setPrice(e.target.value) }} />
        </div>
        <div className="mb-3">
          <label htmlFor="model" className="form-label">warranty</label>
          <input type="text" className="form-control" id="warrenty" placeholder='Enter warranty here' name='warranty' value={warranty} onChange={(e) => { setWarranty(e.target.value) }} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button> &nbsp;
        <button type="reset" className="btn btn-danger">Reset</button>
      </form>
    </div>
  )
}
