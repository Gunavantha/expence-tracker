import React from 'react';

export function Balance(props) {

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${props.balance}</h1>
    </>
  )
}