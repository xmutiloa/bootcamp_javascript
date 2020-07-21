import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationSchema = {
    field: {
        title: [Validators.required],
        notes: [Validators.required],
        email: [Validators.required, Validators.email],
        phone: [Validators.required],
        price: [Validators.required],
        address: [Validators.required],
        city: [Validators.required],
        provinceId: [Validators.required],
        squareMeter: [Validators.required],
        rooms: [Validators.required],
        bathrooms: [Validators.required],
        locationUrl: [Validators.required],
    },
};

export const formValidation = createFormValidation(validationSchema);