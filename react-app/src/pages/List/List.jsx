import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './list.css'
import { Link, useNavigate} from 'react-router-dom'

import axios from 'axios'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-hot-toast'
const List = () => {

  const [flights, setFlights] = useState([])
  const navigate = useNavigate()
  
  useEffect(() => {
    const fecthData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/flights`)
        console.log(res)
        setFlights(res.data)
      } catch (error) {

      }
    }
    fecthData()
  }, [])

const handleDelete = async (id) =>{
     try {
      await axios.delete(`http://localhost:5000/api/flights/${id}`)
      toast.error('Flight booking has been deleted')
      navigate('/')
     } catch (error) {
      console.log(error)
     }
}

  //seatSelection, mobile

  return (
    <div>
      <Navbar />
      {/* <Header type="list"/> */}

      <div className="listWrapper">



        <Table striped>
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Mobile No</th>
              <th>Seat No</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              flights?.map((elem, i) => (

                <tr key={elem._id}>
                  <td>{i}</td>
                  <td>{elem.mobile}</td>
                  <td>{elem.seatSelection}</td>
                  <td><Link className="link" to={`/edit/${elem._id}`}>Edit</Link></td>
                  <td><Button onClick={()=>handleDelete(elem._id)}>Delete</Button></td>
                </tr>


              ))
            }


          </tbody>
        </Table>

      </div>



    </div>
  )
}

export default List