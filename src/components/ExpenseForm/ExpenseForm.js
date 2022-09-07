import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = () => {
    const [enteredTitle, setTitle] = useState("");

    const titleChangeHandler = (event) =>{
        setTitle(event.target.value)
    }

    const [enteredPrice, setPrice] = useState("");

    const priceChangeHandler = (event) => {
        setPrice(event.target.value)
    }

    const [enteredDate, setDate] = useState("")

    const dateChangeHandler = (event) => {
        setDate(event.target.value)
    }

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Price</label>
                    <input type='number' min="0.01" step="0.01" onChange={priceChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2022-9-7" max="2023-9-7" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm