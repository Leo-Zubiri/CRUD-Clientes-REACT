import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';

const VerCliente = () => {
    const [cliente, setCliente] = useState({});
    const [cargando, setCargando] = useState(true);
    const {id} = useParams();
    
    useEffect(() => { 
      setCargando(true); 
      const obtenerClienteAPI = async () => {
        try {
          const url = `${import.meta.env.VITE_API_URL}/${id}`;
          const response = await fetch(url);
          const result = await response.json();
          setCliente(result);

        } catch (error) {
          console.log(error);
        }
        
        setTimeout(() => { 
          setCargando(false);
        },500);
      }
      obtenerClienteAPI();
      
    },[]);

  return (
    cargando ? 
      <Spinner /> : 
      Object.keys(cliente).length === 0 ? 
        <p className='text-xl font-bold'>No hay resultados </p> : 
    (
    <div className='bg-gray-100 p-10 rounded-2xl shadow-xl'>
        
      <h1 className='font-black text-4xl text-emerald-700'>Cliente {id}</h1>
      <p className='mt-3'>Información acerca del cliente</p>
        <p className='text-2xl mt-10'> 
          <span className="text-gray-700 uppercase font-bold">Nombre: </span>
          {cliente.nombre}
        </p>

        <p className='text-2xl mt-4'> 
          <span className="text-gray-700 uppercase font-bold">Telefono: </span>
          {cliente.telefono}
        </p>

        <p className='text-2xl mt-4'> 
          <span className="text-gray-700 uppercase font-bold">Email: </span>
          {cliente.email}
        </p>

        <p className='text-2xl mt-4'> 
          <span className="text-gray-700 uppercase font-bold">Empresa: </span>
          {cliente.empresa}
        </p>
        <p className='text-2xl mt-4'> 
          <span className="text-gray-700 uppercase font-bold">Notas: </span>
          {cliente.notas}
        </p>
    
    </div>)
  )
}

export default VerCliente