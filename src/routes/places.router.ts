import { Request, Response, Router } from "express";
import placesData from '../data/places.json'
import { getPlacesController } from "../controller/getPlaces.controller";
import { getPlacesByIdController } from "../controller/getPlacesById.controller";
import { createPlaceController } from "../controller/createPlace.controller";
import { validatePlaceBody } from "../middlewares/validationMiddleware";
import { patchPlaceByIdController } from "../controller/patchPlaceById.controller";
import { deletePlaceByIdController } from "../controller/deletePlaceById.controller";

export const router = Router();

//basepath: places

router.get('/', getPlacesController)
router.get('/:id', getPlacesByIdController);
router.post('/', validatePlaceBody, createPlaceController);
router.patch('/:id', validatePlaceBody, patchPlaceByIdController);
router.delete('/:id', deletePlaceByIdController);

export default router
