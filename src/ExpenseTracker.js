import React,{ useEffect, useState }  from 'react';
import { Title } from './components/Title';
import { Balance } from './components/Balance';
import { IncomeAndExpenses } from './components/IncomeAndExpences';
import { History } from './components/History';
import { AddTransaction } from './components/AddTransaction';


export default function ExpenseTracker() {

    const [balance,setBalance]=useState(0);
    const [income,setIncome]=useState(0);
    const [expense,setExpense] = useState(0);
    
    const initialTransactions =
    JSON.parse(localStorage.getItem("transactions")) || [];
  const [transactions, setTransactions] = useState(initialTransactions);



    const addTransaction =(reason,amount)=> {
        const transactionItem = {
            reason :reason,
            amount:Number(amount)
        }
        setTransactions([...transactions, transactionItem]);
        document.getElementById("text").value = null;
        document.getElementById("amount").value = null;

        console.log(transactionItem);
    }

    const deleteTransaction = (index) => {
        const newTransactions = [...transactions];
        newTransactions.splice(index, 1);
        setTransactions(newTransactions);
      };

    useEffect(() => {
        let income = 0;
        let expense = 0;
        let balance = 0;
        transactions.map((transaction) => {
          if (transaction.amount > 0) {
            income = income + transaction.amount;
          } else {
            expense = expense + transaction.amount;
          }
        });
        balance = income - Math.abs(expense);
        localStorage.setItem("transactions", JSON.stringify(transactions));
        setIncome(Math.abs(income));
        setExpense(Math.abs(expense));
        setBalance(balance);
      }, [transactions]);

        return ( 
        <div>
            <Title Title="Expence Tracker"/>
            <Balance  balance={balance.toFixed(2)}/>
            <IncomeAndExpenses income={income.toFixed(2)} expense={expense.toFixed(2)} />
            <History transactions={transactions} deleteTransaction={deleteTransaction}  />
            <AddTransaction addTransaction={addTransaction} />
           {/* <h1>Expense Tracker</h1> */}
       </div>
        );
    
}