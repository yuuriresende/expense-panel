import { useState } from 'react';
import Card from "../Card/Card";
import ExpensesChart from '../ExpensesChart/ExpensesChart';
import ExpensesFilter from "../ExpensesFilter/ExpensesFIlter";
import ExpensesList from '../ExpensesList/ExpensesList';
import './Expenses.css'

const Expenses = (props) => {    
    const [filteredYear, setFilteredYear] = useState('2020');

    const onSelectedYearHandler = (selectedYear) => {
        // console.log('in expenses')
        // console.log(selectedYear)
        setFilteredYear(selectedYear)
    }
    
    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })
    //retorna apenas os dados referentes ao ano pela verificação dos itens em expenses atraves do props
    //chamamos o filter passando um unico item que retorna os dados de acordo com a filtragem
    
    

    return(
        <div>            
            <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onSelectedYear={onSelectedYearHandler}/>
            <ExpensesChart expenses={filteredExpenses} />
               <ExpensesList expenses={filteredExpenses}/>                   
            </Card>
        </div>
    );
}

export default Expenses