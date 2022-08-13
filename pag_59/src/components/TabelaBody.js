export const TabelaBody = (props) => {
  return (
    <tbody>
      {props.livros.map((livro, index) => {
        return (
          <tr key={`tr_${livro.id}`}>
            <td>{livro.id}</td>
            <td>{livro.titulo}</td>
            <td>{livro.autor}</td>
            <td>
              <button
                className="btnRemove"
                onClick={() => {
                  props.handleClick(livro.id)
                }}
              >
                Remover
              </button>
            </td>
          </tr>
        )
      })}
    </tbody>
  )
}
