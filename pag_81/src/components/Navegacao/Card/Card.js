import * as C from './style'

export const Card = (props) =>{
    console.log(props.livro.id)
    return(
        <C.Card key={`card-${props.livro.id}`}>
            <img src={`/assets/imagens/capas/${props.livro.id}.jpg`} alt="Capa do Livro"/>
            <div className='content__desc'>
              <h2>Padrões para Cubernetes</h2>
              <p>O modo como os desenvolvedores projetam, desenvolvem e executam software mudou significativamente com a evolução dos microsserviços e dos containers... </p>
              <a href="/">Saiba mais </a>
            </div>
        </C.Card>
    )
}