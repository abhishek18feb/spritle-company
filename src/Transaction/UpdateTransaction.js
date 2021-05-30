import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../store/actions';

const UpdateTransaction = () => {
  const dispatch = useDispatch();

  const balance = useSelector((state) => state.transaction.balance);
  const [amount, setAmount] = useState(0);

  const addTransactionHandler = () => {
    dispatch(actions.addTransaction(amount));
  };

  const removeTransactionHandler = () => {
    dispatch(actions.subtractTransaction(amount));
  };

  return (
    <React.Fragment>
      <div className="update-transaction">
        <p>Balance: {balance}</p>
        <input
          type="number"
          min="0"
          value={amount}
          onChange={(event) => setAmount(parseInt(event.target.value))}
        />
        <br />
        <button onClick={()=>addTransactionHandler()} key="add-transaction" disabled={isNaN(amount)?true:false}> Add</button>
        <button onClick={()=>removeTransactionHandler()} key="remove-transaction" disabled={parseInt(balance)>0?false:true}> Remove</button>
      </div>
    </React.Fragment>
  );
};

export default UpdateTransaction;
