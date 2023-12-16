import mongoose from "mongoose";
import { IPlace } from "../interfaces/IPlaces";

const placeSchema = new mongoose.Schema<IPlace>({
    nombre: String,
    longitud: Number,
    latitud: Number, 
    url: String,
    descripcion: String,
    horario: String,
    telefono: String,
    tipo: [String]

})

export const Place = mongoose.model('Place', placeSchema)