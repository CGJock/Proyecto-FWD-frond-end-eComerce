const apiUrl = "http://localhost:3001/items"
const postProducts = async (name,descripton,price,category,location,imgUrl) => {
    try {
          const response = await fetch(apiUrl, {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json'
             },
             body: JSON.stringify({
               name: name,
               descripton: descripton,
               price: price,
               category: category,
               location: location,
               imgUrl: imgUrl
       
              })
           });
           const data = await response.json()
           console.log(data);
          
           
         } catch(error) {
            alert("error")
           } 
      }
      export default postProducts