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

## **useLocation** de ReactRouter
```js
import {Outlet,Link,useLocation} from 'react-router-dom'

...

  const location = useLocation();
// Object { pathname: "/clientes/nuevo", search: "", hash: "", state: null, key: "t6feuoku" }

  const urlActual = location.pathname;

```
---

## **Librerías para Formularios**

- Formik con herramienta de validación 
  - ``` npm i formik```
- Yup con herramienta de validación
  - ``` npm i yup```
- React Hook Form

<br>

**Formik**
```js
import { Formik, Form, Field } from 'formik'

...

 <Formik>
    <Form>

        <div>
            <label htmlFor='nombre'>Nombre: </label>
            <Field 
                id='nombre'
                type='password'
                className=''
                placeholder=''
            />
        </div>
        
    </Form>
</Formik>
```