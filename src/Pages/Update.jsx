import React from 'react'
import axios from 'axios'

function Update() {
    return (
        <div>
            <h1>Update Customer</h1>

            <form onSubmit={async (v)=>{
      v.preventDefault()
      const data = new FormData(v.target)
      await axios.put(`http://localhost:8000/apis/${data.get("id")}`,{
        "phoneNumber":data.get("phoneNumber"),
        "name": data.get("name"),
        "address": data.get("address")
      })}
    }>
         <label>
          Update by ID: 
        <input type="text" name="id" />
         </label>
         <br></br>
         <label>
          Please enter the phone number: 
        <input type="text" name="phoneNumber" />
         </label>
        
<br></br>
        <label>
          Please enter the Name: 
        <input type="text" name="name" />
         </label>
        
<br></br>
        <label>
          Please enter the address: 
        <input type="text" name="address" />
         </label>
        <input type="submit"  />
        </form>
        </div>   
    )
}

export default Update