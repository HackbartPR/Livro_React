import { Component, useEffect, useState } from 'react'

import { TabelaHead } from './components/TabelaHead'
import { TabelaBody } from './components/TabelaBody'
import { TabelaFoot } from './components/TabelaFoot'

function App() {
  const [livros, setLivros] = useState({})

  useEffect(() => {
    fetch('/api/livros.json')
      .then((resp) => {
        return resp.json()
      })
      .then((data) => {
        setLivros(data)
      })
  }, [])

  const handleClick = (id) => {
    const newLivros = livros.filter((livro) => {
      return livro.id != id
    })
    setLivros(newLivros)
  }

  return (
    <table className="tabela">
      <TabelaHead />
      {livros.length != undefined && <TabelaBody livros={livros} handleClick={handleClick} />}
      {livros.length != undefined && <TabelaFoot qtLivros={livros.length} />}
    </table>
  )
}

export default App
