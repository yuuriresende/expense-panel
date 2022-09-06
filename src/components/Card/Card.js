import './Card.css'

const Card = (props) => {
    const classes = 'card ' + props.className
    //permite que herde a classe css recebida direta no componente + a classe css definida pra esse card
    return <div className={classes}>{props.children}</div>
}
//permite que eu faça o wrap com um custom componente mantendo seus dados
//props.children vai receber o conteudo que esta "wrapado" dentro do componente
export default Card;