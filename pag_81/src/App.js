//COMPONENTES
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer.js'
import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom'
//NAVEGAÇÃO
import { Home } from './components/Navegacao/Home/Home'
import {Programacao} from './components/Navegacao/Programacao/Programacao'
import {NotFound} from './components/NotFound/NotFound'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/frontend" element={<Programacao />} />
        <Route element={<NotFound />}/>    
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
