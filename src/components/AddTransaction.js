import React, {useState} from 'react';



export  function AddTransaction(props) {
  const [reason, setReason] = useState(null);
  const [amount, setAmount] = useState(null);
return (
    <>
        <h3>Add new transaction</h3>
      <form id="form" onSubmit={(e)=>{e.preventDefault();props.addTransaction(reason,amount);setReason(null);setAmount(null)}}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" required id="text" value={reason} onChange={(e) => setReason(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" required value={amount}  id="amount" onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
      
    </>
  )
  }