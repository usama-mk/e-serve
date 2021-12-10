import mongoose from 'mongoose'

const CommunityServiceSchema = mongoose.Schema(
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
    location: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    available: {
        type: Boolean,
        required: true,
        default: true
    },
    collectedBy : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdBy : {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true,
  }
)

const CommunityService = mongoose.model('CommunityService', CommunityServiceSchema)

export default CommunityService
