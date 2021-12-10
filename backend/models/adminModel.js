import mongoose from 'mongoose'

const complaintsSchema = mongoose.Schema(
    {
        message: { type: String },
        status: { type: String },
        adminMessage: { type: String }
    }, 
    { 
        timestamps: true 
    }
)

const feebackSchema = mongoose.Schema(
    {
        message: { type: String },
        status: { type: String },
        adminMessage: { type: String }
    }, 
    { 
        timestamps: true 
    }
)

const adminSchema = mongoose.Schema(
  {
    complaints: [complaintsSchema],
    feedback: [feebackSchema],
    inAppropriateWords: [String],
    websiteVisits: {
        type: Number
    },
    numberOfOrders: {
        type: Number
    },
    numberOfSocialShares: {
        type: Number
    }
  },
  {
    timestamps: true,
  }
)

const Admin = mongoose.model('AdminSchema', adminSchema)

export default Admin
