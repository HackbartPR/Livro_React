//BIBLIOTECAS
import { Component } from 'react'
//COMPONENTES
import { TabelaHead } from './components/TabelaHead'
import { TabelaBody } from './components/TabelaBody'
import { TabelaFoot } from './components/TabelaFoot'

//TRANSFORMANDO FUNCTION EM CLASSES
class App extends Component {
  //ARMAZENAR DADOS NO COMPONENTE (useSTATE)
  state = {
    livros: [
      { id: '978-85-7522-632-2', titulo: 'CSS Grid Layout', autor: 'Maurício Samy silva' },
      { id: '978-85-7522-677-3', titulo: 'Node Essencial', autor: 'Ricardo R. Lecheta' },
      { id: '978-85-7522-512-7', titulo: 'Aprendendo Material Design', autor: 'Kyle Mew' },
    ],
  }

  //MÉTODO PARA RENDERIZAR UM CONTEÚDO NA TELA
  render() {
    return (
      <table className="tabela">
        <TabelaHead />
        <TabelaBody livros={this.state.livros} />
        <TabelaFoot qtLivros={this.state.livros.length} />
      </table>
    )
  }
}

export default App
