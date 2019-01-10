// you'll have to change the ip address to that of your API device


function create(){

  let newName = document.getElementById('newName').value;
  console.log("sending message");
  axios.post("http://159.65.32.223:4000/api/newName",{
      newName:newName
  })
  .then((response)=>{
      console.log(response);   
      document.getElementById('message').innerHTML = "name created";    

  })
  .catch((error)=>{

    ;
 
  })

}

function read(){

  axios.get("http://159.65.32.223:4000/api/getName"
  )
  .then((response)=>{
      console.log(response);   
      if (response.data.name){
        document.getElementById('message').innerHTML = response.data.name;    
      } else {
        document.getElementById('message').innerHTML = "no name to read";    

      }
  })
  .catch((error)=>{

      document.getElementById('message').innerHTML = "there is no name to read";    
 
  })

}

function update(){

  let updateName = document.getElementById('updateName').value;
  
  axios.put("http://159.65.32.223:4000/api/updateName",{
      updateName:updateName
  })
  .then((response)=>{
         
      document.getElementById('message').innerHTML = "name updated";    

  })
  .catch((error)=>{

    ;
 
  })

}

function del(){

  axios.delete("http://159.65.32.223:4000/api/deleteName",{
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
