import './ExpensesList.css'
import ExpenseItem from '../ExpenseItem/ExpenseItem'

const ExpensesList = (props) => {
    
    if (props.expenses.length === 0){
        return <h2 className='expenses-list__fallback'>found no expenses</h2>
    }

    return(
        <ul className='expenses-list'>
            {props.expenses.map((expense) => (
                <ExpenseItem
                    key={expense.id} 
                    title={expense.title} 
                    price={expense.price} 
                    date={expense.date}
                />
                ))  
            }
        </ul>
    )
}

export default ExpensesList