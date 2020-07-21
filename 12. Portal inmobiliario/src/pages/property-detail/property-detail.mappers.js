import { getRoomWord } from '../property-list/property-list.mapper';

export const mapPropertyFromApiToViewModel = (property, equipments) => ({
    mainImage: Array.isArray(property.images) ? property.images[0] : '',
    price: `${property.price.toLocaleString()} €`,
    title: property.title,
    rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
    squareMeter: `${property.squareMeter}m2`,
    bathrooms: `${property.bathrooms} ${getBathroomWord(property.bathrooms)}`,
    notes: property.notes,
    mainFeatures: property.mainFeatures,
    equipments: mapEquipments(property.equipmentIds, equipments),
    locationUrl: property.locationUrl,
    images: property.images
});

const getBathroomWord = bathrooms => {
    return bathrooms > 1 ? "baños" : "baño";
}

const mapEquipments = (equipmentsIds, equipmentsList) =>{
    return equipmentsIds.map(equipmentId => {
        const item = equipmentsList.find(equipmentItem => equipmentId === equipmentItem.id)
        return item.name;
    });
}