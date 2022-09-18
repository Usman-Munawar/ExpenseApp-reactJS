import React from 'react';
// import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import NewExpenses from './components/NewExpenses/NewExpenses';
function App() {
  const expenses =[{ 
    title: "Bill",
    amount : 12,
    date: new Date(2021, 3, 23) 
  },
  {
   title: "TV",
   amount: 50,
   date: new Date(2021, 3, 24) 
  },
  {title: "Mutton",
  amount: 100, 
  date: new Date(2021, 3, 25)

  },
{
  title: "wooden box",
  amount: 150, 
  date: new Date(2021, 3, 26)
}]
const addExpenseDatahandler=(expense)=>{
  console.log('in App.js');
  console.log(expense);

}
  return ( 
  <div >
    <NewExpenses onAddExpense={addExpenseDatahandler}/>
    <Expenses items={expenses}/>
    </div>
  );
}

export default App;
