//ESTILIZAÇÃO
import * as C from './style'
//BIBLIOTECA
import {Link} from 'react-router-dom'

export const Header = () => {
  return (
    <C.Header>
      <Link to="/">
        <img src={"/assets/imagens/logo.png"} alt="Logo da Empresa" />
      </Link>
      <ul>
        <li>
          <Link  to="/">HOME</Link>
        </li>
        <li>
          <Link  to="/frontend">FRONTEND</Link>
        </li>
        <li>
          <Link  to="/programacao">PROGRAMACAO</Link>
        </li>
        <li>
          <Link  to="/design">DESIGN</Link>
        </li>
        <li>
          <Link  to="/catalogo">CATALOGO</Link>
        </li>
      </ul>
    </C.Header>
  )
}
