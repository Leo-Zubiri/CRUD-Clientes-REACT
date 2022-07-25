import {BrowserRouter,Routes, Route} from 'react-router-dom';

//Componentes
import Layout from './layout/Layout'
import Inicio from './pages/Inicio'
import NuevoCliente from './pages/NuevoCliente';
import EditarCliente from './pages/EditarCliente';
import VerCliente from './pages/VerCliente';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route>

          {/** Usar Master page, para que siempre aparezca cierto componente en esa ruta */}
          <Route path='/clientes' element={<Layout/>}> 
            <Route index element={<Inicio />} />
            {/** /clientes/nuevo */}
            <Route path='nuevo' element={<NuevoCliente />} />
            <Route path='editar/:id' element={<EditarCliente />} />
            <Route path=':id' element={<VerCliente />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
