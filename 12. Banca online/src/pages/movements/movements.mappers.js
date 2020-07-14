export const mapAccountMovementsListFromApiToViewModel = (accountMovementsList) => {
    return accountMovementsList.map(accountMovement => mapAccountMovementFromApiToViewModel(accountMovement));
}

export const mapAccountMovementFromApiToViewModel = accountMovement => {
    return {
        id: accountMovement.accountId,
        transaction: new Date(accountMovement.transaction).toLocaleDateString(),
        realTransaction: new Date(accountMovement.realTransaction).toLocaleDateString(),
        description: accountMovement.description,
        amount: `${accountMovement.amount} €`,
        balance: `${accountMovement.balance} €`,
    };
};