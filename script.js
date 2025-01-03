const handle_sign=async()=>{
let username=document.getElementById("name").value
let password=document.getElementById("pass").value
let useremail=document.getElementById("email").value
let details={username:username,password:password,useremail:useremail}
let res= await fetch(" http://localhost:3000/users ",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify(details)
})
let data=await res.json()

}


const handle_login=async()=>{

let username=document.getElementById("uname").value
let password=document.getElementById("upass").value
console.log(username,password)
let res=await fetch("http://localhost:3000/users")
let data=await res.json()

data.forEach(element => {
    count=0
    if(element.username==username&&element.password==password){
        window.alert("login successful")
        window.location.href="./product.html"
        count++
    }
    
});
if(count==0){
    console.log("invalid credentials")
}

}
