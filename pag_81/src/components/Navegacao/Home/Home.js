//ESTILIZAÇÃO
import * as C from './style'

//COMPONENTES 
import {Card} from './Card/Card'

export const Home = (props) => {
  return (
    <C.Home>
      <div className="wrapper">
        <h2 className="title">Últimos Lançamentos</h2>
        <div className="card">
          <Card />
          <Card />
        </div>
      </div>
    </C.Home>
  )
}
