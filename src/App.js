import ExpenseDisplay from "./components/Expenses/ExpenseDisplay";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e2",
    title: "Toilet Paper",
    amount: 94.67,
    date: new Date(2021, 5, 28),
  },
  { id: "e3", title: "New TV", amount: 294.67, date: new Date(2021, 7, 28) },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 294.67,
    date: new Date(2021, 8, 28),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseDisplay expenses={expenses} />
    </div>
  );
};

export default App;
