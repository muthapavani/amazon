
let container=document.getElementById("container")

container.style.display="flex"
container.style.flexWrap="wrap"
container.style.gap="20px"
async function handle_products(){
    let res=await fetch("https://fakestoreapi.com/products ")
     let data=await res.json()
     console.log(data)
     data.forEach(ele => {
        
        let product=document.createElement("div")
        product.style.backgroundColor="white"
        product.style.border="2px solid white"
        product.style.borderRadius="10px"
        product.style.width="320px"
        product.style.display="flex"
        product.style.flexDirection="column"
        product.style.textAlign="center"
        let title=document.createElement("h3")
        let price=document.createElement("p")
        let image=document.createElement("img")
        let br=document.createElement("br")
        let btn=document.createElement("button")
        let off=document.createElement("h4")
     
       

        title.innerText=ele.title
        title.style.color="blue"
        price.innerText=` ₹ ${ele.price}`
        price.style.fontWeight="bold"
        image.setAttribute("src",ele.image)
        
        image.setAttribute("width","300px")
        image.setAttribute("height","250px")
        off.innerText="Min 50% Offer"
        off.style.color="green"
        btn.style.width="100px"
        btn.style.color="white"
        btn.style.fontWeight="bold"
        btn.style.marginLeft="30%"
        btn.style.backgroundColor="blue"


        

        
        product.appendChild(title)
       
        product.appendChild(image)
        product.appendChild(price)
        product.appendChild(br)
        product.appendChild(btn)
        product.appendChild(off)
       
        btn.onclick=()=>handle_eachproducts(ele.id)
        btn.innerText="Showmore"
        container.appendChild(product)



       

     });

}
const handle_eachproducts=(id)=>{
    window.sessionStorage.setItem("proid",id)
    window.location.href="./eachproduct.html"
}
window.onload=handle_products()
