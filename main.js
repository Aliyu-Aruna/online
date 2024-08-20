const navlinks = document.querySelector(".nav-links")
const hamburger = document.querySelector(".hamburger")

hamburger.addEventListener("click", ()=> {
    navlinks.classList.toggle("active")
    hamburger.classList.toggle("active")
})