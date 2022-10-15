import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './Components/Menu.jsx'
import { CadastroBook } from './views/Book/CadastroBook'
import { ListarBooks } from './views/Book/ListarBooks'
import { Home } from './views/Home/index.jsx'


function App() {
  return (
    <div>
      <Menu/>
      <BrowserRouter>
        <Routes>    
          <Route path='/' element={<Home/>}/>
          <Route path='/book/new' element={<CadastroBook/>}/>
          <Route path='/books' element={<ListarBooks/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App
