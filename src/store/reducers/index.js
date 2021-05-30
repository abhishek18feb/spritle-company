import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState={
  balance:0,
  transactions:[]
}



const addTransaction = (state, action) => {
    let updatedTransaction = state.transactions;
    updatedTransaction.push({
      'timestamp':new Date().toISOString(),
      'amount': action.amount,
      'tranactionType':"Add"
    });
    let updatedBalance = state.balance+action.amount;
    return updateObject(state, {
      balance:updatedBalance,
      transactions:[...updatedTransaction]
    });
}

const subtractTransaction = (state, action) => {
  let updatedTransaction = state.transactions;
    updatedTransaction.push({
      'timestamp':new Date().toISOString(),
      'amount': action.amount,
      'tranactionType':"Remove"
    });
    let updatedBalance = state.balance-action.amount;
    return updateObject(state, {
      balance:updatedBalance,
      transactions:[...updatedTransaction]
    });
}


const reducer = (state=initialState, action)=>{
	switch (action.type){
		case actionTypes.ADD_TRANSACTION: return addTransaction(state, action)
    case actionTypes.SUBTRACT_TRANSACTION: return subtractTransaction(state, action)

    default: return state
	}
}

export default reducer;