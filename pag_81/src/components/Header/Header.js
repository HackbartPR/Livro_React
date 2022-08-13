//ESTILIZAÇÃO
import * as C from './style'
//IMAGEM
import logo from '../../assets/imagens/logo.png'

export const Header = () => {
  return (
    <C.Header>
      <img src={logo} />
      <ul>
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">FRONTEND</a>
        </li>
        <li>
          <a href="#">PROGRAMAÇÃO</a>
        </li>
        <li>
          <a href="#">DESIGN</a>
        </li>
        <li>
          <a href="#">CATÁLOGO</a>
        </li>
      </ul>
    </C.Header>
  )
}
