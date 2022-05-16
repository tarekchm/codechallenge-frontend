import React from "react";
import axios from 'axios'
 function Add() {
    return (
    <form onSubmit={async (v)=>{
      v.preventDefault()
      const data = new FormData(v.target)
      await axios.post(`http://localhost:8000/apis/addCustomer`,{
      "phoneNumber":data.get("phoneNumber"),
      "name": data.get("name"),
      "address": data.get("address")
    })}
    }>
        
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
        <input type="submit" value="Add" />
     
    </form>
  );
}
export default Add