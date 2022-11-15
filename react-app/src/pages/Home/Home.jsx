import React from 'react'

import Featured from '../../components/Featured/Featured'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import PropertyList from '../../components/PropertyList/PropertyList'
import './home.css'


const Home = () => {

  return (
    <div>
       <Navbar/>
       <Header/>

       <div className="homeContainer">
          <Featured/>
          <h1 className='homeTitle'>Browse by flight types</h1>
          <PropertyList/>
          <Footer/>
       </div>
    </div>
  )
}

export default Home