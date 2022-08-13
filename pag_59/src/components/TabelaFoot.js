export const TabelaFoot = (props) => {
  return (
    <tfoot>
      <tr>
        <td colSpan="4">{`Quantidade de livros da tabela: ${props.qtLivros}`}</td>
      </tr>
    </tfoot>
  )
}
