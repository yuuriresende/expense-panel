import './NewExpense.css'
import ExpenseForm from '../ExpenseForm/ExpenseForm';
const NewExpense = (props) => {
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

    //com os valores recebidos do componente filho, criamos uma variavel que herda todo dado digitado
    //e adiciona um id generico a ele. Ali novamente recebemos o atributo onAddExpense de appjs por props
    //enviando para appjs os valores digitados no componente filho -expenseform-
    
    return (
        <div className='new-expense'>
           <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
        </div>
    );
}

export default NewExpense