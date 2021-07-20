import TransactionsComponent from './components/transactions/index';
import NavbarComponent from './components/global/navbar';
import {sortTransactions} from './components/transactions/transactionsReducer';

function App() {
  return (
    <>
    <NavbarComponent/>
    <TransactionsComponent transactionsList={sortTransactions()}/>
    </>
  );
}

export default App;
