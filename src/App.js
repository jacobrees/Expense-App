import ExpenseDisplay from './components/Expenses/ExpenseDisplay';
import NewExpense from './components/NewExpense/NewExpense'

const App = () => {
  const addExpenseHandler = (expense) => {
    console.log("in app.js")
    console.log(expense)
  };

  const expenses = [
    { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
    { title: 'Toilet Paper', amount: 94.67, date: new Date(2021, 5, 28) },
    { title: 'New TV', amount: 294.67, date: new Date(2021, 7, 28) },
    { title: 'New Desk (Wooden)', amount: 294.67, date: new Date(2021, 8, 28) },
  ];

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpenseDisplay expenses={expenses} />
    </div>
  );
}

export default App;
