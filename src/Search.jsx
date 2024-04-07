import React, { useState } from 'react'
import Sresult from './Sresult';
const Search = () => {
    const[img, Setimg] = useState("");
    const inputevent = (event)=>{
        const data = event.target.value;
        console.log(data);
        Setimg(data);
    }
  return (
    <>
    <div className='searchbar'>
     <input type="text" className='ert' placeholder="search anything" value={img} onChange={inputevent} />
    <Sresult name = {img}/>
     </div>
    </>
  )
}

export default Search
