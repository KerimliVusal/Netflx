import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Similar from './Similar';
function Detail() {
  let {id}=useParams();
  const [film,Setfilm]=useState({})
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=19d5dcc0918f5300be53acc029f125ef&language=en-US`)
    .then(res=>res.data).then(res=>Setfilm(res)) 
    window.scrollTo(0,0);
  },[id])
  return (
    <div>
      <div className='container-fluid backDrop'>
      <img className='w-100' src={`https://image.tmdb.org/t/p/original/${film.backdrop_path}`}  /> 
      </div>
      <div className='container py-5 '>
      <div className="row Details">
        <div className="col-lg-6 detail-img  text-center p-0">
        <img className='w-75  h-75 rounded' style={{objectFit:"cover"}} src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}  /> 
        </div>
        <div className="col-lg-6 px-3">
        <h1 className='display-4 fw-bold'>
          {
            film.original_title
          }
        </h1>
        <p style={{color:"#ffc107"}}>
            <i className="fa-solid fa-star"></i>IMDb: {film.vote_average} ({film.vote_count} vote)
        </p>
        <div>
        <p>
        <i className="fa-solid fa-calendar-days"></i> Release Date :  {film.release_date}
        </p>
        <p><i className="fa-solid fa-bookmark"></i> Genres : 
          { film.genres&&
            film.genres.map((type,index)=>(
              <span key={index} className='mx-1 d-inline-block'>{type.name},</span>
            ))
          }
        </p>
        <p>
        <i className="fa-solid fa-clock"></i> Duration: {film.runtime} minute
        </p>
        <p><span className='fw-bold d-block d-md-inline'><i className="fa-solid fa-building"></i> Production Companies :</span> {
          film.production_companies&&
              film.production_companies.map(company=>(
                <span key={company.id} className='mx-1 d-inline-block'>{company.name},</span>
              ))
            }</p>
        <p>
        <span className='fw-bold d-block d-md-inline'> <i className="fa-solid fa-book"></i>   Overview :</span>  {film.overview}
        </p>
        </div>
        </div>
    </div>
    <div className="row p-0">
      <h1 className='text-center display-3 fw-bold py-2'>Similar Movies</h1>
      <Similar id={id}/>
    </div>
    </div>
    </div>
  )
}

export default Detail