import ExpensesList from "./ExpensesList"
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import Card from "../UI/Card";
import "./ExpenseDisplay.css";
import ExpensesChart from "./ExpensesChart"

const ExpenseDisplay = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });



  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList expenses={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default ExpenseDisplay;
