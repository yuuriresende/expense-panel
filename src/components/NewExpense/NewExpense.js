import './NewExpense.css'
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import { useState } from 'react';
const NewExpense = (props) => {
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setIsEditing(false)
    }

    //com os valores recebidos do componente filho, criamos uma variavel que herda todo dado digitado
    //e adiciona um id generico a ele. Ali novamente recebemos o atributo onAddExpense de appjs por props
    //enviando para appjs os valores digitados no componente filho -expenseform-
    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true)
    }
    const stopEditingHandler = () => {
        setIsEditing(false)
    }
    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            { isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    );
}

export default NewExpense