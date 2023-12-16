import placesData from '../data/places.json'
import { NextFunction, Request, Response, Router } from "express";
import { deletePlace, getPlaceById, updatePlace } from '../services/place.service';

/**
 * Actualiza un punto de interes pasando el ID del cual se quiere modificar.
 */
export async function deletePlaceByIdController(req:Request, res: Response, next: NextFunction) {

    try {
        const data = req.body
        const id = req.params.id
        const place = await deletePlace(id)
        if(!place) {
            res.status(404).json({
                info: `Place with ID ${id} not found`
            })
        }
        res.status(200).json(place);
    } catch (error) {
        message: error
    }

}