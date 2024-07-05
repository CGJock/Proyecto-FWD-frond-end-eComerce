const apiUrl = "http://localhost:3001/items/"
const putProducts = async (id,name,description,price,category,location,imgUrl) => {
    try {
          const response = await fetch(apiUrl + id, {
           method: 'PUT',
           headers: {
             'Content-Type': 'application/json'
             },
             body: JSON.stringify({
               name: name,
               descripton: description,
               price: price,
               category: category,
               location: location,
               imgUrl: imgUrl
       
              })
           });
           const data = await response.json()
          alert("agregdo con exito")
           
         } catch(error) {
            alert("error")
           } 
      }
      export default putProducts