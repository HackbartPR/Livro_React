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
          <div className="container-setinhas">
            <div
              className="up"
              onClick={() => {
                props.livrosUp()
              }}
            >
              &#129093;
            </div>
            <div
              className="down"
              onClick={() => {
                props.livrosDown()
              }}
            >
              &#129095;
            </div>
          </div>
        </th>
        <th>
          Autor
          <div className="container-setinhas">
            <div
              className="up"
              onClick={() => {
                props.autorUp()
              }}
            >
              &#129093;
            </div>
            <div
              className="down"
              onClick={() => {
                props.autorDown()
              }}
            >
              &#129095;
            </div>
          </div>
        </th>
        <th></th>
      </tr>
    </thead>
  )
}
