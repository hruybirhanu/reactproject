import './ExpenseItem.css';
function ExpenseItem(props){
//     const Expensedate= new Date('12/12/2022');
//    const Expensetitle="carinshurance";
//    const Expenseprice="678.897"
 return(
     <div className='Expense-Item'>
    
             <div className=''>{props.date.toISOString()}</div>
             <div className='Expense-Item-describition'><h2>{props.title}</h2>
              <div className='Expense-Item-price'>${props.amount}</div>
    </div>
    </div> 
    )
}
export default ExpenseItem; 