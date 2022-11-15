import mongoose from 'mongoose'

const FlightSchema = mongoose.Schema({

  mobile: {type: Number},

  seatSelection : {
    type:  String
  },
  
  date : {
    type : Date, default : Date.now()
  }
 

}, {timestamps: true});

const Flight = mongoose.model('Flight', FlightSchema);

export default Flight