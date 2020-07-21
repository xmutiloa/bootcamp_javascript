import { history } from '../../core/router/history';
import { getProperty , getEquipments, insertContact} from './property-detail.api';
import { setPropertyValues } from './property-detail.helpers';
import { mapPropertyFromApiToViewModel, equipments } from './property-detail.mappers';
import { formValidation } from './property-detail.validations';
import { onUpdateField, onSubmitForm , onSetError, onSetFormErrors} from '../../common/helpers';


let property = {
    images: '',
    title: '',
    city: '',
    rooms: '',
    squareMeters: '',
    bathrooms: '',
    notes: '',
    mainFeatures: '',
    equipmentIds: '',
    locationUrl: ''
}

let contact = {
    email: '',
    message: ''
}

const params = history.getParams();
const hasId = Boolean(params.id);

if(hasId){

    Promise.all([getProperty(params.id), getEquipments()]).then(
        ([apiProperty, equipments]) => {
            property = mapPropertyFromApiToViewModel (apiProperty, equipments);
            setPropertyValues(property);
        }
    );
}

onUpdateField('email', event => {
    const value = event.target.value;
    
    contact = { 
        ...contact,
         email: value
    };

    formValidation.validateField('email', contact.email).then(result => {
        onSetError('email', result);
    });
});

onUpdateField('message', event => {
    const value = event.target.value;
    
    contact = { 
        ...contact,
         message: value
    };

    formValidation.validateField('message', contact.message).then(result => {
        onSetError('message', result);
    });
});

const onSave = () => insertContact(contact);

onSubmitForm('contact-button', () => {
    formValidation.validateForm(contact).then(result => {
        onSetFormErrors(result);
        if (result.succeeded) {
            onSave().then(apiAccount => {
                history.back();
            });
        }
    });
});