import { Inter } from 'next/font/google'
import { gql, useQuery } from '@apollo/client'
import styled from "styled-components";
import { Character, characters } from '@/types'
import Link from 'next/link'
import Tabla from './components/tablaInicial';
import { getClientSSR } from '@/utils/client';
import { GetServerSideProps } from 'next';

import {useState, useEffect } from 'react';
import Test from "./components/test.tsx";

const inter = Inter({ subsets: ['latin'] })

//los personajes no cambian por lo tanto renderizado estatico funciona
//en el caso de las busquedas por parametros, tiene que ser en el cliente
//y la funcion va dentro de la app pq necesita informacion que se guarda en un state

const Home = () => { 
   
    const query = gql`
    query ($page:Int, $status:String, $gender:String, $name:String){
        characters(page:$page, filter:{name: $name, status:$status, gender:$gender}){
        results{
            name
            image
        }      
        }
    }
    `
    const [page, setPage] = useState<number>(1)  
    const [status, setStatus] = useState<string>("unknown")
    const [gender, setGender] = useState<string>("male") 
   
    const [name, setName] = useState<string>()
    const [nameState, setNameState] = useState<string>()
    const {data, loading} = useQuery<characters>(query, {variables: {page, status, gender, name}});
  
  const [renderAgain, setRenderAgain] = useState<number>(0)
  
  

  const [order, setOrder] = useState<boolean>(false)
  
  
  //no puedo aplicar sort sobre data.characters.results, por eso busco usar names
  // {const sorted = (order)? names.sort((a:Character, b:Character) => a.name.localeCompare(b.name)) : console.log(order)  }
    if(loading)return ( 
      <>
      Loading...</>
    )
  
  return ( 
    <>
    <div>
    {/* me gustaria usar names para poder aplicar el sort */}
    <Tabla chars={data?.characters?.results.map((c:Character) => c)} order={order}></Tabla>
    {/* <Test param={order}></Test> */}
    <button onClick={() => {setOrder(true)
    setRenderAgain(renderAgain + 1)    
    }}>Ordernar alfabeticamente
    </button>
    <button onClick={() => {setOrder(false)
    setRenderAgain(renderAgain + 1)    
    }}>Desordenar
    </button>
    <div>Current page: {page}/20</div>
      <button onClick={() => {if(page < 21)setPage(page - 1)}}>Previous page</button>
      <button onClick={() => {if(page >= 1)setPage(page + 1)}}>Next page</button>
      <div>
      Status: 
      <button onClick={() => setStatus("dead")}>Dead</button>
      <button onClick={() => setStatus("alive")}>Alive</button>
      <button onClick={() => setStatus("unknown")}>Unknown</button>
      </div>
      <div>
        Gender: 
        <button onClick={() => setGender("female")}>Female</button>
        <button onClick={() => setGender("male")}>Male</button>
        <button onClick={() => setGender("genderless")}>Genderless</button>
        <button onClick={() => setGender("unknown")}>Unknown</button>
      </div>
      <div>
        Buscar por nombre <input onChange={(i) => {
          setNameState(i.target.value);}}>
          </input>
          <button onClick={() => setName(nameState)}>Buscar</button>
      </div>
      </div>
    
   
    
    </>
  )
}


export default Home;


