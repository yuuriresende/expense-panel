import { useState } from 'react';
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../Card/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFIlter";
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
                {filteredExpenses.length === 0 ? (<p>no expenses found</p>) : (
                    filteredExpenses.map((expense) => (
                        <ExpenseItem
                            key={expense.id} 
                            title={expense.title} 
                            price={expense.price} 
                            date={expense.date}
                        />
                    ))  
                )}                             
            </Card>
        </div>
    );
}

export default Expenses