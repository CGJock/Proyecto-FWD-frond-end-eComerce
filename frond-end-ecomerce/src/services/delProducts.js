

const delProducts = async (apiUrl,id,) => {
    
    try {
          const response = await fetch(apiUrl+id, {
           method: 'DELETE',
           headers: {
             'Content-Type': 'application/json'//se necesita enviar el id y la data como parametros para el metodo delete
             },
             body: JSON.stringify({
           
              })
           });
           console.log("borrado con exito")
           return response
           
          
           
         } catch(error) {
            console.log("borrar")
           } 
      }
      export default delProducts