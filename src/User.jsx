import React from 'react'
import { useParams, useLocation , useNavigate } from 'react-router-dom';
//name same hona chahiye route path aur is component me. jo bhi pass kar rahe ho
const User = () => {
    const {fname, lname} =useParams();
    const location = useLocation();             //as we know location isa object..(console karwa kr bhi dekh liya iske andar properties h)
    const history = useNavigate();          //jis componenet se aye ho agr uspr vaps jana he to we use this hook and write history(-1)
    console.log(location)           //agr user ka name vinod he to he mujhe ek button dikhana he varna nahi
    console.log(history)
  return (
    <>
    <h1>user {fname} {lname} page</h1>
    <p>My current location is {location.pathname}</p>       
    {location.pathname === `/user/vinod/thapa` ?  <button onClick={()=>history(-1)}> you got this</button> : null}
    </>
  )
}

export default User
