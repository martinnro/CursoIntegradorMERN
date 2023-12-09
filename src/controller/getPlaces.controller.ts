import placesData from '../data/places.json'
import { Request, Response, Router } from "express";

export async function getPlacesController(req:Request, res: Response) {
    const tipo = req.query.tipo as string;
    let places = placesData;

    if (tipo) {
        places = placesData.filter((place) => place.tipo.includes(tipo));
    }
    res.status(200).json(places);
}