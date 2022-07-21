import {BrowserRouter,Routes, Route} from 'react-router-dom';

//Componentes
import InicarSesion from './layout/IniciarSesion'
import Layout from './layout/Layout'
import Inicio from './pages/Inicio'
import LoginForm from './pages/LoginForm';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<InicarSesion/>}> 
            <Route index element={<LoginForm />}/>
          </Route>

          {/** Usar Master page, para que siempre aparezca cierto componente en esa ruta */}
          <Route path='/clientes' element={<Layout/>}> 
            <Route index element={<Inicio />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
