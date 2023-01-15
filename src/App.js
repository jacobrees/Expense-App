import ExpenseDisplay from './components/Expenses/ExpenseDisplay';
import NewExpense from './components/NewExpense/NewExpense'
import { useState } from 'react'

const DUMMY_EXPENSES = [
  { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
  { title: 'Toilet Paper', amount: 94.67, date: new Date(2021, 5, 28) },
  { title: 'New TV', amount: 294.67, date: new Date(2021, 7, 28) },
  { title: 'New Desk (Wooden)', amount: 294.67, date: new Date(2021, 8, 28) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  
  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpenseDisplay expenses={expenses} />
    </div>
  );
}

export default App;
