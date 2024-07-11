
const postProducts = async (apiUrl,datos) => {
    try {
          const response = await fetch(apiUrl, {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json'
             },
             body: JSON.stringify((datos)//los datos contiene el objeto con los input
              )
           });
           const data = await response.json()
          
           alert("se agrego con exito");
         } catch(error) {
            alert("error");
           } 
           
      }
      export default postProducts;