import {Routes,Route} from 'react-router-dom'
import Detail from './components/Detail';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import Popular from './pages/Popular';
import Trending from './pages/Trending';
import Upcoming from './pages/Upcoming';
import { css } from "@emotion/react";
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import RingLoader from "react-spinners/RingLoader";
function App() {
  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const [loading, setLoading] = useState(true);
let currentpage=useSelector(state=>state.currentPageReducer)
let location=useLocation();
useEffect(()=>{
  setLoading(true);
  setTimeout(()=>{
    setLoading(false)
  },2000);
},[location.pathname,currentpage])

  return (
    <>
    <div className={loading ? "sweet-loading bg-light position-absolute w-100 border":"d-none"}>
     <h3 className='text-danger introWord'>Created by Ulvi T. 😉</h3>
    <RingLoader   color={"#df1024"} loading={loading} css={override} size={180} />
      </div>
    <div className={loading? "d-none":"App"}>
      <Header/>
          <Routes>
            <Route path='/Netflix-movies' element={<LandingPage />}/>
            <Route path='/popular' element={<Popular />}/>
            <Route path='/topRated' element={<Trending />}/>
            <Route path='/upcoming' element={<Upcoming />}/>
            <Route path='/Detail/:id' element={<Detail/>}/>
          </Routes>

          <Footer/>
    </div>
    </>
  );
}

export default App;
