import placesData from '../data/places.json'
import { Request, Response, Router } from "express";

export async function getPlacesByName (req:Request, res:Response) {
    const nombre = req.params.nombre;
    const place = placesData.find((place) => place.nombre === nombre)

    if(!place) {
        res.status(404).json({
            error: 'PLACE_NOT_FOUND',
            message: `El lugar ${nombre} no existe en la Base de Datos`
        })
    }
    res.status(200).json(place)
}