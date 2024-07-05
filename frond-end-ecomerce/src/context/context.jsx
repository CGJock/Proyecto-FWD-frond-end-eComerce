import { useState, useContext, createContext, useEffect } from "react";
import { getItems } from "../services/getProducts";

// const dataContext = createContext()

// // export const ShareContext = ({children}) => {
// //   const [Data, setData] = useState([])



// function Contexto() {
//   const [dataproductos,setdataproductos] = useState([])
//   useEffect(()=>{
//     getItems().then((data) => setdataproductos(data))
//    }, [])
  

 
//   // async function getAllItems() {
//   // const data = await getItems();
  
//   // const categ = data.filter((item) => item.category === seleccionado && Price > item.price);
//   // setData(categ)
  
// // }



//   return (
//    <dataContext.Provider value={dataproductos}>
    
//    </dataContext.Provider> 
//   )

// }

