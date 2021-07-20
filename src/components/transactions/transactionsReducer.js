import data from '../../mock-data.json';

export const sortTransactions = () => {
    const transactionsList = {
        totalRewards: 0,
        rewardsExpiration: 'May 31, 2021',
        transactions: []
    }
    // calculate total rewards and transactions for each month
    data.forEach(yr => {
        yr.monthlyTransactions.length !== 0 && yr.monthlyTransactions.forEach(transaction => {
            transaction['totalRewards'] = transaction.orderHistory.reduce((acc, curr) => acc + curr.rewards, 0);
            transaction['totalTransactions'] = transaction.orderHistory.length;
        });
        yr.totalRewards = yr.monthlyTransactions.reduce((acc, curr) => acc + curr.totalRewards, 0);
    });
    // combine overall reward points from each year
    transactionsList['totalRewards'] = data.reduce((acc, curr) => acc + curr.totalRewards, 0);
    
    transactionsList['transactions'] = data;
    return transactionsList;
}
