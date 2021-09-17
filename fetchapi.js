let reg=document.getElementById("reg")
let log =document.getElementById("log")

/*function getdata(){
    console.log("started getdata")
    url="";
    fetch(url).then((response)=>{
       
        return response.json(); 
    }).then((data)=>{
       
        console.log (data);
    })
}*/


function postdata(){
    
    url="http://localhost:3001/register";
    data='{"name":"aman","email":"aman@gmail.com","password":"test123"}'
    params={
        method:"post",
        headers:{
            'content-Type':'application/json'

        },
        body: data

    }
    fetch(url,params).then((response)=>{
       
        return response.json(); 
    }).then((data)=>{
        
        console.log (data);
    })
}




 postdata()