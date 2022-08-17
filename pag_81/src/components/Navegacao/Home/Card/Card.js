import * as C from './style'
//IMAGENS
import image_1 from '../../../../assets/imagens/capas/9788575221396.jpg'

export const Card = () =>{
    return(
        <C.Card>
            <img src={image_1} alt="Capa do Livro"/>
            <div className='content__desc'>
              <h2>Padrões para Cubernetes</h2>
              <p>O modo como os desenvolvedores projetam, desenvolvem e executam software mudou significativamente com a evolução dos microsserviços e dos containers... </p>
              <a href="/">Saiba mais </a>
            </div>
        </C.Card>
    )
}