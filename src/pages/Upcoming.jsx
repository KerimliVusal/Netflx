import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'
import Film from '../components/Film'
import Pagination from '../components/Pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { Link } from 'react-router-dom';
import "swiper/css/navigation";
import { Navigation,Autoplay } from "swiper";
import { useDispatch } from 'react-redux'
function Upcoming() {
  let dispatch=useDispatch();
  const [movies,Setmovies]=useState([])
  const [Currentpage,SetCurrentpage]=useState(1)
  const [Totalpages,SetTotalpages]=useState(0)
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=19d5dcc0918f5300be53acc029f125ef&language=en-US&page=${Currentpage}`)
    .then(res=>res.data).then(res=>{
      SetTotalpages(res.total_pages);
      Setmovies(res.results);
      dispatch({type:"Page_changed",payload:Currentpage})
    }) 
  },[Currentpage])


  const scrolltop=()=>{
    window.scrollTo(0,0);
  }
  const PrevPage=(e)=>{
    e.preventDefault();
    if(Currentpage>1){
      SetCurrentpage(Currentpage-1);
    }
   scrolltop();  }

   const NextPage=(e)=>{
    e.preventDefault();
    if(Currentpage){
      SetCurrentpage(Currentpage+1);
    }
   scrolltop();  }

  const ChangePage=(e,number)=>{
    e.preventDefault();
    SetCurrentpage(number);
    console.log(Currentpage);
    scrolltop();
  }
  
  
  return (
    <div>
        <div className="container-fluid section-slider bg-light p-0">
      <Swiper 
      slidesPerView={2}
      navigation={true}
      loop={true}
      autoplay={{
      }}
    
      modules={[Navigation,Autoplay]}
      breakpoints={{
        768: {
          width: 768,
          slidesPerView: 3,
        },
        1024: {
          width: 1024,
          slidesPerView: 3,
        },
        1440: {
          width: 1440,
          slidesPerView: 3,
        },
        2560: {
          width: 2560,
          slidesPerView: 3,
        }
      }}
    >
        {
        movies.map((item,index)=>(
       <SwiperSlide className='h-100' key={item.id} >
         <Link to={"/Detail/"+item.id}> 
          <img className='w-100 h-100' src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}  />
         <div className='card-body'>
         <h4 className="card-title me-auto">{item.original_title.length>15? item.original_title.slice(0,15)+"...":item.original_title}</h4>
              <div className='d-flex justify-content-between'>
              <p style={{color:"#ffc107"}}><i className="fa-solid fa-star"></i> {item.vote_average}</p> 
              <p>{item.release_date.slice(0,4)}</p>
              </div>
         </div>
          </Link>
       </SwiperSlide>
        ))

        }          
    </Swiper>
      </div>
    <div className="container">
      <h1 className='text-center fw-bold py-4 mt-3'>Upcoming Movies</h1>
    <div className="row justify-content-around ">
    { movies&&
    movies.map((item,index)=>(
      <div className='col-md-3' key={index} >
      <Film item={item} />
      </div>
    ))
  }
    </div>
  </div>
  <Pagination NextPage={NextPage} PrevPage={PrevPage} Currentpage={Currentpage} Totalpages={Totalpages} ChangePage={ChangePage} />
</div>
  )
}

export default Upcoming