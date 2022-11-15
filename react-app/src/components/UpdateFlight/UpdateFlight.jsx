
import { faBed, faCar, faPlane, faCalendar, faPerson } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState,useEffect } from 'react'
import axios from 'axios'
import './updateflight.css'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast'
const UpdateFlight = ({ type }) => {
const [inputs,setInputs] = useState({
    mobile : "",
    seatno:  ""
})
  const navigate = useNavigate()
  const {id} = useParams()
  console.log(id)

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  useEffect(() => {
    const fetchSingleFlight =async  () =>{
        try {
            const res = await axios.get(`http://localhost:5000/api/flights/${id}`);
            setInputs(res.data)
           
          } catch (error) {
            console.log(error)
    }
    fetchSingleFlight()
  }
 }, [id])
  
  
  const handleBookUpdate = async(e) =>{
    e.preventDefault()
        try {
          const res = await axios.put(`http://localhost:5000/api/flights/${id}`,inputs);
          console.log(res)
          setInputs(res.data)
          toast('Booking updated successfully')
          navigate('/')
        } catch (error) {
          
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
                <h2>Edit your flight here</h2>
                <form>
                    <div className="inputs">
                      <label htmlFor="mobile">Mobile No</label>
                      <input 
                         type="text"
                         value={inputs.mobileno}
                         name="mobile"
                         onChange={handleChange}
                         placeholder="Enter mobile no"/>
                    </div>
                    <div className="inputs">
                      <label htmlFor="seat">Select Seat No</label>
                      <input 
                         type="text"
                         value={inputs.seatno}
                         name="seatno"
                         onChange={handleChange}
                         placeholder="Enter seat no"/>
                    </div>
                    <button className='book_Btn' onCanPlay={handleBookUpdate}>Update</button>
                </form>
           </div>


      </div>

    </div>
  )
}

export default UpdateFlight