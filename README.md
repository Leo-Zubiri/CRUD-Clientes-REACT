## **React Router**

``` npm i react-router-dom```

```js
import {BrowserRouter,Routes, Route} from 'react-router-dom';

...

// Desde el componente principal
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<InicarSesion/>}/>

          {/** Usar Master page, para que siempre aparezca cierto componente en esa ruta */}
          <Route path='/clientes' element={<Layout/>}> 
            <Route index element={<Inicio />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>

```

```js
// Nuevo componente de React router
import {Outlet} from 'react-router-dom'

// En Oulet se inyecta el componente que se cargue en base a las routes anidadas
const Layout = () => {
  return (
    <div>Layout
      <Outlet />
    </div>
  )
}

export default Layout
```