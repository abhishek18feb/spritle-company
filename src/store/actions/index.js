import * as actionTypes from './actionTypes';

export const  addTransaction = (amount) => {
  return {
    type: actionTypes.ADD_TRANSACTION,
    amount:amount
  }
}

export const  subtractTransaction = (amount) => {
  return {
    type: actionTypes.SUBTRACT_TRANSACTION,
    amount:amount
  }
}