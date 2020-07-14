import { Validators, createFormValidation,  } from '@lemoncode/fonk';
import { ibanValidator } from './transfer.custom-validator';
    
const validationSchema = {
    field: {
        iban: [
            {
                validator: Validators.required,
                message: 'Campo requerido'
            },

            {
                validator: ibanValidator,
                customArgs: {
                  countryCode: 'ES',
                },
            },
        ],
        name: [
            {
                validator: Validators.required,
                message: 'Campo requerido'
            }
        ]
        ,
        amount: [
            {
                validator: Validators.required,
                message: 'Campo requerido'
            }
        ]
        ,
        concept: [
            {
                validator: Validators.required,
                message: 'Campo requerido'
            }
        ]
        ,
        notes: [
            {
                validator: Validators.required,
                message: 'Campo requerido'
            }
        ]
        ,
        email: [
            {
                validator: Validators.required,
                message: 'Campo requerido'
            },
            {
                validator: Validators.email,
                message: 'Email no válido'
            }
        ]
        ,
        day: [
            {
                validator: Validators.required,
                message: 'Campo requerido'
            }
        ]
        ,
        month: [
            {
                validator: Validators.required,
                message: 'Campo requerido'
            }
        ]
        ,
        year: [
            {
                validator: Validators.required,
                message: 'Campo requerido'
            }
        ]
    }
};

export const formValidation = createFormValidation(validationSchema);