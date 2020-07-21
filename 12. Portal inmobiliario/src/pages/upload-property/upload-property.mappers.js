export const mapAccountFromViewModelToApi = property =>{
    return {
        ...property,
        price: parseFloat(property.price),
        saleTypeIds: property.saleTypes,
        squareMeter: parseFloat(property.squareMeter),
        rooms: parseInt(property.rooms),
        bathrooms: parseInt(property.bathrooms)
    };
}