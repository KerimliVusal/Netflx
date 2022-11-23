import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios';
import Film from './Film';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";
function Similar({id}) {

  const [movies,Setmovies]=useState([])
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=19d5dcc0918f5300be53acc029f125ef&language=en-US`)
    .then(res=>res.data).then(res=>Setmovies(res.results)) 
  },[id])
  return (
    <div>
          <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        768: {
          width: 768,
          slidesPerView: 2,
        },
        1024: {
          width: 1024,
          slidesPerView: 3,
        }
      }}
      
    >
        {
        movies.filter(item=>item.id!==id).map((item,index)=>(
       <SwiperSlide key={item.id} >
         <Film item={item}/>  
       </SwiperSlide>
        ))

        }          
    </Swiper>
    </div>
  )
}

export default Similar