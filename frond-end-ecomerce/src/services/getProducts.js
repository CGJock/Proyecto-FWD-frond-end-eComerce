const apiUrl = "http://localhost:3001/items";

const getProducts  = async() => {
    try{
      
      const response = await fetch(apiUrl);
      
      const data = await response.json()
      return data
      
    } catch(error){
      alert("error en el servidor")
    }
    
  }

  export { getProducts }