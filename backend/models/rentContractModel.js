import mongoose from 'mongoose'

const rentContractSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    rentedItem :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rent',
    },
    rentedBy : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    contractStatus : {
        type: String,
        required: true,
        default: 'Not Started'
    },
    price: {
        type: Number,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    paymentType: {
        type: String,
        required: true
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
  },
  {
    timestamps: true,
  }
)

const RentContract = mongoose.model('RentContract', rentContractSchema)

export default RentContract
