import {Link} from 'react-router-dom'
import * as C from './style'

export const NotFound = ()=>{
    return(
        <C.NotFound>
            <h2>Erro 404</h2>
            <p>Desculpe, não conseguinos encontrar a página desejada!</p>
        </C.NotFound>
    )
}