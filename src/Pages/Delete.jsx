import React from 'react'
import axios from 'axios'

function Delete() {
    return (
        <div>
            <h1>Delete Customer</h1>

            <form onSubmit={async (v)=>{
      v.preventDefault()
      const data = new FormData(v.target)
      await axios.delete(`http://localhost:8000/apis/${data.get("id")}`)}
    }>
         <label>
          Delete by ID: 
        <input type="text" name="id" />
         </label>
        <input type="submit"  />
        </form>
        </div>   
    )
}

export default Delete