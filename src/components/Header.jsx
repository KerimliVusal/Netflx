import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../images/logo.svg'
import { useRef,useEffect,useState } from 'react'
import { useLocation } from 'react-router-dom'
function Header() {
  const [fixed,Setfixed]=useState(false)
  window.addEventListener("scroll",()=>{
    if(window.scrollY>200){
     Setfixed(true)
    }
    else{
     Setfixed(false)
    }
   })
  let nav=useRef();
const location = useLocation();
useEffect(() => {
 if( window.innerWidth<769){ 
    nav.current.classList.remove("show")
  }
}, [location]);
  return (
    
        <nav className={ fixed? "navbar navbar-expand-lg navbar-dark fixed-top":"navbar navbar-expand-lg navbar-dark"} >
        <div className="container px-2">
          <Link to={"/Netflix-movies"} className="navbar-brand" href="#"><img className='logo' src={logo} alt="" /></Link>
          <button className="navbar-toggler border-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  justify-content-end "  ref={nav} id="navbarTogglerDemo02">
            <ul className="navbar-nav mb-2 mb-lg-0 ">
              <li className="nav-item">
                <NavLink className="nav-link text-white" aria-current="page" to={"/Netflix-movies"}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" aria-current="page" to={"/popular"}>Popular Movies</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to={"/topRated"}>Top Rated Movies</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to={"/upcoming"}>Upcoming Movies</NavLink>
              </li>
            </ul>
          </div>
        </div>
    </nav>
    
  )
}

export default Header