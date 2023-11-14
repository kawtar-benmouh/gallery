const pictures = document.querySelectorAll(".img-gallery img") 
const fullImg = document.querySelector(".full-img")
let scrOld = fullImg.querySelector("img")


document.querySelector("span").onclick = () =>{
    fullImg.style.visibility = "hidden"
}


pictures.forEach(img =>{
    img.addEventListener("click" , (e) =>{
        const newSrc = e.target.src.split("/")[4]
        fullImg.style.visibility = "visible"
        scrOld.src = "./images/"+newSrc
    })
})