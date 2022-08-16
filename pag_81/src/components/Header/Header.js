//ESTILIZAÇÃO
import * as C from './style'
//IMAGEM
import logo from '../../assets/imagens/logo.png'
//BIBLIOTECA
import {NavLink} from 'react-router-dom'

let linkCorrente = {
  color: "#027399"
}

export const Header = () => {
  return (
    <C.Header>
      <img src={logo} alt="Logo da Empresa"/>
      <ul>
        <li>
          <NavLink  activestyle={linkCorrente} to ="/">HOME</NavLink>
        </li>
        <li>
          <NavLink  activestyle={linkCorrente} to ="/frontend">FRONTEND</NavLink>
        </li>
        <li>
          <NavLink  activestyle={linkCorrente} to ="/programacao">PROGRAMACAO</NavLink>
        </li>
        <li>
          <NavLink  activestyle={linkCorrente} to ="/design">DESIGN</NavLink>
        </li>
        <li>
          <NavLink  activestyle={linkCorrente} to ="/catalogo">CATALOGO</NavLink>
        </li>
      </ul>
    </C.Header>
  )
}
