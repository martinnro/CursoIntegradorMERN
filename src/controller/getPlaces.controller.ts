import placesData from '../data/places.json'
import { NextFunction, Request, Response, Router } from "express";
import { getPlaces } from '../services/place.service';

export async function getPlacesController(req:Request, res: Response, next: NextFunction) {

    try {
        const { tipo } = req.query
        const places = await getPlaces(tipo as string)
        res.status(200).json(places);
    } catch (error) {
        message: error
    }

}