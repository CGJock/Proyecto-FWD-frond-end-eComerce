// const apiUrl = "http://localhost:3001/items";
// import { useState } from "react";
// import { useEffect } from "react";

// const Fetch = () => {
//     const [Data, setData] = useState([]);

//     useEffect(() => {
//       const fetchData = async () => {
//       try {
//         const respuesta =  fetch(apiUrl);
//         const datos = await respuesta.jason();
//         setData(datos);
//       } catch (error) {
//         alert("error al extraer la data")
//       }
//     };

//     fetchData();
//    }, [])}
//   ;

//   export default Fetch

// const apiUrl = "http://localhost:3001/items"
// const getProducts = async (name,description,price,category,location,imgUrl) => {
//     try {
//           const response = await fetch(apiUrl, {
//            method: 'POST',
//            headers: {
//              'Content-Type': 'application/json'
//              },
//              body: JSON.stringify({
//               name: name,
//               description: description,
//               price: price,
//               category: category,
//               location: location,
//               imgUrl: imgUrl
       
//               })
//            });
//            const data = await response.json()
//            console.log(data);
          
           
//          } catch(error) {
    
    
//             alert("error")
//            } 
//       }

//       export default getProducts
// import { useEffect } from "react";

// const apiUrl = "http://localhost:3001/items";

// function Name() {
  

// useEffect(() =>{
//   const getProducts  = async() => {
//     try{
      
//       const response = await fetch(apiUrl);
      
//       const data = await response.json()
//       return data
      
//     } catch(error){
//       alert("error en el servidor")
//     }
    
//   }
//   getProducts()
// },[]
// )
// }


//  export default Name
const apiUrl = "http://localhost:3001/items";

const getItems  = async() => {
    try{
      
      const response = await fetch(apiUrl);
      
      const data = await response.json()
      return data
      
    } catch(error){
      alert("error en el servidor")
    }
    
  }

  export { getItems }
