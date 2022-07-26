import React from 'react'
import Formulario from '../components/Formulario'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

const EditarCliente = () => {


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
    <>
      <h1 className='font-black text-4xl text-emerald-700'>Editar Cliente</h1>
      <p className='mt-3'>Actualiza datos de un cliente</p>

      {cliente?.nombre ? (
        <Formulario 
          cargando={cargando}
          cliente={cliente}
        />
      ):(
        <p className='mt-10 font-bold text-xl text-red-700 uppercase'>Cliente ID no encontrado</p>
      )}

    </>
  )
}

export default EditarCliente