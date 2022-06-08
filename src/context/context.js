import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":400,"category":"Shopping","type":"Expense","date":"2022-03-27","id":"4191a8fe-6c62-4493-9ed4-4a3d918ed42e"},{"amount":1000,"category":"Savings","type":"Income","date":"2022-03-27","id":"c02d910f-ae08-44f2-98cf-5b491baaf873"},{"amount":500,"category":"Bills","type":"Expense","date":"2022-03-27","id":"ff08f127-21c8-40e4-bb7d-2767e77d905a"},{"amount":500,"category":"Extra income","type":"Income","date":"2022-03-27","id":"8d59cc64-4b01-46f8-970f-a9bd38363abb"},{"amount":400,"category":"Savings","type":"Income","date":"2022-03-27","id":"c50a27b5-b9c0-491a-ba86-c4e5574e6b8e"},{"amount":100,"category":"Food","type":"Expense","date":"2022-03-30","id":"726ea559-6dc0-4e1c-a5ee-b27633a2ebe4"},{"amount":500,"category":"Salary","type":"Income","date":"2022-03-28","id":"bcc97800-b2cc-4dba-aadb-6c5498a399ba"}];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({children}) => {
   const [transactions, dispatch] = useReducer(contextReducer, initialState); 

   const deleteTransaction = (id) =>  dispatch({ type: 'DELETE_TRANSACTION', payload: id});
   const addTransaction = (transaction) =>  dispatch({ type: 'ADD_TRANSACTION', payload: transaction});
   
   const balance = transactions.reduce((acc, currVal) => currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount, 0);
    
   return (
        <ExpenseTrackerContext.Provider value={{ 
            deleteTransaction,
            addTransaction,
            transactions,
            balance,
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    );
};