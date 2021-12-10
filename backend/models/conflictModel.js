import mongoose from 'mongoose'

const conflictEvidence = mongoose.Schema(
  {
    message: { type: String },
    sentBy: {
    name: { type: String },
    id: { type: mongoose.Schema.Types.ObjectId }
    }
  }, 
  { 
      timestamps: true 
  }
)
const conflictSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    conflictType:{
        type: String,
        required: true,
    },
    serviceOrder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order',
    },
    rentContract: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RentContract',
      },
    conflictStatus: {
      type: String,
      required: true,
      default: 'InProgress',
    },
    conflictEvidence: [conflictEvidence],
    conflictCreatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
  },
  {
    timestamps: true,
  }
)

const Conflict = mongoose.model('Conflicts', conflictSchema)

export default Conflict
