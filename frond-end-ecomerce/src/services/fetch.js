const apiUrl = "http://localhost:3001/dataUser1"
const postTask = async (User,Mail,Password) => {
    try {
          const response = await fetch(apiUrl, {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json'
             },
             body: JSON.stringify({
               user: User,
               password: Password,
               mail: Mail
       
              })
           });
           const data = await response.json()
           console.log(data);
          
           
         } catch(error) {
    
    
            alert("error")
           } 
      }
    
      const getTask  = async() => {
        try{
          
          const response = await fetch(apiUrl);
          
          const data = await response.json()
          return data
          
        } catch(error){
          console.log(error)
        }
        
      }
    //utiliza el parametro id que es igual al id de los contenedores
      const delTask = async(id) => {
        try {
          const response = await fetch(apiUrl + id, {
           method: 'DELETE',//llama al metodo que se va a usar 
           headers: {
             'Content-Type': 'application/json'
             },
             
           });
           const data = response.json()//obtiene la data convertida a json
           window.location.reload()//se recarga cada vez que la pagina se recarga
            console.log(data);
          
         } catch(error) {
          
            console.log("no se puede borrar")
           } 
      }
    
      const putTask = async(id,estadoTarea) => {
        try {
          const response = await fetch(apiUrl + id, {
           method: 'PUT',
           headers: {
             'Content-Type': 'application/json'
             },
             body: JSON.stringify({
    
               
               estado: estadoTarea
          
              })
              
           });
           const data = await response.json()
           window.location.reload()
           console.log(data);
           
           
         } catch(error) {
    
    
            console.log(error)
           } 
      }
      const updateTask = async (id,inputEdit) => {
        try {
              const response = await fetch(apiUrl+ id, {
               method: 'PUT',
               headers: {
                 'Content-Type': 'application/json'
                 },
                 body: JSON.stringify({
        
                   tarea: inputEdit,
                   
              
                  })
               });
               const data = await response.json()
               
              window.location.reload()
               
             } catch(error) {
        
        
                alert("error")
               } 
          }
    
      export {postTask,getTask,delTask,putTask,updateTask}
       