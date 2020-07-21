import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors, onAddFile } from '../../common/helpers';
import { getSaleTypeList, getProvinceList , getEquipmentsList, insertProperty } from './update-property.api';
import { setCheckboxList, setOptionList, onAddFeature, formatDeleteFeatureButtonId, formatCheckboxId, onRemoveFeature, onAddImage } from './upload-property.helpers';
import { formValidation } from './update-property.validations';
import { mapAccountFromViewModelToApi } from './upload-property.mappers'

let property = {
    title: '',
    notes: '',
    email: '',
    phone: '',
    price: '',
    saleTypes: [],
    address: '',
    city: '',
    provinceId: '',
    squareMeter: '',
    rooms: '',
    bathrooms: '',
    locationUrl: '',
    mainFeatures: '',
    equipmentIds: [],
    images: ''
}

const addElement = (value, id) => {
    return {...property, [id]: [...property[id], value]}
};

const removeElement = (value, id) => {
    return { ...property, [id]: property[id].filter(el => el !== value)}
};

const setEvents = (list, ID) => {
    list.forEach(el => {
        const id = formatCheckboxId(el);
        onUpdateField(id, event => {
            const isChecked = event.target.checked;
            const value = event.target.value;
            if(isChecked)
                property = addElement(value, ID);
            else
                property = removeElement(value, ID);
        })
    })
}


Promise.all([getSaleTypeList(), getProvinceList(), getEquipmentsList()]).then(
    ([saleTypeList, provinceList, equipmentsList]) => {
        setOptionList(provinceList, 'province');
        setCheckboxList(saleTypeList, 'saleTypes');
        setCheckboxList(equipmentsList, 'equipments');
        setEvents(saleTypeList, 'saleTypes');
        setEvents(equipmentsList, 'equipmentIds');
    }
);

onUpdateField('title', event => {
    const value = event.target.value;
    
    property = { 
        ...property,
         title: value
    };

    formValidation.validateField('title', property.title).then(result => {
        onSetError('title', result);
    });
});

onUpdateField('notes', event => {
    const value = event.target.value;
    
    property = { 
        ...property,
         notes: value
    };

    formValidation.validateField('notes', property.notes).then(result => {
        onSetError('notes', result);
    });
});

onUpdateField('email', event => {
    const value = event.target.value;
    
    property = { 
        ...property,
         email: value
    };

    formValidation.validateField('email', property.email).then(result => {
        onSetError('email', result);
    });
});

onUpdateField('phone', event => {
    const value = event.target.value;
    
    property = { 
        ...property,
         phone: value
    };

    formValidation.validateField('phone', property.phone).then(result => {
        onSetError('phone', result);
    });
});

onUpdateField('price', event => {
    const value = event.target.value;
    
    property = { 
        ...property,
         price: value
    };

    formValidation.validateField('price', property.price).then(result => {
        onSetError('price', result);
    });
});

onUpdateField('address', event => {
    const value = event.target.value;
    
    property = { 
        ...property,
         address: value
    };

    formValidation.validateField('address', property.address).then(result => {
        onSetError('address', result);
    });
});

onUpdateField('city', event => {
    const value = event.target.value;
    
    property = { 
        ...property,
         city: value
    };

    formValidation.validateField('city', property.city).then(result => {
        onSetError('city', result);
    });
});

onUpdateField('province', event => {
    const value = event.target.value;
    
    property = { 
        ...property,
         provinceId: value
    };

    formValidation.validateField('province', property.provinceId).then(result => {
        onSetError('province', result);
    });
});

onUpdateField('squareMeter', event => {
    const value = event.target.value;
    
    property = { 
        ...property,
         squareMeter: value
    };

    formValidation.validateField('squareMeter', property.squareMeter).then(result => {
        onSetError('squareMeter', result);
    });
});

onUpdateField('rooms', event => {
    const value = event.target.value;
    
    property = { 
        ...property,
         rooms: value
    };

    formValidation.validateField('rooms', property.rooms).then(result => {
        onSetError('rooms', result);
    });
});

onUpdateField('bathrooms', event => {
    const value = event.target.value;
    
    property = { 
        ...property,
         bathrooms: value
    };

    formValidation.validateField('bathrooms', property.bathrooms).then(result => {
        onSetError('bathrooms', result);
    });
});

onUpdateField('locationUrl', event => {
    const value = event.target.value;
    
    property = { 
        ...property,
         locationUrl: value
    };

    formValidation.validateField('locationUrl', property.locationUrl).then(result => {
        onSetError('locationUrl', result);
    });
});

onAddFile('add-image', value =>{
    onAddImage(value);
    property = addElement(value, 'images');
})

onSubmitForm('insert-feature-button', () => {
    const feature = document.getElementById('newFeature').value;
    if(feature){
        const deleteFeatureButtonId = formatDeleteFeatureButtonId(feature);
        property = addElement(feature, 'mainFeatures');
        onAddFeature(feature);
        onSubmitForm (deleteFeatureButtonId, () => {
            onRemoveFeature(feature);
            property = removeElement(feature, 'mainFeatures');
        })
    }
})

onSubmitForm('save-button', () => {
    formValidation.validateForm(property).then(result => {
        onSetFormErrors(result);
        if (result.succeeded) {
            const apiProperty = mapAccountFromViewModelToApi(property);
            insertProperty(apiProperty).then(apiProperty => {
                history.back();
            });
        }
    });
});