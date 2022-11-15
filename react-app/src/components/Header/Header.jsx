
import { faBed, faCar, faPlane, faCalendar, faPerson } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState,useEffect } from 'react'
import axios from 'axios'
import './header.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast'

const Header = ({ type }) => {
  const[mobile,setMobile] = useState('')
  const[seatno,setSeatNo] = useState('')
  const navigate = useNavigate()

  
  const handleBook = async(e) =>{
    e.preventDefault()
        try {
          const res = await axios.post('http://localhost:5000/api/flights',{
            mobile,
            seatno
          });
          toast.success(`Flight Booked with ${mobile} ${seatno}`)
          navigate('/flights')
        } catch (error) {
          console.log(error)
        }
  }

  return (
    <div className='header'>
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Plane</span>
          </div>



        </div>
 
         {type !== "list" &&
          <>
            <h1 className="headerTitle">A life of the day</h1>
            <p className="headerDesc">Book your favourite destination with cheap flights rate</p>
            <button className="headerBtn">Sig In / Register</button>

          </>}
          
          <div className="flightBookingWrapper">
                <h2>Book your flight here</h2>
                <form>
                    <div className="inputs">
                      <label htmlFor="mobile">Mobile No</label>
                      <input 
                         type="text"
                         value={mobile}
                         onChange={(e)=>setMobile(e.target.value)} 
                         placeholder="Enter mobile no"/>
                    </div>
                    <div className="inputs">
                      <label htmlFor="seat">Select Seat No</label>
                      <input 
                         type="text"
                         value={seatno}
                         onChange={(e)=>setSeatNo(e.target.value)}
                         placeholder="Enter seat no"/>
                    </div>
                    <button  className='book_Btn' onClick={handleBook}>Book Now</button>
                </form>
           </div>


      </div>

    </div>
  )
}

export default Header