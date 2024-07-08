

const delProducts = async (apiUrl,id,) => {
    
    try {
          const response = await fetch(apiUrl+id, {
           method: 'DELETE',
           headers: {
             'Content-Type': 'application/json'
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