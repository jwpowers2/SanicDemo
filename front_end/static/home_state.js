// you'll have to change the ip address to that of your API device


function create(){

  let newName = document.getElementById('newName').value;
  console.log("sending message");
  axios.post("http://159.65.32.223:4000/api/name",{
      newName:newName
  })
  .then((response)=>{
      console.log(response);   
      document.getElementById('message').innerHTML = `Name created as ${response.data.name}`;    

  })
  .catch((error)=>{

      document.getElementById('message').innerHTML = "error in name creation";    
 
  })

}

function read(){

  axios.get("http://159.65.32.223:4000/api/name"
  )
  .then((response)=>{
      console.log(response);   
      if (response.data.name){
        document.getElementById('message').innerHTML = `The name is ${response.data.name}`;    
      } else {
        document.getElementById('message').innerHTML = "there is no name to read";    

      }
  })
  .catch((error)=>{

      document.getElementById('message').innerHTML = "there is no name to read";    
 
  })

}

function update(){

  let updateName = document.getElementById('updateName').value;
  
  axios.put("http://159.65.32.223:4000/api/name",{
      updateName:updateName
  })
  .then((response)=>{
         
      document.getElementById('message').innerHTML = "name updated";    

  })
  .catch((error)=>{

      document.getElementById('message').innerHTML = "error in name update";    
 
  })

}

function del(){

  axios.delete("http://159.65.32.223:4000/api/name",{
    params:{
      name:'name'
    }
  })
  .then((response)=>{
         
      document.getElementById('message').innerHTML = "name deleted";    

  })
  .catch((error)=>{

      document.getElementById('message').innerHTML = "problem deleting name";    
 
  })

}
