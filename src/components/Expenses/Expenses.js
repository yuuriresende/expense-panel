import { useState } from 'react';
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../Card/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFIlter";
import './Expenses.css'

const Expenses = (props) => {    
    const [filteredYear, setFilteredYear] = useState('2020');

    const onSelectedYearHandler = (selectedYear) => {
        console.log('in expenses')
        console.log(selectedYear)
        setFilteredYear(selectedYear)
    }
    
    return(
        <div>
            
            <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onSelectedYear={onSelectedYearHandler}/>
                {props.expenses.map( (expense) => (
                <ExpenseItem
                key={expense.id} 
                title={expense.title} 
                price={expense.price} 
                date={expense.date}/>))}                
            </Card>
        </div>
    );
}

export default Expenses