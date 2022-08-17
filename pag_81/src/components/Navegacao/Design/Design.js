//ESTILIZAÇÃO
import * as C from './style'
//COMPONENTES
import {Card} from '../Card/Card'


export const Design = (props)=>{

    const construirCard = (livro)=>{
        return(
            <Card livro={livro}/>
        )
    }

    return(
        <C.Design>
            <div className="wrapper">
                <h2 className="title">Últimos Lançamentos</h2>
                <div className="card">
                    {props.livros.map(construirCard)}
                </div>
            </div>
        </C.Design>
    )
}