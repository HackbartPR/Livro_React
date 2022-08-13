//BIBLIOTECAS
import { Component } from 'react'
//COMPONENTES
import { TabelaHead } from './components/TabelaHead'
import { TabelaBody } from './components/TabelaBody'
import { TabelaFoot } from './components/TabelaFoot'

//TRANSFORMANDO FUNCTION EM CLASSES
class App extends Component {
  //ARMAZENAR DADOS NO COMPONENTE (useSTATE)
  state = {}

  //APÓS O COMPONENTE CARREGAR
  componentDidMount() {
    fetch('/api/livros.json')
      .then((res) => {
        return res.json()
      })
      .then((livros) => {
        this.setState({ livros })
      })
      .catch((error) => {
        console.log(`Erro Encontrado: ${error}`)
      })
  }

  //REMOVER LINHA
  handleRemoverLinha = (id) => {
    const livros = this.state.livros.filter((livro) => livro.id != id)
    this.setState({ livros })
  }

  //MÉTODO PARA RENDERIZAR UM CONTEÚDO NA TELA
  render() {
    return (
      <table className="tabela">
        <TabelaHead />
        {this.state.livros != undefined && <TabelaBody livros={this.state.livros} handleClick={this.handleRemoverLinha} />}
        {this.state.livros != undefined && <TabelaFoot qtLivros={this.state.livros.length} />}
      </table>
    )
  }
}

export default App
