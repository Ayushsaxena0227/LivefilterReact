import React from "react"
import {Route, Routes} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
// import Error from "./Error";
import Navbar from "./Navbar";  
import User from "./User";
import Search  from "./Search";


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<About/>}/>     
      <Route exact path="/search" element={<Search/>}/>     
      <Route path="/contact" element={<Contact/>}/>
      <Route path ="/user/:fname/:lname" element = {<User/>}/>
      {/* <Route path="*" element={<Error />} /> */}
    </Routes>
    </>
  )
}

export default App;
