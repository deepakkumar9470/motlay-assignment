
import Flight from '../models/Flight.js'


export const createBooking =async (req,res) =>{
  try {
    
     const newBooking = new Flight(req.body)
     await newBooking.save()
     res.status(201).json('Flight Booked Success..')
  } catch (error) {
    res.status(400).json(error)
  }
     
}



export const getBookings = async(req,res) =>{
  try {
    const getbookings = await Flight.find()
    res.status(200).json(getbookings)
    
  } catch (error) {
    res.status(400).json(error)
  }
}



export const getBookingById = async(req,res) =>{
  try {
    const singleBooking = await Flight.findById(req.params.id)
    res.status(200).json(singleBooking)

  } catch (error) {
    res.status(400).json(error)
  }
}


export const editBooking = async(req,res) =>{
  try {
    const editBooking = await Flight.findByIdAndUpdate(req.params.id, {$set : req.body}, {new :true})
    res.status(200).json('Flight updated success..')
  } catch (error) {
    res.status(400).json(error)
  }
}

export const deleteBooking = async(req,res) =>{
  try {
     await Flight.findByIdAndRemove(req.params.id)
     res.status(200).json('Flight has been deleted..')
  } catch (error) {
    res.status(400).json(error)
  }
}