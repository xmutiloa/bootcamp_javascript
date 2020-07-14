import { history } from '../../core/router';
import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors } from '../../common/helpers';
import { setAccountOptions } from './transfer.helpers';
import { getAccountList } from '../account-list/account-list.api';
import { formValidation } from'./transfer.validations';
import { insertTransfer } from './transfer.api';

const params = history.getParams();

let transfer = {
    iban: '',
    name: '',
    amount: '',
    concept: '',
    notes: ''
};

getAccountList().then(accountList => {
    setAccountOptions(accountList, params.id);
});

onUpdateField('iban', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        iban: value
    }

    formValidation.validateField('iban', transfer.iban).then(result => {
        onSetError('iban', result);
    });
});

onUpdateField('name', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        name: value
    }

    formValidation.validateField('name', transfer.name).then(result => {
        onSetError('name', result);
    });
});

onUpdateField('amount', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        amount: value
    }

    formValidation.validateField('amount', transfer.amount).then(result => {
        onSetError('amount', result);
    });
});

onUpdateField('concept', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        concept: value
    }

    formValidation.validateField('concept', transfer.concept).then(result => {
        onSetError('concept', result);
    });
});

onUpdateField('notes', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        notes: value
    }

    formValidation.validateField('notes', transfer.notes).then(result => {
        onSetError('notes', result);
    });
});

onUpdateField('email', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        email: value
    }

    formValidation.validateField('email', transfer.email).then(result => {
        onSetError('email', result);
    });
});

onUpdateField('day', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        day: value
    }

    formValidation.validateField('day', transfer.day).then(result => {
        onSetError('date', result);
    });
});

onUpdateField('month', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        month: value
    }

    formValidation.validateField('month', transfer.month).then(result => {
        onSetError('date', result);
    });
});

onUpdateField('year', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        year: value
    }

    formValidation.validateField('year', transfer.year).then(result => {
        onSetError('date', result);
    });
});


onSubmitForm('transfer-button', () => {
    formValidation.validateForm(transfer).then(result => {
        onSetFormErrors(result);
        if(result.succeeded){
            insertTransfer(transfer).then(() => { history.back() });
        }
    });
});



