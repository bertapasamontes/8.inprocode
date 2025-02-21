import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const placesSchema = new Schema({
  // id: {type: Number, unique:true},
  name: { type: String, required: true },
  direction: { type: String, required: false },
  place_name: { type: String, required: false },
  coordinates: { type: String, required: true, unique: true },
  center: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: Date,
  updatedAt: Date,
    
});
export const SitioNuevo = mongoose.model('sitiosDeMichi', placesSchema); //este User es el que le da nombre a la subcarpeta de mongoDB
export default SitioNuevo;