// const navSlide = () => {
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.nav-items');
//     const navItems = document.querySelectorAll('.nav-items li')

// //toggle nav
//     burger.addEventListener('click', () => {
//         nav.classList.toggle('nav-active')
//     })

//     //animate links
//     navItems.forEach((link, index) => {
//         link.style.animation = `navLinkFade 0.5s ease fowards ${index / 7}s`;
//         console.log(index / 7);
//     })
// }
 
// navSlide() 

// const toggleBtn = document.querySelector("toggle-btn")
// const toggleBtnIcon = document.querySelector("toggle-btn i")
// const dropDownMenu = document.querySelector("dropdown-menu")

// toggleBtn.onclick = function () {
//     dropDownMenu.classList.toggle("open")
//     const isOpen = dropDownMenu.classList.contains("open")
    
//     toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
// }

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}