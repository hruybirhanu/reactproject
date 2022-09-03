
import ExpenseItem from './component/ExpenseItem';
import logo from './logo.svg';
import './App.css';

function App() {
  const Expenses=[
    {title:'car insurance',amount:297.89,date:new Date(2022,2,28)},
    {title:'new tv',amount:29.89,date:new Date(2022,2,28)},
    {title:'toilet',amount:997.89,date:new Date(2022,2,28)}
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ExpenseItem title={Expenses[0].title} 
        amount={Expenses[0].amount} 
        date={Expenses[0].date}></ExpenseItem>
        <ExpenseItem title={Expenses[1].title} 
        amount={Expenses[1].amount} 
        date={Expenses[1].date}></ExpenseItem>
        <ExpenseItem title={Expenses[2].title} 
        amount={Expenses[2].amount} 
        date={Expenses[2].date}></ExpenseItem>
      </header>
      
    </div>
    
  );
}

export default App;
