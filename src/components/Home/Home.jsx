import React, { useEffect } from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import 'aos/dist/aos.css';
import Aos from 'aos';

const Home = () => {
  useEffect(()=>{
    Aos.init({
      duration: 500,
      easing:'ease-in-out',
      once: false,
    })
  }, [])
  return (
    <div className='home'>
      <div className="home-nav" data-aos="fade-right">
        <Navbar />
      </div>
      <div className="home-section">
        <h1 className="clg-Head" data-aos="fade-up">
            Vizag's Best College
        </h1>
        <p className="clg-description" data-aos="fade-down">
        Sanketika Polytechnic College offers quality technical education, <br /> fostering innovation and excellence in a supportive learning environment
        </p>
        <button className="courses-offer" data-aos="fade-left">
            Courses We Offer
        </button>
      </div>
    </div>
  )
}

export default Home
