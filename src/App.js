
import './App.css';
//import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Add from "./Pages/Add"
import Delete from "./Pages/Delete"
import Update from "./Pages/Update"
import View from "./Pages/View"

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="add" element={ <Add/> } />
        <Route path="delete" element={ <Delete/> } />
        <Route path="update" element={ <Update/> } />
        <Route path="view" element={ <View/> } />
      </Routes>
    </div>
  )
}

export default App;
