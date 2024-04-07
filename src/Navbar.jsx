import React from "react";
import { NavLink } from 'react-router-dom';

const Navbar = ()=>{
    return (
        <>  
            {/* <Link to='/'>React About us</Link>
            <Link to = '/contact'>React Contactt us</Link> */}

            {/* but we use Navlink so that hum css de sake ispr */}
            <div className="nav">
            <NavLink  activeclassname = "active_class" to='/'>About us</NavLink>
            <NavLink activeclassname = "active_class" to = '/contact'>Contact us</NavLink>
            <NavLink activeclassname = "active_class" to = '/search'>search</NavLink>
            <NavLink activeclassname = "active_class" to = '/user'>User</NavLink>
                <br></br>
                </div>   
        </> 
    )
}
export default Navbar;