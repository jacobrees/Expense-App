import ExpenseDisplay from './components/Expenses/ExpenseDisplay';

const App = () => {
  const expenses = [
    { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
    { title: 'Toilet Paper', amount: 94.67, date: new Date(2021, 5, 28) },
    { title: 'New TV', amount: 294.67, date: new Date(2021, 7, 28) },
    { title: 'New Desk (Wooden)', amount: 294.67, date: new Date(2021, 8, 28) },
  ];

  return (
    <div>
      <ExpenseDisplay expenses={expenses} />
    </div>
  );
}

export default App;
