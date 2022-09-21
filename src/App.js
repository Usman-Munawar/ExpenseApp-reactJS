import React, { useState } from "react";
// import './App.css';
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
const dummy_expenses = [
  {
    id:'e1',
    title: "Bill",
    amount: 12,
    date: new Date(2020, 3, 23),
  },
  {
    id:'e2',
    title: "TV",
    amount: 50,
    date: new Date(2022, 3, 24),
  },
  
  {
    id:'e3', title: "Mutton", amount: 100, date: new Date(2019, 3, 25) },
  {
    id:'e4',
    title: "wooden box",
    amount: 150,
    date: new Date(2021, 3, 26),
  },

];

function App() {
  const [expenses, setExpenses]= useState(dummy_expenses);
  const addExpenseDatahandler = (expense) => {
    setExpenses((prevExpenses)=> {
      return [expense, ...prevExpenses];
    })
  };
  return (
    <div>
      <NewExpenses onAddExpense={addExpenseDatahandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
