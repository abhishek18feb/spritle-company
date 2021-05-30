import React from 'react';
import { useSelector } from 'react-redux';

const ListTransaction = (props) => {
  const transactions = useSelector((state) => state.transaction.transactions);
  let transactionList = <p>No Transaction Found</p>;
  console.log(transactions)
  if (Array.isArray(transactions) && transactions.length) {
    transactionList = transactions.map((tranaction, index) => (
      <p key={index}>
        {tranaction.timestamp} - {tranaction.amount} -{' '}
        {tranaction.tranactionType}
      </p>
    ));
  }
  return (
    <React.Fragment>
      <div className="list-transaction">
        <h5>Transaction: </h5>
        {transactionList}
      </div>
    </React.Fragment>
  );
};

export default ListTransaction;
