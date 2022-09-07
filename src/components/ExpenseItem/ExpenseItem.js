import { useState } from 'react'
import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../Card/Card';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    
    //useState retorna um array de duas posições, a primeira eh um ponteiro referenciando o valor do estado atual
    //a segunda posição é uma função que poderemos chamar para definir um novo titulo
    
    //nao conseguimos mudar valores no react sem usar estados, pois ele executa a funçao componente apenas uma vez
    //para conseguirmos mudar os valores mostrados, precisamos usar o useState para avisar o react a executar 
    //a função componente novamente com novos valores
    
    //usamos estados com a intenção de transformar em uma variavel especial para conseguirmos mudar o valor dela
    //estados dizem ao react que novos valores foram/podem ser incluidos/modificados chamando a execução do componente novamente com os novos valores
    
    //como temos 4 componentes iguais, o useState recebe separadamente cada componente e muda o estado individualmente
    //podemos ver isso com um console.log("teste"): assim q a pagina carregar ele vai chamar console.log 4 vezes
    //(sao 4 componentes, react chama a funçao 4 vezes), assim q o estado de um mudar, apenas uma vez o console log ira apitar
    
    const clickHandler = () =>{
       setTitle("teste");
       console.log(title)
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>R${props.price}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;