import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setTitle] = useState("");
    const [enteredPrice, setPrice] = useState("");
    const [enteredDate, setDate] = useState("");
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredPrice: '',
    //     enteredDate: '',
    // })

    const titleChangeHandler = (event) =>{
        setTitle(event.target.value)
        // setUserInput((prevState) => {
        //     return ({
        //         ...prevState,
        //         enteredTitle: event.target.value
        //     })
        // })
    
    }    

    const priceChangeHandler = (event) => {
        setPrice(event.target.value)
        // setUserInput((prevState) => {
        //     return({
        //         ...prevState,
        //         enteredPrice: event.target.value
        //     })
        // })
    }    

    const dateChangeHandler = (event) => {
        setDate(event.target.value)
        // setUserInput((prevState)=>{
        //     return ({
        //         ...prevState,
        //         enteredDate: event.target.value
        //     })
        // })
    }
      
    //ha duas formas de se usar estados no react, um a um e como esta comentado todos de uma vez usando spread operator
    //consequentemente herdando os estados definidios no userInput, causando uma atualizacao de estado de todos valores
    //toda vez que um estado for atualizado
    
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            price: enteredPrice,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        //herdamos com props o atributo onSaveExpenseData criado no pai -newexpense- e passamos o valor por esse atributo
        setTitle('')
        setPrice('')
        setDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Price</label>
                    <input type='number' min="0.01" step="0.01" value={enteredPrice} onChange={priceChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2022-9-7" max="2023-9-7" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='cancel' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm