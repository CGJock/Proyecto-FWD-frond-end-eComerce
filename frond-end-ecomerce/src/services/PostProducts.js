
const postProducts = async (apiUrl,datos) => {
    try {
          const response = await fetch(apiUrl, {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json'
             },
             body: JSON.stringify((datos)
              //  name: name,
              //  description: description,
              //  price: price,
              //  category: category,
              //  location: location,
              //  imgUrl: imgUrl
       
              )
           });
           const data = await response.json()
          
           alert("se agrego con exito");
         } catch(error) {
            alert("error");
           } 
           
      }
      export default postProducts;