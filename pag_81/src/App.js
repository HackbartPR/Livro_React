//COMPONENTES
import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home.js'
import { Footer } from './components/Footer/Footer.js'
import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom'
import {Programacao} from './components/Programacao/Programacao'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/frontend" element={<Programacao />} />    
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
