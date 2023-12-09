import placesData from '../data/places.json'
import { Request, Response, Router } from "express";

export async function createPlaceController (req:Request, res:Response) {
    const {id, nombre, longitud, latitud, url, descripcion, horario, telefono, tipo} = req.body;
    if(!id || nombre || longitud || latitud || url || descripcion || horario || telefono || tipo)(
        res.status(400).json({
            error: 'BAD_REQUEST_404',
            message: 'Debe mandar todos los parametros'
        })
    )
    res.status(200).json({
        status: 'OK'
    })
}