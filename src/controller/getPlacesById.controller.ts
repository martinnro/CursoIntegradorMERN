import placesData from '../data/places.json'
import { NextFunction, Request, Response, Router } from "express";
import { getPlaceById } from '../services/place.service';

export async function getPlacesByIdController(req:Request, res: Response, next: NextFunction) {

    try {
        const id = req.params.id
        const place = await getPlaceById(id)
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