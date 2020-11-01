import React from 'react';

export function IncomeAndExpenses(props) {

  return (
    <div class="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p id="money-plus" class="money plus">+${props.income}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p id="money-minus" class="money minus">-${props.expense}</p>
    </div>
  </div>

  )
  
}