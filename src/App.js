import React from 'react';
import './App.css';
import ListTransaction from "./Transaction/ListTransaction";
import UpdateTransaction from "./Transaction/UpdateTransaction";

const  App = () => {
  return (
    <React.Fragment>
      <h3 className="expense-tracker">Expense Tracker - Basic</h3>
      <UpdateTransaction />
      <ListTransaction />
    </React.Fragment>
  );
}

export default App;
