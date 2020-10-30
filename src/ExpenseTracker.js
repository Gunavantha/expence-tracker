import React,{ Component }  from 'react';
import { Title } from './components/Title';
import { Balance } from './components/Balance';
import { IncomeAndExpenses } from './components/IncomeAndExpences';
import { History } from './components/History';
import { AddTransaction } from './components/AddTransaction';


export default class ExpenseTracker extends Component {


    render() {
        return ( 
        <div>
            <Title Title="Expence Tracker"/>
            <Balance />
            <IncomeAndExpenses />
            <History />
            <AddTransaction />
           {/* <h1>Expense Tracker</h1> */}
       </div>
        );
    }
}