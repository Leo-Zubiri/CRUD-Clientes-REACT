import React from 'react'
import { useState,useEffect } from 'react'

import Cliente from '../components/Cliente';

const Inicio = props => {

  const [clientes, setClientes] = useState([]);

  useEffect(() => { 
    const obtenerClientesAPI = async () => { 
      try {
        const url = import.meta.env.VITE_API_URL
        const response = await fetch(url);
        const result = await response.json();

        setClientes(result);

      } catch (error) {
        console.log(error);
      }
    }

    obtenerClientesAPI();
  },[]);

  const handleEliminar = async (id)=>{
    const confirmar = confirm('¿Deses eliminar este cliente?');

    if(confirmar){
      try {
        const url = `${import.meta.env.VITE_API_URL}/${id}`;
        const response = await fetch(url, {
          method: 'DELETE'
        });

        await response.json();

        const clientesAct = clientes.filter(cliente => cliente.id !== id)
        setClientes(clientesAct);
      } catch (error) {
        
      }
    }
  }

  return (
    <>
     <h1 className='font-black text-4xl text-emerald-700'>Clientes</h1>
     <p className='mt-3'>Administra tus Clientes</p>
     <table className='w-full mt-5 table-auto shadow bg-white'>
      <thead className='bg-emerald-700 text-white'>
        <tr>
          <th className='p-2'>Nombre</th>
          <th className='p-2'>Contacto</th>
          <th className='p-2'>Empresa</th>
          <th className='p-2'>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {
          clientes.map(cliente => (
            <Cliente 
              key={cliente.id}
              cliente={cliente}
              handleEliminar={handleEliminar}
            />
          ))
        }
      </tbody>
     </table>
    </>
  )
}

export default Inicio