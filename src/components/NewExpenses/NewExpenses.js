import React, { useState } from "react";
import ExpensesForm from "./ExpensesForm";
import "./NewExpenses.css";

const NewExpenses = (props) => {
  const [editing, setEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setEditing(true);
  };
  const stopEditingHandler = () =>{
    setEditing(false);

  }

  return (
    <div className="new-expense">
      {!editing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {editing && <ExpensesForm onSaveExpenseData={saveExpenseDataHandler}  onCancel={stopEditingHandler}/>}
    </div>
  );
};

export default NewExpenses;
