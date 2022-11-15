import express from "express";
const router = express.Router()

import { createBooking,getBookings,getBookingById,editBooking,deleteBooking } from '../controllers/flightController.js'

import { isAdmin } from "../middleware/auth-middleware.js";



// @ /api/flights
router.post('/', createBooking)

// @ /api/flights
router.get('/', getBookings)


// @ /api/flights/123
router.get('/:id', getBookingById)

// @ /api/flights/123
router.put('/:id', editBooking)

// @ /api/flights/123
router.delete('/:id', deleteBooking)


export default router