import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export function validatePlaceBody(req:Request, res:Response, next: NextFunction) {
    const {body}= req
    const schemma = Joi.object({
        nombre: Joi.string().required(),
        longitud: Joi.number().required(),
        latitud: Joi.number().required(),
        url: Joi.string().uri().required(),
        descripcion: Joi.string().required(),
        horario: Joi.string().required(),
        telefono: Joi.string().required(),
        tipo: Joi.array().items(Joi.string()).required(),
    })

    const {error, value} = schemma.validate(body)
    if(error ) {
        return res.status(400).json({
            message: error.details[0]
        })
    }
    next()
}