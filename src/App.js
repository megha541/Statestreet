import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Transactions from './pages/transactions';
import TransactionDetails from './pages/transactionDetail';
import './App.css';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route component={Transactions} exact path="/" />
            <Route component={TransactionDetails} path="/:accountNumber" />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
