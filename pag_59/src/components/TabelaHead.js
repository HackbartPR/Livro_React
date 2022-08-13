//CONPONENTES
import { SortTable } from './SortTable'

export const TabelaHead = (props) => {
  return (
    <thead>
      <tr>
        <th colSpan="4">Tabela Livros</th>
      </tr>
      <tr>
        <th>ISBN</th>
        <th>
          Título
          <SortTable up={props.livrosUp} down={props.livrosDown} />
        </th>
        <th>
          Autor
          <SortTable up={props.autorUp} down={props.autorDown} />
        </th>
        <th></th>
      </tr>
    </thead>
  )
}
