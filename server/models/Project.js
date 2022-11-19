import { Schema, model } from 'mongoose';

const projectSchema = new Schema(
  {
    client: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Client',
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['Not Started', 'In Progress', 'Completed'],
      required: true,
    },
  },
  { timestamps: true }
);

export default model('Project', projectSchema);
