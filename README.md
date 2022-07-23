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

- Formik con herramienta de validación Yup
  - ``` npm i formik```
- Yup [documentación>>>](https://www.npmjs.com/package/yup)
  - ``` npm i yup```
- React Hook Form

<br>

**Formik**
```js
import { Formik, Form, Field, ErrorMessage } from 'formik'

...

 <Formik
    initialValues={{
      nombre:''
    }}
    onSubmit={(values) => { console.log('Enviando',values)}}
 >
    {({errors,touched}) => {

      return (<Form>

          <div>
              <label htmlFor='nombre'>Nombre: </label>
              <Field 
                  id='nombre'
                  type='password'
                  className=''
                  placeholder=''
                  name='nombre'
              />

              {/*Posible forma de mostrar error*/}
              <ErrorMessage name='nombre'/>

              {/* Forma incluso para validar en tiempo real sin enviar, al salir del input*/}
              {errors.nombre && touched.nombre ? (
                  <div> {errors.nombre} </div>
                ): null
              }
          </div>
          
      </Form>)
      }}
</Formik>
```

## **Validación con Yup**
```js
import * as Yup from 'yup'

...

const nuevoSchema = Yup.object().shape({
  nombre: Yup.string()
          .min(3,'Demasiado corto')
          .max(20,'too long')
          .required('El nombre es obligatorio'),
})

 <Formik
    initialValues={{ nombre:'' }}
    onSubmit={handleSubmit}
    validationSchema={nuevoSchema}
 >
 ...

 </Formik>
```
---

## **JSON Server**
REST - Representational State transfer
API - Application programmin interface

[**Instalación JSON server**](https://www.npmjs.com/package/json-server)

Con privilegios de administrador: 
```npm install -g json-server```