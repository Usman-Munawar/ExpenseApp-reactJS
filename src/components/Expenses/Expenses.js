import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filterExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeHandler={filterChangeHandler}
        />
        <ExpensesChart expenses={filterExpense} />
        <ExpensesList expenses={filterExpense} 
        items={filterExpense}
        /> 
      </Card>
    </div>
  );
};
export default Expenses;
