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
                <ExpenseItem
                title={props.expenses[0].title} 
                price={props.expenses[0].price}
                date={props.expenses[0].date}
                />
                <ExpenseItem
                title={props.expenses[1].title} 
                price={props.expenses[1].price}
                date={props.expenses[1].date}
                />
                <ExpenseItem
                title={props.expenses[2].title} 
                price={props.expenses[2].price}
                date={props.expenses[2].date}
                />
                <ExpenseItem
                title={props.expenses[3].title} 
                price={props.expenses[3].price}
                date={props.expenses[3].date}
                />
            </Card>
        </div>
    );
}

export default Expenses