const apiUrl = "http://localhost:3001/items"
const postProducts = async (name,price,category,location) => {
    try {
          const response = await fetch(apiUrl, {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json'
             },
             body: JSON.stringify({
               name: name,
               price: price,
               category: category,
               location: location
       
              })
           });
           const data = await response.json()
           console.log(data);
          
           
         } catch(error) {
            alert("error")
           } 
      }
      export default postProducts