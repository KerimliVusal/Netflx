import React from 'react'
import Tv from '../images/tv.png'
import profileKid from '../images/profileKid.png'
import laptop from '../images/Laptop.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Film from '../components/Film';
import { useEffect,useState } from 'react'
import axios from 'axios';
function LandingPage() {
  const [movies,Setmovies]=useState([])
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=19d5dcc0918f5300be53acc029f125ef&language=en-US&page=1`)
    .then(res=>res.data).then(res=>{
      Setmovies(res.results);
    })
  },[]);
  return (
   <div className='text-white'>
      <section className='container-fluid Main-section text-white borderY'>
      <div className="row justify-content-center">
        <div className="col-md-9 col-lg-8 text-center">
        <h1 className='display-3 fw-bold Hero-Title'>Unlimited movies, TV shows, and more.</h1>
        <h3 className='my-3 hero-text'>Watch anywhere. Cancel anytime.</h3>
        <h4 className='hero-text'>Ready to watch? Enter your email to create or restart your membership.</h4>

        <div className=' d-flex justify-content-center'>
        <div className="mt-3 inputGroup">
           <input type="text" className="form-control w-100 h-100" placeholder="Email address" aria-label="Recipient's username" aria-describedby="button-addon2"/>
           <button className="btn btn-danger" type="button" id="button-addon2">GET STARTED</button>
       </div>
        </div>
        </div>
      </div>
    </section>
    <section className='borderY'>
      <div className="container py-70 d-flex justify-content-center">
        <div className="row w-100 ">
          <div className="col-md-6 Tv-text px-2">
            <h1 className='display-4 fw-bold mb-4'>Enjoy on your TV.</h1>
            <h3 className=' mb-4'>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
            </h3>
          </div>
          <div className="col-md-6 TvColumn" >
            <img src={Tv} className="w-75" alt="" />
            <video className='TVvideo' autoPlay muted loop src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"></video>
          </div>

        </div>
      </div>
    </section>
    <section className='borderY'>
      <div className="container py-70 d-flex justify-content-center">
        <div className="row w-100">
          <div className="col-md-6 TvColumn order-2 order-md-1 ">
            <img className='w-75' src={profileKid} alt="" />
          </div>
          <div className="col-md-6 Tv-text order-1 order-md-2">
          <h1 className='display-4 fw-bold mb-4'>Create profiles for kids.</h1>
            <h3 className=' mb-4'>
            Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
            </h3>
          </div>
        </div>
      </div>
    </section>

    <section className='borderY'>
      <div className="container py-70 d-flex justify-content-center">
        <div className="row w-100">
        <div className="col-md-6 Tv-text px-2">
            <h1 className='display-4 fw-bold mb-4'>Watch everywhere.</h1>
            <h3 className=' mb-4'>
            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.
            </h3>
          </div>
          <div className="col-md-6 TvColumn" >
            <img src={laptop} className="w-100" alt="" />
            <video className='Laptopvideo' autoPlay muted loop src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"></video>
          </div>
        </div>
      </div>
    </section>

    <section className='borderY'>
      <div className="container">
        <div className="row">
        <h1 className='text-center display-4 fw-bold py-4 mt-3'>Popular Movies</h1>

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
        movies.map((item,index)=>(
       <SwiperSlide key={index} >
         <Film item={item}/>  
       </SwiperSlide>
        ))

        }          
      
    </Swiper>

        </div>
      </div>
    </section>
   </div>
  )
}

export default LandingPage