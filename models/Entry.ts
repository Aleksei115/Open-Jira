import mongoose, { Model, Schema} from "mongoose";
import { EntryStatus, Entry } from '../interfaces/entry';

export interface IEntry extends Entry {}

const entrySchema = new Schema({
    description: { type: String, required: true},
    createdAt: { type: Number },
    status: { 
        type: String, 
        enum: { 
            values: ['pending','in-progress', 'finished'],
            message: '{VALUE} no es un estado permitido'
        },
        default: 'pending'
    }
})

const EntryModel: Model<IEntry> = mongoose.models.Entries || mongoose.model('Entries', entrySchema)

export default EntryModel