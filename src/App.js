import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id:'e1',
    title: 'Manutenção de carro',
    price: 1480.12,
    date: new Date(2022, 7, 20)
  },
  {
    id:'e2',
    title: 'Energia',
    price: 150.42,
    date: new Date(2022, 7, 25)
  },
  {
    id:'e3',
    title: 'Água',
    price: 40.59,
    date: new Date(2022, 7, 28)
  },
  {
    id:'e4',
    title: 'Celular',
    price: 90.42,
    date: new Date(2022, 8, 7)
  },
]

const App = () => {
  const[expenses, setExpenses] = useState(INITIAL_EXPENSES)
  
  const addExpenseHandler = (expense) =>{
      setExpenses((prevExpenses) => {
        return [expense, ...prevExpenses]
      })
  }
  //atualizando o estado do array com os dados, herdando ele inteiro com prevExpenses e adicionando novos dados com expense
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
