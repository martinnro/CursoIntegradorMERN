import { Request, Response, Router } from "express";
import placesData from '../data/places.json'
import { getPlacesController } from "../controller/getPlaces.controller";
import { getPlacesByName } from "../controller/getPlacesByName.controller";
import { createPlaceController } from "../controller/createPlace.controller";

export const router = Router();

//basepath: places

router.get('/', getPlacesController)
router.get('/:nombre', getPlacesByName);
router.post('/', createPlaceController);

export default router
