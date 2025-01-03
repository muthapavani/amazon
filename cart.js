let container=document.getElementById("container")
container.style.display="flex"
container.style.gap="40px"
container.style.border="2px solid gray"

let imgcon =document.createElement("div")
imgcon.style.border="2px solid white"
let con=document.createElement("div")
con.style.width="60%"
container.appendChild(imgcon)
container.appendChild(con)

 async function handle_cartproducts(){

    let id=sessionStorage.getItem("prodid")
  
    let res= await fetch(`https://fakestoreapi.com/products/${id}`)
    let data= await res.json()


    let title=document.createElement("h3")
    let text=document.createElement("p")
    let pcon= document.createElement("div")
    let price=document.createElement("h3")
    let dis=document.createElement("p")
    let per=document.createElement("h3")
    let image=document.createElement("img")
    let rating=document.createElement("p")
    let rate=document.createElement("span")
    let count=document.createElement("span")
    let descr=document.createElement("h3")
    let cat=document.createElement("h3")
    let br =document.createElement("br")
    let btnd=document.createElement("div")
    let btn=document.createElement("button")
    let btn1=document.createElement("button")

    let del=document.createElement("p")

    
    cat.innerText=data.category
    title.innerText=data.title
    text.innerText="Special Price"
    text.style.color= "green"

     text.style.fontWeight="bold"
    image.setAttribute("src",data.image)
    image.setAttribute("width","50%")
    image.setAttribute("height","50%")
    image.style.marginLeft="20%"
     image.style.marginTop="20%"
    rating.style.display="flex"
    rating.style.justifyContent="space-evenly "
    pcon.style.display="flex"
    pcon.style.justifyContent="space-evenly "

    descr.innerText=data.description
    rate.innerText=` ${data.rating.rate} ☆`
    price.innerHTML=`₹ ${data.price}  `
    dis.innerText=`₹3,999`
    dis.style.textDecoration="line-through"
    per.innerText="75% off"
    per.style.color="green"

    count.innerText=` ${data.rating.count} Ratings` 
    count.style.textAlign="left"
    rate.style.width="60px"
    rate.style.backgroundColor="green"
    rate.style.borderRadius="20px"
    rate.style.color="white"
    btn.innerText="Buy Now"
    con.style.backgroundColor="white"
    con.style.border="2px solid white"
    con.style.display="flex"
    con.style.flexDirection="column"
    con.style.textAlign="center"
    del.innerText="Free Delivery"
    del.style.color="green"
    btn.style.width="300px"
    btn.style.backgroundColor="blue"
    btn.style.color="white"
    btn.style.fontWeight="bold"
    btn1.innerText="Remove Item"
    btn1.style.width="300px"
    btn1.style.backgroundColor="orange"
    btn1.style.color="white"
    btn1.style.fontWeight="bold"
    btnd.style.display="flex"
    btnd.style.justifyContent="space-evenly "
  
    con.appendChild(cat)
    con.appendChild(title)
    con.appendChild(text)
   
    
    pcon.appendChild(price)
    pcon.appendChild(dis)
    pcon.appendChild(per)
    con.appendChild(pcon)

    imgcon.appendChild(image)
    con.appendChild(br)
    con.appendChild(descr)
   
    con.appendChild(rating)
    rating.appendChild(count)
    rating.appendChild(rate)
    con.appendChild(del)
    
    con.appendChild(btnd)
    btnd.appendChild(btn)
    btnd.appendChild(btn1)

    btn1.addEventListener("click",function(){
      document.body.removeChild(container)
    
    })
    
   

}


window.onload=handle_cartproducts()