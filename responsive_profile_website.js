let header = document.querySelector("header")
let header_nav_bar = document.querySelector(".header_nav_bar")
let header_item=document.querySelectorAll(".header_nav_bar li")
let menu_btn=document.querySelector(".menu_btn")
window.addEventListener("scroll", e => {
    if (window.scrollY > 0&&!header.classList.contains("active")) {
        header.classList.add("active")
    } 
    if (window.scrollY==0) {
        header.classList.remove("active")
        
    } 
})  
menu_btn.addEventListener("click", () => {
    header_nav_bar.classList.toggle("active")
    menu_btn.classList.toggle("active")
    
})
header_item.forEach((el) => {
    el.addEventListener("click",()=> {
        header_nav_bar.classList.toggle("active")
        menu_btn.classList.toggle("active")
    })
})