import React from 'react'
import {Link} from 'react-router-dom'
function Film({item}) {
  return (

          <Link to={"/Detail/"+item.id} className="card  my-3 bg-danger text-white position-relative">
            <img className='w-100 h-100 rounded' src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}  /> 
            <div className="card-body d-flex">
              <h5 className="card-title me-auto w-75">{item.original_title}</h5>
              <p style={{color:"#ffc107"}}><i className="fa-solid fa-star"></i> {item.vote_average}</p>    
            </div>
        </Link>

  )
}

export default Film