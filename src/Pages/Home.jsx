import React from "react";
import { Link } from "react-router-dom";
 function Home() {
    return (
      <div>
      <h1>Micro-Service Website</h1>

      <Link to="add">Add Customer</Link>
      <br></br>
      <Link to="delete">Delete Customer </Link>
      <br></br>
      <Link to="update">Update Customer</Link>
      <br></br>
      <Link to="view">View Customer</Link>
    </div>
 
  );
}
export default Home;