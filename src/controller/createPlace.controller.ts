import placesData from '../data/places.json'
import { NextFunction, Request, Response, Router } from "express";
import { IPlace } from '../interfaces/IPlaces';
import { createPlace } from '../services/place.service';

export async function createPlaceController (req:Request, res:Response, 
next: NextFunction) {
    try {
        const { nombre, longitud, latitud, url, descripcion, horario, telefono, tipo} = req.body
        const placeData: IPlace = {nombre, longitud, latitud, url, descripcion, horario, telefono, tipo}
        const response = await createPlace(placeData)
        
        res.status(200).json(response)
    } catch (error) {
        message: error
    }
}