
import styled from "styled-components";
import { Character, characters } from '@/types'




//cuando el parametro que recibe la funcion lo encerramos en {}, indicamos que es un objeto, no un paramtero a recibir si no un dato
//pasarle un json a un componente da problemas, mejor pasarle arrays y objetos
const Tabla = ({chars, order}) => {
  
  // let sorted;
  // if(order) //sorted = personajes?.datos.sort((a, b) => a.name.localeCompare(b.name));
  
  // if(typeof order.order === "undefined"){
  //   {console.log(Object.keys(order))}
  //   return (
  //     <>
  // Waiting...</>
  //   )
  // }
  // {console.log(typeof order.order)}
 
  //   
    
      (order)? chars.sort((a, b) => a.name.localeCompare(b.name)) : console.log(order)  
      
      return (
        <>
        <StyledTable>
        {chars.map((c:Character) => <StyledTableCell> {c.name} <img src={c.image} /> </StyledTableCell>)}
        </StyledTable>
        
        {/* numero de pagina: {pag} */}
      
        </>
      )
    
    
    
}

  
  
  
  //const sorted = (order)? sort.sort((a, b) => a.name.localeCompare(b.name)) : sort.sort((a, b) => b.name.localeCompare(a.name))
  
  // solamente sale la StyledTable la primera vez se modifica el valor de return, en las siguientes Reloads ya no
const StyledTable = styled.div`
  border: 1px solid #ccc;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 0.3fr;
  grid-gap: 1px;
  background-color: #fff;
  color: #444;
  margin-bottom: 50px;
`;

const StyledTableCell = styled.div`
  padding: 10px 20px 10px 20px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;
export default Tabla;

