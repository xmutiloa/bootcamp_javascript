import { history } from '../../core/router';
import { getAccountMovementsList } from './movements.api';
import { mapAccountMovementsListFromApiToViewModel } from './movements.mappers';
import { addMovementRows } from './movements.helpers'
import { onSetValues } from '../../common/helpers';
import { getAccount } from '../account/account.api';
import { mapAccountFromApiToViewModel } from '../account/account.mappers';

const params = history.getParams();

getAccount(params.id).then(apiAccount => {
    onSetValues(mapAccountFromApiToViewModel(apiAccount));
});

getAccountMovementsList().then(accountMovementsList => {
    const viewModelMovements = mapAccountMovementsListFromApiToViewModel(accountMovementsList)
        .filter(movement => movement.id === params.id);
    addMovementRows(viewModelMovements);
    onSetValues(viewModelMovements);
});