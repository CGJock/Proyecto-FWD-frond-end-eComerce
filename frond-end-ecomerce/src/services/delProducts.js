
const apiUrl = "http://localhost:3001/items/"
const delProducts = async (id) => {
    
    try {
          const response = await fetch(apiUrl+id, {
           method: 'DELETE',
           headers: {
             'Content-Type': 'application/json'
             },
             body: JSON.stringify({
           
              })
           });
           console.log("eliminado con exitp")

           
          
           
         } catch(error) {
            alert("error al borrar")
           } 
      }
      export default delProducts