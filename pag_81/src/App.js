//COMPONENTES
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer.js";
//NAVEGAÇÃO
import { Home } from "./components/Navegacao/Home/Home";
import { Programacao } from "./components/Navegacao/Programacao/Programacao";
import { Fronted } from "./components/Navegacao/Frontend/Frontend";
import { Design } from "./components/Navegacao/Design/Design";
import { Catalogo } from "./components/Navegacao/Catalogo/Catalogo";
import { NotFound } from "./components/NotFound/NotFound";
import { Livro } from "./components/Livro/Livro";
//SERVIÇOS
import { recebeLivros } from "./services/Api";
//BIBLIOTECAS
import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends Component {
  state = {
    livros: [],
  };

  async componentDidMount() {
    const livros = await recebeLivros();
    !(livros instanceof Error) && this.setState({ livros });
  }


  render() {
    if (this.state.livros.length == 0) return <p>Aguardando...</p>;

    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Livro />} />
          {/* <Route path="/" element={<Home livros={this.state.livros} />} /> */}
          <Route path="/programacao" element={<Programacao livros={this.state.livros} />} />
          <Route path="/frontend" element={<Fronted livros={this.state.livros} />} />
          <Route path="/design" element={<Design livros={this.state.livros} />} />
          <Route path="/catalogo" element={<Catalogo livros={this.state.livros} />} />
          <Route path="/livro/:id" element={<Livro id={this.props.match.params.id}/>} />
          <Route element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    );
  }
}

export default App;
