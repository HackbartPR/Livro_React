//COMPONENTES
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer.js'
import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom'
//NAVEGAÇÃO
import { Home } from './components/Navegacao/Home/Home'
import {Programacao} from './components/Navegacao/Programacao/Programacao'
import {NotFound} from './components/NotFound/NotFound'
//SERVIÇOS
import {recebeLivros} from './services/Api'
//BIBLIOTECAS
import {Component} from 'react'


class App extends Component {

  state = {
    livros: []
  }

  async componentDidMount(){
    const livros = await recebeLivros();
    !(livros instanceof Error) && this.setState({livros})
  }

  render(){

    if(this.state.livros.length == 0) return (<p>Aguardando...</p>)

    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home livros={this.state.livros} />} />
          <Route path="/frontend" element={<Programacao />} />
          <Route element={<NotFound />}/>    
        </Routes>
        <Footer />
      </Router>
    )
  }
  
}

export default App
