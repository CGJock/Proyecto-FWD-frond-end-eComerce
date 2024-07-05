// import { useEffect } from "react";
// import { getItems } from "../services/getProducts";
// import delProducts from "../services/delProducts";
// import { useState } from "react";

// const Table = () => {
//   let Electrodomesticos = "electrodomesticos";
//   let Herramientas = "herramientas";
//   let Muebles = "muebles";
//   let Vestimenta = "vestimenta";
//   let LineaBlanca = "lineaBlanca";
//   let Celulares = "celulares";
//   let Juguetes = "juguetes";
//   let Libros = "libros";
//   const [Category, setCategory] = useState("");
//   const [Location, setLocation] = useState("");
//   let Alajuela = "alajuela";
//   let Cartago = "cartago";
//   let Guanacaste = "guanacaste";
//   let Heredia = "heredia";
//   let SanJose = "sanjose";
//   let Limon = "limon";
//   let Puntarenas = "puntarenas";
// //   const [Price, setPrice] = useState("");
// //   const [imageUrl, setImageUrl] = useState("");
// //   const [Name, setName] = useState("");
//   const [Description, setDescription] = useState("");
//   const [SelectLocationVisb, setSelectLocationVisb] = useState("");
//   const [SelectCatVisib, setSelectCatVisib] = useState("");
//   const [Data, setData] = ([]);
  
//   useEffect(
//     () => {
//   async function getData() {
//     const datos = await getItems();
//     setData(datos);
//   }
//   getData();
      
// },[]
// );
  
//     function setVisibility() {
//     if (!SelectLocationVisb) {
//       setSelectLocationVisb(true);
//       setSelectCatVisib(true);
//     }
//   }
//   return (
//     <>
//       <table>
//         <thead>
//           <tr>
//             <th>Nombre</th>
//             <th>descripcion</th>
//             <th>precio</th>
//             <th>categoria</th>
//             <th>punto venta</th>
//             <th>imagen</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {Data.map((perrito) => (
//             <tr key={perrito.id}>
//               <td>{perrito.name}</td>
//               <td>
//                 {perrito.description}
//                 <textarea
//                   value={Description}
//                   style={{ display: "none" }}
//                   onChange={(event) => setDescription(event.target.value)}
//                 ></textarea>
//               </td>
//               <td>{perrito.price}</td>
//               <td>
//                 {perrito.Category}
//                 <select
//                   key={perrito.id}
//                   style={{ display: SelectCatVisib ? "block" : "none" }}
//                   value={Category}
//                   onChange={(event) => setCategory(event.target.value)}
//                   name="products"
//                   id="selectorCateg"
//                 >
//                   <option value={Electrodomesticos}>Electrodomesticos</option>
//                   <option value={Herramientas}>Herramientas</option>
//                   <option value={Muebles}>Muebles</option>
//                   <option value={Vestimenta}>Vestimenta</option>
//                   <option value={LineaBlanca}>LineaBlanca</option>
//                   <option value={Celulares}>Celulares</option>
//                   <option value={Juguetes}>Juguetes</option>
//                   <option value={Libros}>Libros</option>
//                 </select>
//               </td>
//               <td>
//                 {perrito.location}
//                 <select
//                   style={{ display: SelectLocationVisb ? "block" : "none" }}
//                   value={Location}
//                   onChange={(event) => setLocation(event.target.value)}
//                   name="puntoventa"
//                   id="puntoventa"
//                 >
//                   <option value={Alajuela}>Alajuela</option>
//                   <option value={Cartago}>Cartago</option>
//                   <option value={Guanacaste}>Guanacaste</option>
//                   <option value={Heredia}>Heredia</option>
//                   <option value={SanJose}>SanJose</option>
//                   <option value={Limon}>Limon</option>
//                   <option value={Puntarenas}>Puntarenas</option>
//                 </select>
//               </td>
//               <td>
//                 <img
//                   src={perrito.imgUrl}
//                   style={{ height: "100px", width: "120px" }}
//                   alt={perrito.name}
//                 />
//               </td>
//               <td>
//                 <button key={perrito.id} onClick={setVisibility}>
//                   Editar
//                 </button>
//               </td>
//               <td>
//                 <button onClick={() => delProducts(perrito.id)}>borrar</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default Table;
