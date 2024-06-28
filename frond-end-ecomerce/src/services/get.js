const apiUrl = "http://localhost:3001/dataUser1";

const getTask  = async() => {
    try{
      
      const response = await fetch(apiUrl);
      
      const data = await response.json()
      return data
      
    } catch(error){
      alert("error en el servidor")
    }
    
  }

  export { getTask }