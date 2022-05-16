import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
const CustomersList = () => {

    const [customers, setCustomers] = useState([]);


    const getData = async () => {
        const response = await axios.get(`http://localhost:8000/apis/getall`);
        setCustomers(response.data);
      };

      
      useEffect(() => {
        getData();
      }, []);

  return (
    <div> <h2> 
    Customer List goes here
        </h2> 
                {customers.map((e,i)=>{return <div><p>customer {i+1}</p>
                <li>Phone Number: {e.phoneNumber}</li>
                <li>Customer Name: {e.name}</li>
                <li>Customer Address: {e.address}</li> </div>})}
    </div>
    
  )
}

export default CustomersList