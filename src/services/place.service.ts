import { IPlace }  from "../interfaces/IPlaces";
import { Place } from "../models/places.model";

export async function getPlaces(tipo: string):
Promise<IPlace[]> {
    const query = tipo ? {tipo:tipo} : {}
    const places = await Place.find(query)
    return places
}

export async function createPlace(placesData: 
IPlace) {
    const place = new Place(placesData)
    return place.save()
}

export async function getPlaceById(id: string ) {
    const place = await Place.findById(id)
    return place?.toJSON()
}

export async function updatePlace(id: string, updateData:Partial<IPlace>): Promise<IPlace | null>{
    try {
        // Utiliza el método findOneAndUpdate para actualizar el lugar por ID
        const updatedPlace = await Place.findOneAndUpdate(
            { _id: id },
            { $set: updateData },
            { new: true } // Devuelve el documento actualizado
        );

        return updatedPlace;
    } catch (error) {
        console.error("Error al actualizar el lugar:", error);
        throw error;
    }
    
}

export async function deletePlace(id: string): Promise<IPlace | null>{
    try {
        // Utiliza el método findOneAndUpdate para actualizar el lugar por ID
        const deletePlace = await Place.findOneAndDelete(
            { _id: id },);

        return deletePlace;
    } catch (error) {
        console.error("Error al eliminar el lugar:", error);
        throw error;
    }
    
}