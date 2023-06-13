import { Inter } from 'next/font/google'

import { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import { gql, useQuery } from '@apollo/client'
import { useState } from 'react'
import { getClientSSR } from '@/utils/client'
import { character } from '@/types'

const inter = Inter({ subsets: ['latin'] })

//los personajes no cambian por lo tanto renderizado estatico funciona
//en el caso de las busquedas por parametros, tiene que ser en el cliente
//y la funcion va dentro de la app pq necesita informacion que se guarda en un state
const getStaticSideProps:GetStaticProps = async() => {
  const query = gql`
    query {
      character(id:1){
        name
      }
    }
    `
    const client = getClientSSR();
    const {data} = await client.query({query})
    return (
      {props: {data}}
    )
}


const getByid:NextPage<character> = () => { 
    const query = gql`
    query {
      character(id:1){
        name
      }
    }
    `
  const {data} = useQuery<character>(
  query
  )
  console.log(data)
  return (
    <>
      <div>
      </div>
    </>
  )
}

export default getByid;