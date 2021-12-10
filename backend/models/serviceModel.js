import mongoose from 'mongoose'

const serviceSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    thumnailImage : {
      type: String,
      required: true,
    },
    image : [String],
    keywords: [String],
    category: {
        type: String,
        required: true,
    },
    noOfTimesEdited : {
        type: Number,
    },
    noOfOrders: {
        type: Number
    },
    clicks: {
        type: Number
    },
    ratingsAndComments: [
        {
            rating: { type: Number },
            comment: { type: String },
            ratedBy: { type : mongoose.Schema.Types.ObjectId, ref: 'User' }
        }
    ],
    promotedPostPayments: {
        paymentMethod: {
          type: String,
          required: true,
        },
        paymentResult: {
          id: { type: String },
          status: { type: String },
          update_time: { type: String },
          email_address: { type: String },
        },
        isPaid: {
          type: Boolean,
          required: true,
          default: false,
        },
        paidAt: {
          type: Date,
        },
    }
  },
  {
    timestamps: true,
  }
)

const Service = mongoose.model('Services', serviceSchema)

export default Service
