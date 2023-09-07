const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const mode = document.querySelector("#mode")
const body = document.querySelector("body")
const hLinks = document.querySelectorAll("#hLink")


hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    hamburger.classList.toggle("bg-white")
})



hLinks.forEach((hLink)=>{
    hLink.addEventListener("click", () => {
        menu.classList.toggle("hidden")
        hamburger.classList.toggle("bg-white")
    })
})


moon.addEventListener("click", () => {
    body.classList.toggle("dark")
})